import { useState } from "react";
import { InputField } from "./InputField";
import { FaUser, FaEnvelope, FaBuilding, FaPhone } from "react-icons/fa";
import IDGlogo from "../assets/idg-logo.png"; // Adjust the path as necessary
import { Link } from "react-router-dom";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { name, email, company, phone };
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mb-20 mt-23 bg-white p-6 rounded shadow align-center">
      <div className="flex justify-center mb-4">
        <img src={IDGlogo} alt="IDG Logo" className="w-40" />
      </div>
      <div className="text-center mb-6">
        <p>
          <strong>Welcome to the IDG Registration Form!</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          icons={<FaUser />}
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          label="Email Address"
          icons={<FaEnvelope />}
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Company/Organization"
          icons={<FaBuilding />}
          placeholder="Enter your company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <InputField
          label="Phone Number"
          icons={<FaPhone />}
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          type="submit"
          className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
        <p className="mt-6  text-center">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-blue-500 hover:underline font-semibold transition duration-200 ease-in-out"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}
