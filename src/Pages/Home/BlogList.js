

const BlogList = ({blogs, title, Delete}) => {    
    
    return(
        <div className="blog-List">
            {blogs.map( (blog) =>(
                <div className="blog-preview" key={blog.id} >
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <button onClick={() => Delete(blog.id)} >Delete Blog</button>
                </div>

            ))}
        </div>

    )
}

export default BlogList ;