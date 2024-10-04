import { useEffect, useState } from "react";
import { useHistory , useParams } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const backToHome = useHistory();
    const [blog, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem('blogs'));
        if (storedBlogs) {
            const foundBlog = storedBlogs.find((b) => b.id === parseInt(id));
            if (foundBlog) {
                setBlogs(foundBlog);
                setIsPending(false);
            } else {
                setError('Blog not found');
                setIsPending(false);
            }
        } else {
            setError('No blogs found');
            setIsPending(false);
        }
    },[id]);

    const handleClick = () => {
        const storedBlogs = JSON.parse(localStorage.getItem('blogs'));
        const updateBlogs = storedBlogs.filter((b) => b.id !== parseInt(id));
        localStorage.setItem('blogs', JSON.stringify(updateBlogs));
        backToHome.push('/');
    };

    const handleEdit = () => {
        backToHome.push(`/edit/${id}`);
    };

    return (  
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div> { error } </div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={() => backToHome.push('/')}>Back</button>
                    <button onClick={handleClick}>Delete</button>
                    <button onClick={handleEdit}>Edit</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;