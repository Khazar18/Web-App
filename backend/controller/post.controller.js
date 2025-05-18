export const createPost = async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const userId = req.user.id;  // Assuming userId is set by verifyToken middleware
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Handle file uploads
    const image = req.files["image"] ? req.files["image"][0].path : null;
    const video = req.files["video"] ? req.files["video"][0].path : null;

    // Create the new post
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

export const uploadPost = async (req, res) => {
    try {
        const { author,authorImage,
          title,
          description,
          image,
          video,
          link,} = req.body;
        if (!title || !description || !author) {
            res.status(400).json({
                success: false,
                error: 'Please provide name, email and password',
            });
        }
        const newPost = new Post({
          author,
          authorImage,
          title,
          description,
          image,
          video,
          link,
        });

        await newPost.save();
        res.status(201).json({
            success: true,
            message: 'Post created',
            post: newPost,
        });
    } catch (error) {     
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}
