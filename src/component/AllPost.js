import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Post from './Post';

const AllPost = () => {
    const [posts, setPosts] = useState([]);

         
    useEffect(() => {
        fetch(`http://localhost:1000/posts`)
          .then((res) => res.json())
          .then((data) => setPosts(data));
    },[posts])
    const handleDelete = (id) => {
        fetch(`http://localhost:1000/post?id=${id}`, {
            method:'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Post Removed');
                    const remaining = posts.filter(post => post._id !== id);
                    setPosts(remaining)
                }
            });
    }

    
   
    return (
        <div>
            {posts.map(post =><Post key={post._id} postt={post} handleDelete={handleDelete}></Post>)}
        </div>
    );
};

export default AllPost;