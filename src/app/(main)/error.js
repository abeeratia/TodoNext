"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }) {
  console.error("🚨 Error caught by Next.js:", error);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-4">
          😢 Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          {error?.message ||
            "An unexpected error occurred. Please try again later."}
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => reset()}
            className="cursor-pointer bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 transition"
          >
            Try Again 🔄
          </button>
          <Link
            href="/"
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition"
          >
            Back to Home 🏠
          </Link>
        </div>
      </div>
    </>
  );
}
