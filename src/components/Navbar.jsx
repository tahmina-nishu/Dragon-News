import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
{/* ---------------------Logo------------------- */}
            <div></div>

{/* ---------------------nav items------------------- */}
            <div className='nav space-x-5'>
                <Link to="/">Home</Link>
                <Link to="/career">Career </Link>
                <Link to="/about">About</Link>
            </div>

{/* ---------------------profile & login------------------- */}
            <div className="login flex gap-2 items-center">
                <img src={userIcon}/>
                <button className='btn btn-neutral rounded-none'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;