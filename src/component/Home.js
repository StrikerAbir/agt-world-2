import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import AllPost from './AllPost';

const Home = () => {
    const { user } = useContext(AuthContext);
    
    const handleOnsubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const post = form.post.value;
        const data={name:user.displayName, email: user.email, post, like:0}
        console.log(data);
        fetch("http://localhost:1000/posts", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
            .then((data) => {
                console.log(data)
                form.reset();
            });
    }
    return (
      <div className='mt-10'>
        <form onSubmit={handleOnsubmit}>
          <div className="flex justify-center items-center">
            <textarea
              className="textarea textarea-bordered w-96 h-24"
                        placeholder="post"
                        name='post'
            ></textarea>
            <input type="submit" value="Post" className="btn btn-sm ml-5" />
          </div>
            </form>
            
            <div className='my-10'>
                <h2 className='text-center font-semibold text-2xl mb-5'>All posts</h2>
                <AllPost></AllPost>
            </div>
      </div>
    );
};

export default Home;