import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold text-lg mb-3 text-center">Find Us On</h2>
            <div className="join flex *:bg-base-100 join-vertical">
                <button className="btn join-item justify-start">
                    <FaFacebook></FaFacebook> Facebook
                </button>
                <button className="btn join-item justify-start">
                    <FaTwitter></FaTwitter> Twitter
                </button>
                <button className="btn join-item justify-start">
                    <FaInstagram></FaInstagram> Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;