import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-4 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">PLP Task Manager</h1>
          <div className="space-x-4">
            <Link to="/" className="text-gray-900 dark:text-gray-100 hover:underline">Home</Link>
            <Link to="/tasks" className="text-gray-900 dark:text-gray-100 hover:underline">Tasks</Link>
            <Link to="/about" className="text-gray-900 dark:text-gray-100 hover:underline">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;