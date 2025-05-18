import React, { useState } from "react";
import axios from "axios";

const UniversityImageSearch = () => {
  const [university, setUniversity] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchImages = async () => {
    if (!university.trim()) {
      setError("Please enter a university name.");
      return;
    }
    setError("");
    setLoading(true);
    setImages([]);

    try {
      const clientId = ""; // Replace with your Unsplash API key
      const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        university
      )}&client_id=${clientId}&per_page=10`;

      const response = await axios.get(url);

      if (response.data.results.length === 0) {
        setError("No images found for the entered university name.");
      } else {
        setImages(response.data.results.map((img) => img.urls.small));
      }
    } catch (err) {
      setError("Failed to fetch images. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>University Image Search</h1>
      <input
        type="text"
        placeholder="Enter university name"
        value={university}
        onChange={(e) => setUniversity(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          marginRight: "10px",
        }}
      />
      <button
        onClick={fetchImages}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          background: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`University ${index + 1}`}
            style={{
              width: "200px",
              height: "150px",
              objectFit: "cover",
              margin: "10px",
              borderRadius: "5px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UniversityImageSearch;
