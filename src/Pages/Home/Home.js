import { useState, useEffect } from 'react';
import './Home.css'
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs]= useState([
        {title:'My New Website', body:'Lorem ipsum!', author:'Abdur', id:'1'},
        {title:'My Birthday', body:'Lorem ipsum!', author:'Rehman', id:'2'},
        {title:'The Letter', body:'Lorem ipsum!', author:'Abdur', id:'3'}
    ]);


     const Delete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
     }
    
    useEffect(() => {
        console.log('hello');
        // console.log('hello');

    },[]);

    return (
        <div className="home">
           <BlogList blogs = {blogs} title='All Blogs' Delete= {Delete}/>
        </div>
    )
}

export default Home