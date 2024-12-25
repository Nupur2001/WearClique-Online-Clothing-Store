import React from 'react';
import { Link } from "react-router-dom";

function Banner2() {
    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-20">
            <div className="flex flex-col items-center justify-center bg-gray-100  p-12 rounded-lg shadow-lg space-y-6">
                <h2 className="text-3xl font-bold text-center colorChange">
                    Discover Your Next Favorite Look!
                </h2>
                <p className="text-lg text-center text-gray-700 ">
                    Explore our curated categories and find styles that match your vibe.
                    Whether you're dressing up or keeping it casual, we've got something for everyone!
                </p>
                <div>
                    <Link to="/categories">
                        <button className="px-6 py-3 text-white btn rounded-md shadow-md transition-all ease-in-out duration-300 btn bg-white text-white duration-300 cursor-pointer btnColor border-0">
                            Explore Categories
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    );
}

export default Banner2;
