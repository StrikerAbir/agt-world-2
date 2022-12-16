import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const handleLogOut = () => {
      logOut();
    };
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-end">
            {user?.uid ? (
              <div className="flex items-center">
                            <div>{ user?.displayName }</div>
                <Link to="/">
                  <button
                    onClick={handleLogOut}
                    className="btn btn-outline text-green-500 hover:bg-green-500 hover:border-none ml-3"
                  >
                    Logout
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center">

                <Link to="/login">
                  <button className="btn btn-outline text-green-500 hover:bg-green-400 hover:border-none ml-3">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Nav;