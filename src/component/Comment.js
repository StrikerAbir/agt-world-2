import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Comment = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const handleComment = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const commentData={postId: data._id, comment: comment}
        fetch("http://localhost:1000/comment", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(commentData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate('/')
          });
        
    }
    return (
      <div className="hero w-full my-20">
        <div className="hero-content flex-col w-full lg:flex-row">
          <div className="card py-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl text-center font-bold">Comment</h1>
            {/* form */}
            <form onSubmit={handleComment} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Comment</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="comment"
                  name="comment"
                  required
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-green-500 hover:bg-green-400 border-none"
                  type="submit"
                  value="Comment"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Comment;