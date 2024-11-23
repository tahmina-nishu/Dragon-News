import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa6';

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold text-lg mb-3 text-center">Login with </h2>
            <div className='flex flex-col gap-3'>
                <button className="btn">
                    <FaGoogle></FaGoogle> Login with Google
                </button>
                <button className="btn">
                    <FaGithub></FaGithub> Login with Github 
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;