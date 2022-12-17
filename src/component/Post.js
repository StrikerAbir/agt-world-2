import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ postt,handleDelete }) => {
    const {_id, name, post, like } = postt
   

    return (
      <div className="mb-5 flex justify-center">
        <div className="card border w-1/2">
          <div className="card-body items-center text-center">
                    <h2 className="card-title">{ name}</h2>
                    <p>{ post}</p>
            <div className="card-actions justify-end">
              <Link  to={`/update/${_id}`} className="btn">Update</Link>
              <button className="btn" onClick={()=>{handleDelete(_id)}}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Post;