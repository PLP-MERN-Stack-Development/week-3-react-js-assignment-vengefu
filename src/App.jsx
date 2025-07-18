import { useState } from 'react';
import './App.css';

// Import your components here
 import Button from './components/Button';
import Navbar from './components/Navbar';
 import Footer from './components/Footer';
 import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg mb-4">
              Welcome to the PLP Task Manager! Use the buttons below to manage your tasks.
            </p>
            <span className="text-gray-500 dark:text-gray-400 mt-4">
              <TaskManager />
            </span>
          </div>
        </div>
        
  
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
<ApiData />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App; 