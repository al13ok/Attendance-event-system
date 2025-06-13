import { useNavigate } from "react-router-dom";

export default function AttendeeCard({ name, phone, id, tags = [], checkedIn = false }) {
  const navigate = useNavigate();
  const tagColors = {
    Awardee: "bg-green-600",
    Student: "bg-green-400",
    "Class Teacher": "bg-teal-500",
    Guest: "bg-orange-500",
    School: "bg-indigo-500",
  };

    return (
    <div onClick={() => navigate(`/attendee/${id}`)}
      className="cursor-pointer bg-white p-4 rounded-md shadow-md my-2 flex justify-between items-start"
   >
      <div>
        <div className="flex gap-2 flex-wrap mb-1">
          {tags.map((tag, i) => (
            <span key={i} className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-blue-600 font-semibold text-sm">{id}</p>
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-600">{phone}</p>
      </div>
      <div className="flex flex-col items-end">
        <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center text-xl">
          {checkedIn ? (
            <span className="text-green-500">✔</span>
          ) : (
            <span className="text-red-500">●</span>
          )}
        </div>
        <span className="text-sm mt-1 font-semibold">
          Check-In: {checkedIn ? "Yes" : "No"}
        </span>
      </div>
    </div>
  );
}
