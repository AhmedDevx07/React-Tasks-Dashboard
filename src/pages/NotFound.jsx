import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0b0f19] text-white">
      <h1 className="text-9xl font-extrabold text-indigo-500 tracking-widest">404</h1>
      <div className="bg-red-500 px-2 text-sm rounded rotate-12 absolute">Page Not Found</div>
      <Link to="/task/1" className="mt-5 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white font-bold tracking-wider transition-all">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;