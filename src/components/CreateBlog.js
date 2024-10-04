import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const [ title , setTitle] = useState('');
    const [ body , setBody] = useState('');
    const [ author , setAuthor] = useState('student');
    const backToHome = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        blog.id = blogs.length + 1;
        blogs.push(blog);

        localStorage.setItem('blogs', JSON.stringify(blogs));

        backToHome.push('/');
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
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
                <button type="Submit">Add Blog</button> 
            </form>
        </div>
     );
}
 
export default CreateBlog;