import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ErrorPage = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev === 0 ? prev : prev - 1)); // thanks to prev, we can always catch updated state
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  if (count === 0) {
    return <Navigate to="/" replace />;
  }
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="text-gray-800 dark:text-neutral-200 text-4xl font-semibold sm:text-5xl">
            Someting went wrong!
          </h3>
          <p className="text-gray-600 dark:text-gray-200">
            Within <strong>{count}</strong> seconds, you will be redirected to
            the home page!
          </p>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
