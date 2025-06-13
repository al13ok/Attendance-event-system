import { Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import AttendeeDetail from "./pages/AttendeeDetail";
import Settings from "./pages/Settings";
import ForgotPassword from "./pages/ForgotPassword";
import ScanQR from "./pages/ScanQR";
import Profile from "./pages/Profile";
import AddAttendee from "./pages/AddAttendee";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/event/:id" element={<EventDetail />} />
      <Route path="/attendee/:id" element={<AttendeeDetail/>} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/scan" element={<ScanQR />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/add-attendee" element={<AddAttendee />} />
    </Routes>
  );
}

export default App;
