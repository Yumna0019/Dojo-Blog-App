import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const EditBlog = () => {
    const { id } = useParams(); 
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    useEffect(() => {
        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        const blogToEdit = blogs.find((blog) => blog.id === parseInt(id));

        if (blogToEdit) {
            setTitle(blogToEdit.title);
            setBody(blogToEdit.body);
            setAuthor(blogToEdit.author);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBlog = { id: parseInt(id), title, body, author };

        let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        blogs = blogs.map((blog) => (blog.id === parseInt(id) ? updatedBlog : blog));
        localStorage.setItem('blogs', JSON.stringify(blogs));

        history.push('/');
    }

    return (
        <div className="edit">
            <h2>Edit Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input type="text" required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body: </label>
                <textarea required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author: </label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Student">Student</option>
                    <option value="Professor">Professor</option>
                    <option value="Anonymous">Anonymous</option>
                </select>
                <button>Edit</button>
            </form>
        </div>
    );
}

export default EditBlog;
