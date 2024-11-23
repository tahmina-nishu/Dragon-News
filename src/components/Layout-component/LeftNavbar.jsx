import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {

const [categories, setCategories] = useState([]);
useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => setCategories(data.data.news_category
    ));
},[]);

    return (
        <div>
            <h2 className="font-semibold text-center mb-5">All Caterogy ({categories.length})</h2> 
            <div className='flex flex-col gap-3'>
                {
                    categories.map(category => (
                    <NavLink to={`/category/${category.category_id}`}>
                        <button className='btn bg-base-100 border-none w-full' key={category.category_id}>
                        {category.category_name}
                        </button>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default LeftNavbar;