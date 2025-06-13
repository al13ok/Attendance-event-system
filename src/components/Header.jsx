export default function Header({ title = "ATTENDEES LIST" }) {
  return (
    <div className="bg-sky-500 text-white px-4 py-3 flex justify-between items-center shadow-md">
      <div>
        <p className="text-sm">12 jun 2025</p>
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-sm">Twinkle Twinkle | Delhi | Season 1</p>
      </div>
      <button>
        🔄
      </button>
    </div>
  );
}
