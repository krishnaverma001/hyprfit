"use client";
import { useState } from "react";
import Link from "next/link";

export default function UserDetails() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [experience, setExperience] = useState("");
  const [sessionDuration, setSessionDuration] = useState("");

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = { age, gender, weight, height, experience, sessionDuration };
    console.log("User Data:", userData);
    // You can integrate API calls to store user data here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 flex flex-col justify-center items-center py-20">
      <div className="w-[520px] bg-white px-12 py-16 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Tell Us About Yourself</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Age</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black" required />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black" required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Weight (kg)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black" required />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Height (cm)</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black" required />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Experience Level</label>
            <select value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black" required>
              <option value="">Select</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Average Session Duration (mins)</label>
            <input type="number" value={sessionDuration} onChange={(e) => setSessionDuration(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black" required />
          </div>

          <button type="submit" className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Submit
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/dashboard" className="text-black font-medium hover:underline cursor-pointer">
            Skip for now
          </Link>
        </div>
      </div>
    </div>
  );
}