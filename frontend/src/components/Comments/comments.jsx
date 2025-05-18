import React, { useState } from "react"
import { MoreVertical, Paperclip, Smile } from "lucide-react"
import axios from 'axios';
import "./Comment.css";

function CommentModal({ isOpen, onClose, post }) {
  const [comments, setComments] = useState([]);
  const [emojiList, setEmojiList] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleReplyToggle = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId ? { ...comment, showReplyBox: !comment.showReplyBox } : comment,
      ),
    );
  };

  const handleReplySubmit = (commentId, replyText) => {
    if (!replyText.trim()) return;

    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                { id: Date.now(), text: replyText, author: "Current User", timeAgo: "Just now" },
              ],
              showReplyBox: false,
            }
          : comment,
      ),
    );
  };

  const handleCommentSubmit = (event) => {
    if (event.key === "Enter" && event.target.value.trim()) {
      const newComment = {
        id: Date.now(),
        author: "Current User",
        text: event.target.value,
        likes: 0,
        dislikes: 0,
        timeAgo: "Just now",
        replies: [],
        showReplyBox: false,
      };

      setComments([newComment, ...comments]);
      event.target.value = "";
    }
  };

  const fetchEmojis = async () => {
    try {
      const name = 'slightly smiling face'; // You can dynamically pass this if needed
      const api_url = `https://api.api-ninjas.com/v1/emoji?name=${name}`;
      const response = await axios.get(api_url, {
        headers: { 'X-Api-Key': 'qDJNxMtW2jH6eizZUKEcIQ==D5apYCN5Y5eWPV4q' },
      });
      setEmojiList(response.data);
    } catch (error) {
      console.error('Error fetching emojis:', error);
    }
  };

  const handleEmojiClick = (emoji) => {
    const inputField = document.querySelector('.comment-input');
    inputField.value += emoji; // Add the selected emoji to the input field
  };

  const toggleEmojiPicker = () => {
    if (!showEmojiPicker) {
      fetchEmojis();
    }
    setShowEmojiPicker(!showEmojiPicker);
  };

  if (!isOpen || !post) return null;

  return (
    <div className="comment-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="comment-modal">
        <div className="comment-modal-content">
          {/* Post content section */}
          <div className="post-content">
            <div className="post-header">
              <div className="post-author">
                <img src={post.authorImage || "/placeholder.svg"} alt={post.author} className="author-avatar" />
                <span>{post.author}</span>
              </div>
              <span className="post-time">{post.date}</span>
              <button className="more-button">
                <MoreVertical className="more-icon" />
              </button>
            </div>
            <h2 className="post-title">{post.content}</h2>
            <p className="post-description">{post.description}</p>
            {post.image && <img src={post.image || "/placeholder.svg"} alt="Post" className="post-image" />}
            {post.video && (
              <video className="post-video" controls>
                <source src={post.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {/* Comments section */}
          <div className="comments-container">
            {comments.map((comment) => (
              <div key={comment.id} className="comment">
                <img src={post.authorImage || "/placeholder.svg"} alt={comment.author} className="comment-avatar" />
                <div className="comment-content">
                  <div className="comment-header">
                    <div className="comment-author">
                      {comment.author}
                      <span className="comment-time">{comment.timeAgo}</span>
                    </div>
                    <button className="more-button">
                      <MoreVertical className="more-icon" />
                    </button>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                  <div className="comment-actions">
                    <button className="action-button">
                      <span>{comment.likes}</span>
                    </button>
                    <button className="action-button">
                      <span>{comment.dislikes}</span>
                    </button>
                    <button className="reply-button" onClick={() => handleReplyToggle(comment.id)}>
                      Reply
                    </button>
                  </div>

                  {/* Replies */}
                  {comment.showReplyBox && (
                    <div className="reply-input-container">
                      <input
                        type="text"
                        placeholder="Write a reply..."
                        className="reply-input"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleReplySubmit(comment.id, e.target.value);
                            e.target.value = "";
                          }
                        }}
                      />
                    </div>
                  )}

                  {comment.replies.length > 0 && (
                    <div className="replies-container">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="reply">
                          <img
                            src={post.authorImage || "/placeholder.svg"}
                            alt={reply.author}
                            className="reply-avatar"
                          />
                          <div className="reply-content">
                            <div className="reply-author">
                              {reply.author}
                              <span className="reply-time">{reply.timeAgo}</span>
                            </div>
                            <p className="reply-text">{reply.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comment Input Section */}
        <div className="comment-input-container">
          <img src={post.authorImage || "/placeholder.svg"} alt="Current user" className="current-user-avatar" />
          <div className="comment-input-wrapper">
            <input
              type="text"
              placeholder="Write a comment..."
              className="comment-input"
              onKeyDown={handleCommentSubmit}
            />
            <div className="comment-input-actions">
              <button className="attachment-button">
                <Paperclip className="action-icon" />
              </button>
              <button className="emoji-button" onClick={toggleEmojiPicker}>
                <Smile className="action-icon" />
              </button>
              {showEmojiPicker && (
                <div className="emoji-picker">
                  {emojiList.map((emoji, index) => (
                    <button key={index} className="emoji-item" onClick={() => handleEmojiClick(emoji.character)}>
                      {emoji.character}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
