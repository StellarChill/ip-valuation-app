import React, { useState } from 'react';
import { InputField } from "./InputField";
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import IDGlogo from "../assets/idg-logo.png"; // Adjust the path as necessary

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = { email, password };

        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login success:', data);
                // Handle success, e.g., save token, navigate to another page
            } else {
                const error = await response.json();
                alert(error.message || 'Login failed');
            }
        } catch (err) {
            alert('Network error');
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
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
                    className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-600 text-white font-semibold py-2 px-4 rounded-full"
                >
                    Login
                </button>
            </div>
            <div className="text-center mt-4">
                <span>Don't have an account? </span>
                <Link to="/register" className="text-blue-500 font-semibold text-xs hover:underline">
                    Register here
                </Link>
            </div>
        </form>
    );
}

