import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Forget = () => {
    const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();


    const handleForget = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;

        resetPassword(email)
            .then(() => {
                form.reset();
                toast.success("Check your email inbox or spam folder.");
                navigate('/login');
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }
    return (
      <div className="hero w-full my-20">
        <div className="hero-content flex-col w-full lg:flex-row">
          <div className="card py-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl text-center font-bold">Login now!</h1>
            {/* form */}
            <form onSubmit={handleForget} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              
              <div className="form-control mt-6">
                <input
                  className="btn bg-green-500 hover:bg-green-400 border-none"
                  type="submit"
                  value="Send Reset Mail"
                />
              </div>
            </form>

          </div>
        </div>
      </div>
    );
};

export default Forget;