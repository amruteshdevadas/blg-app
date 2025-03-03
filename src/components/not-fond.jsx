import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">
          Oops! The page you are looking for does not exist.
        </p>
        <Button
          onClick={() => navigate("/")}
          className="mt-6 inline-block rounded-lg  px-6 py-3 text-white transition"
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
}
