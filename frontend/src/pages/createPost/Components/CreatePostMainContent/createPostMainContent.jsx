import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { uploadPost } from "../../../../../../backend/controller/post.controller";
import "./createPostMainContent.css";

export function CreatePostMainContent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [link, setLink] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setImage(file);
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);
    if (video) formData.append("video", video);
    formData.append("link", link);

    await uploadPost(formData.title, formData.description, formData.image, formData.video, formData.link);
    toast.success('Sign-up successful! Redirecting to email verification...');

    try {
      await axios.post("http://localhost:3001/api/posts/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      navigate("/profile");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="main-content">
      <h1 className="page-title">Create Post</h1>

      <form className="create-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Title<span className="required">*</span>
          </label>
          <input type="text" placeholder="Write a title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>
            Description<span className="required">*</span>
          </label>
          <textarea
            placeholder="Write Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={500}
            required
          ></textarea>
          <span className="character-count">{description.length}/500</span>
        </div>

        <div className="form-group">
          <label>
            Picture <span className="optional">(Optional)</span>
          </label>
          <div className="file-upload">
            {imagePreview && <img src={imagePreview} alt="Preview" className="uploaded-image" />}
            <span className="chooseFile">Choose File</span>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        </div>

        <div className="form-group">
          <label>
            Video <span className="optional">(Optional)</span>
          </label>
          <input type="file" accept="video/*" onChange={handleVideoChange} />
        </div>

        <div className="form-group">
          <label>
            Links <span className="optional">(Optional)</span>
          </label>
          <input type="url" placeholder="Attach links" value={link} onChange={(e) => setLink(e.target.value)} />
        </div>

        <button type="submit" className="post-button">
          Post
        </button>
      </form>
    </div>
  );
}
