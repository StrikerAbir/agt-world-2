import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Post from "./Post";

const AllPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:1000/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [posts]);
  const handleDelete = (id) => {
    fetch(`http://localhost:1000/post?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Post Removed");
          const remaining = posts.filter((post) => post._id !== id);
          setPosts(remaining);
        }
      });
    };
    
    const handleLike = (id,like) => {
        const upLike = like + 1;
        fetch(`http://localhost:1000/likeUpdate?id=${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ upLike }),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            
          });
    }

    const handleComment = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        console.log(comment);
    }

  return (
    <div>
      {posts.map((post) => (
        <Post key={post._id} postt={post} handleDelete={handleDelete} handleLike={handleLike}></Post>
      ))}
    </div>
  );
};

export default AllPost;
