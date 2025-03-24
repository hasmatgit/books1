import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"


function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">      
      <div id="my_modal_3" className="border-[2px] shadow-md p-5 rounded-md w-[400px] bg-white relative">        
        <div className="">
          <form>
            {/* Cross Button inside the form */}
            <Link to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              type="button"
            >
              ✕
            </Link>            
            <h3 className="font-bold text-lg mb-4 text-center">Signup</h3>            
            {/* Name Input */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("fullname", { required: true })}
            />
            <br />
            {errors.name && <span className='text-sm text-red-500'>
              This field is required
              </span>}
            </div>

            {/* Email Input */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className='text-sm text-red-500'>
              This field is required
              </span>}
            </div>

            {/* Password Input */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("password", { required: true })}
            />
            <br />
            {errors.password && <span className='text-sm text-red-500'>
              This field is required
              </span>}
            </div>

            {/* Buttons */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p className="text-sm">
                Have account?{" "}
                <button 
                className="underline text-blue-500"
                onClick={() => 
                    document.getElementById("my_modal_3").showModal()
                    }
                >
                  Login
                </button>{" "}
                <Login/>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
