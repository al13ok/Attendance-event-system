import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export default function Profile() {
  const user = {
    name: "Rajesh Kumar",
    email: "rajesh@gmail.com",
    phone: "+91 XXX XXX XXXX",
    role: "Event Coordinator",
  };

  return (
    <div className="pb-20">
      <Header title="PROFILE" />

      <div className="flex flex-col items-center mt-6 px-4">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-gray-300 text-4xl flex items-center justify-center text-white font-bold mb-4">
          {user.name.split(" ")[0][0]}
        </div>

        {/* Name and Role */}
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.role}</p>

        {/* Info Card */}
        <div className="bg-white w-full mt-6 rounded shadow p-4 space-y-3">
          <p>
            <span className="font-semibold text-pink-600">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold text-pink-600">Phone:</span> {user.phone}
          </p>
        </div>

        {/* Logout Button */}
        <button className="mt-6 bg-red-600 text-white py-2 px-6 rounded font-semibold w-full max-w-xs">
          Logout
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
