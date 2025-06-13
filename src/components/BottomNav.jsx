import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { IoSettings } from "react-icons/io5";
import { MdOutlineQrCodeScanner } from "react-icons/md";

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white text-pink-600 flex justify-around items-center px-6 py-3 rounded-t-xl shadow-md z-10">
  {/* Profile Button */}
  <button
    onClick={() => navigate("/profile")}
    className="flex flex-col items-center text-xs hover:text-pink-700 transition duration-200"
  >
    <CgProfile className="w-7 h-7 hover:scale-105 transition duration-200" />
    <span>Profile</span>
  </button>

  {/* Scan Button */}
  <button
    onClick={() => navigate("/scan")}
    className="bg-pink-600 text-white rounded-full p-4 -mt-10 shadow-lg hover:bg-pink-700 hover:scale-105 transition duration-200"
  >
    <MdOutlineQrCodeScanner className="w-8 h-8" />
  </button>

  {/* Logout Button */}
  <button
    onClick={() => navigate("/login")}
    className="bg-pink-600 text-white rounded-full p-4 -mt-10 shadow-lg hover:bg-pink-700 hover:scale-105 transition duration-200"
  >
    <FiLogOut className="w-8 h-8" />
  </button>

  {/* Settings Button */}
  <Link
    to="/settings"
    className="flex flex-col items-center text-xs hover:text-pink-700 transition duration-200"
  >
    <IoSettings className="w-7 h-7 hover:scale-105 transition duration-200" />
    <span>Settings</span>
  </Link>
</div>

  );
}
