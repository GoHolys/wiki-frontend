import React, { useState } from "react";
import { User } from "../types/User";
import { signUp } from "../services/api";

const SignupForm = () => {
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const user: User = { userName, language };
      const { token } = await signUp(user);
      setToken(token);
    } catch (error) {
      setError("Signup failed. Please try again.");
      console.error("Signup error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="language"
        >
          Language:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </div>
      {token && <p className="mt-4 text-green-600">Your token: {token}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </form>
  );
};

export default SignupForm;
