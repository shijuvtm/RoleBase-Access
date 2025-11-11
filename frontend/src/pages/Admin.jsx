import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Admin() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">

      <h1 className="text-3xl font-bold text-red-600">
        👋 Hi, {user?.user?.name || "Admin"}
      </h1>

      <p className="text-gray-700 mt-2 text-lg">
        Welcome back, you have admin privileges.
      </p>
    </div>
  );
}
