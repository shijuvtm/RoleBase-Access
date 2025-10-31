import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="w-full bg-white shadow-md py-3 px-6 flex justify-between items-center mt-4 rounded-2xl">
      
      <h1 className="text-xl font-bold text-blue-600">
        <Link to="/">RoleBase</Link>
      </h1>

      
      <div className="flex gap-4 items-center">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 transition font-medium"
        >
          Home
        </Link>

        
        {user && user.user.role === "Admin" && (
          <Link
            to="/admin"
            className="text-gray-700 hover:text-red-600 transition font-medium"
          >
            Admin
          </Link>
        )}

        {user && user.user.role === "Manager" && (
          <Link
            to="/manager"
            className="text-gray-700 hover:text-green-600 transition font-medium"
          >
            Manager
          </Link>
        )}

        {user && user.user.role === "User" && (
          <Link
            to="/user"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            User
          </Link>
        )}

        {/* Auth buttons */}
        {!user ? (
          <>
            <Link
              to="/login"
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={logout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
