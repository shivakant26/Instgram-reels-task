import React from "react";
import { FaArrowLeft } from "react-icons/fa"
import "./Header.css";

export default function Header() {
  return (
    <div className="video-header">
      <div className="header">
        <span><FaArrowLeft /></span>
        <span>Reels</span>
      </div>
    </div>
  );
}
