import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export default function Settings() {
  const eventInfo = {
    name: "Twinkle Twinkle",
    location: "Delhi",
    season: "Season 1",
    date: "22 Dec 2022",
  };

  const user = {
    email: "rajesh@gmail.com",
    phone: "+91 XXX XXX XXXX",
  };

  return (
    <div className="pb-20">
      <Header title="SETTINGS" />

      <div className="p-4 space-y-6">
        {/* Event Section */}
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-bold text-pink-600 mb-2">Event Info</h3>
          <p><strong>Name:</strong> {eventInfo.name}</p>
          <p><strong>Location:</strong> {eventInfo.location}</p>
          <p><strong>Season:</strong> {eventInfo.season}</p>
          <p><strong>Date:</strong> {eventInfo.date}</p>
        </div>

        {/* User Info */}
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-bold text-pink-600 mb-2">User Info</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>

        {/* App Info */}
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-bold text-pink-600 mb-2">App Info</h3>
          <p><strong>Version:</strong> 1.0.0</p>
        </div>

        {/* Logout */}
        <button className="w-full mt-4 bg-red-600 text-red py-2 rounded font-bold">
          Logout
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
