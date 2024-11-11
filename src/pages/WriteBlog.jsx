import { useState } from "react";
import axios from "axios";

function WriteBlog() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tag, setTag] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the data to send to the backend
    const newBlog = {
      title,
      desc,
      tag,
      coverImage,
      author,
      date: new Date().toISOString(),
      id: Date.now(), // Temporary ID generation, you might want to handle this differently
    };

    try {
      // Send POST request to the backend
      await axios.post("http://localhost:3000/blogs", newBlog);
      alert("Blog posted successfully!");
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("There was an error posting your blog.");
    }
  };

  return (
    <div>
      <h2>Write a Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tag:</label>
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </div>
        <div>
          <label>Cover Image URL:</label>
          <input
            type="text"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Post Blog</button>
      </form>
    </div>
  );
}

export default WriteBlog;