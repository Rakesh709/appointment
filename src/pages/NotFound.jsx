import React from 'react'
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
     <div className="flex flex-col items-center justify-center h-screen bg-[#96D7C6] text-center px-6">
      <AlertTriangle className="w-16 h-16 text-[#135D66] mb-6" />
      
      <h1 className="text-6xl font-bold text-[#135D66]">404</h1>
      <h2 className="text-2xl font-semibold text-slate-800 mt-2">Page Not Found</h2>
      <p className="text-slate-600 mt-4 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <div className="mt-8 flex space-x-4">
        <Link
          to="/"
          className="bg-[#135D66] hover:bg-[#1C7A7F] text-white px-6 py-3 rounded-full shadow-lg transition"
        >
          Go Home
        </Link>
        {/* <Link
          to="/contact"
          className="border border-[#135D66] text-[#135D66] hover:bg-[#135D66] hover:text-white px-6 py-3 rounded-full transition"
        >
          Contact Support
        </Link> */}
      </div>
    </div>
  )
}

export default NotFound