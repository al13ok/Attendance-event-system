import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export default function AttendeeDetail() {
  const navigate = useNavigate();

  // Dummy attendee details
  const attendee = {
    name: "Rajesh Kumar",
    email: "rajesh@gmail.com",
    phone: "+91 XXX XXX XXXX",
    group: "Play Group",
    id: "RAJE/2022/567676",
    roleTags: ["Awardee", "Student"],
    checkIn: false,
    label: "ALL ROUNDER"
  };

  return (
    <div className="pb-20">
      <Header title="ATTENDEE DETAILS" />

      <div className="p-4">
        {/* Back button */}
        <button onClick={() => navigate(-1)} className="text-2xl text-pink-600 mb-3">←</button>

        <h2 className="text-center text-yellow-400 font-bold text-lg mb-1">
          {attendee.name.toUpperCase()}
        </h2>

        {/* Tags */}
        <div className="flex justify-center gap-2 mb-3">
          {attendee.roleTags.map((tag, i) => (
            <span key={i} className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-pink-600 font-bold text-xl mb-2">{attendee.label}</h3>
          <p className="text-blue-600 text-sm mb-2">{attendee.id}</p>

          <hr className="mb-3 border-gray-300" />

          <div className="text-left text-sm space-y-2">
            <p><strong>Name:</strong> {attendee.name}</p>
            <p><strong>Email:</strong> {attendee.email}</p>
            <p><strong>Phone:</strong> {attendee.phone}</p>
            <p><strong>Group:</strong> <span className="font-semibold">{attendee.group}</span></p>
            <p>
              <strong>Check-In:</strong>{" "}
              <span className={attendee.checkIn ? "text-green-500" : "text-red-500"}>
                {attendee.checkIn ? "YES" : "NO"}
              </span>
            </p>
          </div>

          {/* Check-In Button */}
          <button
            className="mt-6 w-full bg-pink-600 text-white py-2 rounded font-semibold"
            disabled={attendee.checkIn}
          >
            {attendee.checkIn ? "Checked In" : "Check-In"}
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
