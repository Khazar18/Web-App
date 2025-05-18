import Post from "../models/post.model.js";

// Your createPost function
export const createPost = async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const userId = req.user.id; // Assuming userId is set by verifyToken middleware
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Handle file uploads
    const image = req.files["image"] ? req.files["image"][0].path : null;
    const video = req.files["video"] ? req.files["video"][0].path : null;

    // Create a new post
    const newPost = new Post({
      userId,
      author: user.fullName,
      authorImage: user.profileImage,
      title,
      description,
      image,
      video,
      link,
    });

    // Save the post to the database
    await newPost.save();
    res.status(201).json(newPost);  // Return the created post
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
