import { useNavigate } from "react-router-dom";

const HeaderLoginButton = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/login")}
      className="bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-gray-200 cursor-pointer"
    >
      Login Now
    </div>
  );
};

export default HeaderLoginButton;
