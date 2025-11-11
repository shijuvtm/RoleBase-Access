import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Manager() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center mt-5  justify-center text-center">
       <h1 className="text-3xl font-bold text-red-600">
        👋 Hi, {user?.user?.name || "Manager"}
      </h1>

      <p className="text-gray-700 mt-2 text-lg">
        Welcome back, you have Manager privileges.
      </p>
    </div>
  );
}
