import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../components/CSS/LabFour.css";
import { Navbar } from "../components/navbar/Navbar";
import { Home } from "../components/navbar/Home";
import { Login } from "../components/navbar/Login";
import { BitcoinRates } from "../components/BitcoinRate";

export const LabFour = () => {
  return (
    <Router>
      <div>
        <div className="tittle"> Lab 4 here </div>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bitcoinrates" element={<BitcoinRates />} />
        </Routes>
      </div>
    </Router>
  );
};
