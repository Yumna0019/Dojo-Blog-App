const CreateBlog = () => {
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog Title: </label>
                <input type="text" required />
                <label>Blog Body: </label>
                <textarea required></textarea>
                <label>Blog Author: </label>
                <select >
                    <option value="mario">Student</option>
                    <option value="yoshi">Professor</option>
                </select>
            </form>
            <button>Add Blog</button>
        </div>
     );
}
 
export default CreateBlog;