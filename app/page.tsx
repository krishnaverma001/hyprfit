"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Home() {
  // State for workouts
  const [workouts, setWorkouts] = useState([
    { name: "Spartan Strength Circuit", duration: "45 min", completed: false },
    { name: "Olympian Cardio Blast", duration: "30 min", completed: true },
    { name: "Athena Core Challenge", duration: "20 min", completed: false },
  ]);

  // State for todo workouts
  const [todoWorkouts, setTodoWorkouts] = useState([
    { id: 1, name: "Leg Day: Titan Squats", completed: false },
    { id: 2, name: "Upper Body: Godlike Pullups", completed: false },
    { id: 3, name: "Core: Hades Ab Circuit", completed: false },
    { id: 4, name: "Cardio: Hermes Sprint Intervals", completed: false },
  ]);

  const [newWorkoutName, setNewWorkoutName] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  // Daily Challenge Data
  const dailyChallenge = {
    name: "300 Spartan Pushups",
    progress: 45,
    target: 300,
  };

  // Workout Progress Data
  const workoutProgress = [
    { month: "Jan", strength: 65, endurance: 45 },
    { month: "Feb", strength: 70, endurance: 50 },
    { month: "Mar", strength: 80, endurance: 65 },
    { month: "Apr", strength: 85, endurance: 70 },
  ];

  // Calendar Data
  const monthName = "March 2023";
  const daysInMonth = 31;
  const startDay = 3; // Wednesday (0 = Sunday)
  const workoutDays = [2, 3, 7, 8, 9, 14, 16, 21, 23, 28, 30];

  // Toggle workout completion
  const toggleCompletion = (index: number) => {
    setWorkouts((prevWorkouts) =>
      prevWorkouts.map((workout, i) =>
        i === index ? { ...workout, completed: !workout.completed } : workout
      )
    );
  };

  // Toggle todo workout completion
  const toggleTodoCompletion = (id: number) => {
    setTodoWorkouts((prev) =>
      prev.map((workout) =>
        workout.id === id ? { ...workout, completed: !workout.completed } : workout
      )
    );
  };

  // Add new todo workout
  const addTodoWorkout = () => {
    if (newWorkoutName.trim()) {
      setTodoWorkouts((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: newWorkoutName,
          completed: false,
        },
      ]);
      setNewWorkoutName("");
      setShowAddForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/greek-helmet.png"
            alt="Greek Helmet"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            HYPRFIT©
          </span>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search workouts..."
              className="bg-white border border-gray-300 rounded-full px-4 py-2 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-black shadow-sm"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <Link href="#" className="hover:text-black font-medium transition-colors">Community</Link>
          <Link href="#" className="hover:text-black font-medium transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-black font-medium transition-colors">Contact</Link>
          <Link
            href="#"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium shadow-md"
          >
            Join Us
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            FORGE YOUR <span className="bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent">SPARTAN</span> PHYSIQUE
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Train like the warriors of old with AI-powered workouts that carve stone from flesh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors text-center shadow-lg"
            >
              Begin Your Trial
            </Link>
            <Link
              href="#"
              className="border-2 border-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors text-center"
            >
              See Transformations
            </Link>
          </div>
        </div>

        <div className="md:w-3/4 flex justify-end">
          <div className="relative w-full max-w-xl aspect-square">
            <Image
              src="/teen_white.png"
              alt="Spartan Warrior"
              width={1000}
              height={1000}
              className="object-cover rounded-lg mix-blend-multiply"
              priority
            />
          </div>
        </div>

      </main>

      {/* Dashboard Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Workouts */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">
            Recommended Workouts
          </h2>
          <ul className="space-y-4">
            {workouts.map((workout, index) => (
              <li key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
                <div>
                  <h3 className={`font-medium ${workout.completed ? "line-through text-gray-400" : "text-black"}`}>
                    {workout.name}
                  </h3>
                  <p className="text-sm text-gray-500">{workout.duration}</p>
                </div>
                <button
                  onClick={() => toggleCompletion(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90 
                    w-full sm:w-auto mt-2 sm:mt-0
                    ${workout.completed ? "bg-gray-200 text-gray-600" : "bg-black text-white hover:bg-gray-800"}`}
                >
                  {workout.completed ? "Completed" : "Start"}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Monthly Calendar */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Workout Calendar</h2>
          <div className="mb-4 flex justify-between items-center">
            <h3 className="font-medium">{monthName}</h3>
            <div className="flex gap-2">
              <button className="p-1 rounded hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-1 rounded hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-center text-sm font-medium py-1">{day}</div>
            ))}
            {Array.from({ length: startDay }).map((_, i) => (
              <div key={`empty-${i}`} className="h-8"></div>
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const hasWorkout = workoutDays.includes(day);
              return (
                <div
                  key={day}
                  className={`h-8 flex items-center justify-center rounded-full text-sm 
                    ${hasWorkout ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                >
                  {day}
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <span className="text-sm">Workout day</span>
          </div>
        </div>

        {/* Daily Challenge */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Daily Challenge</h2>
          <h3 className="font-medium mb-2">{dailyChallenge.name}</h3>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress: {dailyChallenge.progress}/{dailyChallenge.target}</span>
              <span>{Math.round((dailyChallenge.progress / dailyChallenge.target) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-black h-2.5 rounded-full"
                style={{ width: `${(dailyChallenge.progress / dailyChallenge.target) * 100}%` }}
              ></div>
            </div>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Log Progress
          </button>
        </div>

        {/* Progress Graph */}       
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Workout Progress</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workoutProgress} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="strength" fill="#4B5563" name="Strength" />
                <Bar dataKey="endurance" fill="#9CA3AF" name="Endurance" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* To-Do Workouts */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">To-Do Workouts</h2>
          <div className="space-y-3">
            {todoWorkouts.map((workout) => (
              <div key={workout.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={workout.completed}
                  onChange={() => toggleTodoCompletion(workout.id)}
                  className="mr-3 h-5 w-5 rounded border-gray-300 accent-black focus:ring-black"
                />
                <span className={workout.completed ? "line-through text-gray-400" : ""}>
                  {workout.name}
                </span>
              </div>
            ))}
          </div>

          {showAddForm ? (
            <div className="mt-4">
              <input
                type="text"
                value={newWorkoutName}
                onChange={(e) => setNewWorkoutName(e.target.value)}
                placeholder="Enter workout name"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={addTodoWorkout}
                  className="flex-1 bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  Add
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 border border-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowAddForm(true)}
              className="mt-4 w-full border border-gray-300 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>+</span>
              <span>Add Workout</span>
            </button>
          )}
        </div>

      </section>

      <footer className="bg-[#222] border-t border-gray-200 py-12 px-6 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-tighter">COMPANY</h3>
            <ul className="space-y-3">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-tighter">PRODUCTS</h3>
            <ul className="space-y-3">
              <li><Link href="#">Workouts</Link></li>
              <li><Link href="#">Nutrition</Link></li>
              <li><Link href="#">Coaching</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-tighter">SUPPORT</h3>
            <ul className="space-y-3">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-tighter">MY ACCOUNT</h3>
            <div className="space-y-4">
              <Link href="#" className="block hover:text-gray-300 transition">Log In/Register</Link>
              <Link href="#" className="block hover:text-gray-300 transition">Contact Us</Link>
              <div className="pt-6 flex items-center gap-2">
                <Image
                  src="/greek-helmet-white.png"
                  alt="Greek Helmet"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span className="font-bold text-lg">HYPRFIT ©</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}