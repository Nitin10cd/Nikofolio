import { FaTools } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4">
      <FaTools className="text-5xl md:text-6xl text-gray-400 dark:text-gray-500 mb-6 animate-pulse" />
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-center">
        Coming Soon
      </h1>
      <p className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 text-center max-w-lg">
        This page is under construction. It will be updated soon with new content.
      </p>
    </div>
  );
}