import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showDropdown, setShowDropdown] = useState(false); 
  const [selectedOptions, setSelectedOptions] = useState([]); 

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSignup = (data) => {
    console.log("Signup Data:", { ...data, clothes: selectedOptions });
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex justify-center items-center bg-gray-100 mt-20">
      <div className="w-full max-w-lg bg-white p-6 rounded shadow-md ">
        <form onSubmit={handleSubmit(handleSignup)}>
          <h3 className="text-2xl font-bold text-center mb-4">Signup</h3>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Gender</label>
            <div className="flex space-x-4 mt-2">
              <label>
                <input
                  type="radio"
                  value="Male"
                  {...register("gender", { required: "Gender is required" })}
                /> Male
              </label>
              <label>
                <input
                  type="radio"
                  value="Female"
                  {...register("gender", { required: "Gender is required" })}
                /> Female
              </label>
              <label>
                <input
                  type="radio"
                  value="Other"
                  {...register("gender", { required: "Gender is required" })}
                /> Other
              </label>
            </div>
            {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
          </div>

          {/* Types of Clothes */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Types of Clothes</label>
            <div
              className="relative"
              onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown
            >
              <div className="input input-bordered cursor-pointer w-full flex justify-between items-center">
                <span>
                  {selectedOptions.length > 0
                    ? selectedOptions.join(", ")
                    : "Select Types of Clothes"}
                </span>
                <span>▼</span>
              </div>
              {showDropdown && (
                <div className="absolute top-12 left-0 w-full bg-white border rounded shadow-md z-10">
                  {["Shirts", "T-Shirts", "Pants", "Dresses", "Skirts"].map((option) => (
                    <div
                      key={option}
                      className={`p-2 hover:bg-gray-200 cursor-pointer ${
                        selectedOptions.includes(option) ? "bg-gray-100" : ""
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      <input
                        type="checkbox"
                        checked={selectedOptions.includes(option)}
                        readOnly
                        className="mr-2"
                      />
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bio */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Bio</label>
            <textarea
              {...register("bio", { required: "Bio is required" })}
              className="textarea textarea-bordered w-full"
              placeholder="Write about yourself"
            />
            {errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio.message}</p>}
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: { value: /^[0-9]{10}$/, message: "Enter a valid phone number" },
              })}
              className="input input-bordered w-full"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters long" },
              })}
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button type="submit" className="btn btnColor w-full text-white">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Signup;
