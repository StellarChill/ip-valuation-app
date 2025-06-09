import React, { useState } from 'react'
import { InputField } from "./InputField"
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import IDGlogo from "../assets/idg-logo.png"; // Adjust the path as necessary
// import ImageSlide from "./swipser"; // Adjust the path as necessary

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = { email, password };
        console.log(formData);
    };

    return (
            <>
        {/* <ImageSlide /> */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 bg-white mr-60 p-6 rounded float-right">
            <div className="flex justify-center mb-4">
                <img src={IDGlogo} alt="IDG Logo" className="w-40" />
            </div>
            <div className="text-center mb-6">
                <strong>Welcome to the IDG Login!</strong>
            </div>

            <InputField
                label="Email Address"
                icons={<FaEnvelope />}
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
                label="Password"
                icons={<FaLock />}
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-center mt-6">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                    Login
                </button>
            </div>
            <div className="text-center mt-4">
                <span>Don't have an account? </span>
                <Link to="/register" className="text-blue-500 hover:underline">
                    Register here
                </Link>
            </div>
        </form></>
    )
}

