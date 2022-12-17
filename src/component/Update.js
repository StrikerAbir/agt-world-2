import React from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
  const post = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const upPost = form.upPost.value;
    //   console.log(post._id,upPost);
    fetch(`https://agt-serverside.vercel.app/postUpdate?id=${post._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ upPost }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Post updated");
          navigate("/");
        } else {
          toast.error("Try again");
        }
      });
  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content flex-col w-full lg:flex-row">
        <div className="card py-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Update post</h1>
          {/* form */}
          <form onSubmit={handleUpdate} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Post</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="post"
                defaultValue={post.post}
                name="upPost"
                required
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn bg-green-500 hover:bg-green-400 border-none"
                type="submit"
                value="Update"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
