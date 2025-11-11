import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function User() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center mt-5">
     
      <h1 className="text-3xl font-bold text-blue-600">
        👋 Hi, {user?.user?.name || "User"}
      </h1>

      <p className="text-gray-700 mt-2 text-lg">
        Welcome back to your dashboard!
      </p>
    </div>
  );
}
