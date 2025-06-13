import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export default function ScanQR() {
  return (
    <div className="pb-20">
      <Header title="SCAN QR" />

      <div className="p-4 text-center">
        <p className="text-gray-600 text-lg mt-20">QR Scanner Placeholder</p>
        <div className="mt-6 p-12 border-4 border-dashed border-gray-400 rounded-lg">
          📷
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
