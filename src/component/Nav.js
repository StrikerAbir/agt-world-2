import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="w-full flex justify-center">
            <Link to="/login" className="btn">Login</Link>
          </div>
        </div>
      </div>
    );
};

export default Nav;