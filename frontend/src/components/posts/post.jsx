import React, { useEffect, useState } from "react";
import axios from "axios";
import { MoreVertical, ThumbsUp, MessageSquare, Share2 } from "lucide-react";
import "./Post.css";
import CommentModal from "../Comments/comments";
import profilePic from "../../assets/userprofilepic1.svg";

export default function PostComponent({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/posts/user/${userId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [userId]);

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <article key={post._id} className="post-card">
          <div className="post-header">
            <div className="post-author-info">
              <img src={post.authorImage || profilePic} alt={post.author} className="author-image" />
              <div className="post-author">{post.author}</div>
            </div>
            <div className="post-menu">
              <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
              <MoreVertical className="menu-icon" />
            </div>
          </div>

          <div className="post-inner-container">
            <h3 className="post-title">{post.content}</h3>
            <p className="post-description">{post.description}</p>
            {post.image && <img src={post.image} alt="Post visual" />}
          </div>

          <div className="post-actions">
            <button className="action-button">
              <ThumbsUp size={18} /> {post.likes} Likes
            </button>
            <button className="action-button">
              <MessageSquare size={18} /> {post.comments} Comments
            </button>
            <button className="action-button">
              <Share2 size={18} /> Share
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
