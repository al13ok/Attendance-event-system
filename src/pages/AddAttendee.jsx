import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export default function AddAttendee() {
  return (
    <div className="pb-20">
      <Header title="ADD ATTENDEE" />

      <div className="p-4 space-y-4">
        <input type="text" placeholder="Full Name" className="p-2 border rounded w-full" />
        <input type="tel" placeholder="Phone Number" className="p-2 border rounded w-full" />
        <input type="text" placeholder="ID / Code" className="p-2 border rounded w-full" />
        
        {/* Category dropdown */}
        <select className="p-2 border rounded w-full">
          <option value="">Select Category</option>
          <option value="Student">Student</option>
          <option value="Guest">Guest</option>
          <option value="Class Teacher">Class Teacher</option>
          <option value="School">School</option>
        </select>

        <button className="bg-green-600 text-white w-full py-2 rounded font-semibold hover:bg-green-700 transition">
          Submit
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
