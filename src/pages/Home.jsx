import { useState } from "react";
import Header from "../components/Header";
import AttendeeCard from "../components/AttendeeCard";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate=useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const attendees = [
    { id: "JAHN/2022/567676", name: "Jahnvi Singh", phone: "9923112320", tags: ["Awardee", "Student"], checkedIn: true },
    { id: "RAJE/2022/123456", name: "Rajesh Kumar", phone: "9876543210", tags: ["Guest"], checkedIn: false },
    { id: "NINA/2022/333444", name: "Nina Sharma", phone: "9000111222", tags: ["Student"], checkedIn: true },
    { id: "PUNE/2022/121314", name: "Puneet Verma", phone: "9988776655", tags: ["School"], checkedIn: true },
    { id: "KIRA/2022/141516", name: "Kiran Das", phone: "9445566778", tags: ["Class Teacher"], checkedIn: false },
    { id: "TINA/2022/112233", name: "Tina Mehra", phone: "9311234567", tags: ["Student"], checkedIn: false },
    { id: "SURA/2022/445566", name: "Suraj Yadav", phone: "9012345678", tags: ["Guest"], checkedIn: true },
    { id: "HEMA/2022/778899", name: "Hema Malini", phone: "9090909090", tags: ["Class Teacher"], checkedIn: true },
    { id: "DHEE/2022/998877", name: "Dheeraj Bhatt", phone: "9998887776", tags: ["Student"], checkedIn: true },
    { id: "RIYA/2022/112211", name: "Riya Sen", phone: "9345678912", tags: ["School"], checkedIn: false },
  ];

  // 🧠 Filter based on search + category
  const filteredAttendees = attendees.filter((attendee) => {
    const matchesSearch = `${attendee.name} ${attendee.phone} ${attendee.id}`.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      attendee.tags.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

 // Categories to show
const categories = ["All", "Guest", "Student", "Class Teacher", "School"];

// Count how many attendees belong to each category
const categoryCounts = {
  All: attendees.length,
  Guest: attendees.filter((a) => a.tags.includes("Guest")).length,
  Student: attendees.filter((a) => a.tags.includes("Student")).length,
  "Class Teacher": attendees.filter((a) => a.tags.includes("Class Teacher")).length,
  School: attendees.filter((a) => a.tags.includes("School")).length,
};

  return (
    <div className="pb-20">
      <Header title="ATTENDEES LIST" />

      <div className="p-4">
        {/* 🔍 Search Bar */}
        <input
          type="text"
          placeholder="Search by Name / Phone / ID"
          className="p-2 border rounded w-full mb-3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* 🧭 Category Tabs */}
      <div className="flex gap-2 overflow-x-auto mb-4">
  {categories.map((cat) => (
    <button
      key={cat}
      className={`px-4 py-1 rounded-full text-sm font-semibold border whitespace-nowrap ${
        selectedCategory === cat
        ? "bg-pink-600 text-white border-pink-600"
        : "bg-white text-gray-700"
      }`}
    onClick={() => setSelectedCategory(cat)}
    >
      {cat} ({categoryCounts[cat]})
    </button>
  ))}
</div>


        {/* 📝 List */}
        {filteredAttendees.length === 0 ? (
          <div className="text-center mt-12 text-gray-600">
            <p className="text-pink-600 font-bold text-lg">No matching attendees</p>
          </div>
        ) : (
          filteredAttendees.map((attendee, index) => (
            <AttendeeCard key={index} {...attendee} />
          ))
        )}
      </div>
      {/* ➕ Floating Add Button */}
<button
  onClick={() => navigate("/add-attendee")}
  className="fixed bottom-20 right-5 bg-pink-600 text-white rounded-full w-14 h-14 text-3xl flex items-center justify-center shadow-lg hover:bg-pink-700 transition z-40"
>
  +
</button>


      <BottomNav />
    </div>
  );
}
