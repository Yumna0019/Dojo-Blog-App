import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    if (storedBlogs) {
        setBlogs(storedBlogs);
    } else {
        setError('No blogs found');
    }
  }, []);

  return (
    <div className="home">
      {error && (
        <div>
          {error}
          <Link to="/create">
            <button className="add-blog-btn">Add your blog</button>
          </Link>
        </div>
      )}
      {blogs && blogs.length > 0 ? (
        <BlogList blogs={blogs} title="All Blogs!" />
      ) : (
        <div>
          <Link to="/create">
            <button className="add-blog-btn">Add your blog</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
