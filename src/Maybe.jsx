// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from '../src/my back.jpg';


const Maybe = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white"
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Brand Logo with Bounce Animation */}
      <img
        src={Logo}
        alt="Brand Logo"
        style={{
          width: "150px",
          height: "150px",
          objectFit: "contain",
          marginBottom: "20px",
        }}
      />

      {/* Message Card with Fade-In Animation */}
      <div
        className="bg-white p-6 rounded-2xl shadow-2xl fade-in"
        style={{
          maxWidth: "400px",
          backgroundColor: "#1F2937",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
        }}
      >
        <h1
          className="text-3xl font-bold"
          style={{
            color: "#F87171",
          }}
        >
          Maybe Next Time! 😔
        </h1>
        <p
          className="text-lg mt-2"
          style={{
            color: "#E5E7EB",
          }}
        >
          Try again later! We appreciate your visit.
        </p>
      </div>

      {/* Footer Message */}
      <p
        className="mt-6 text-sm opacity-80"
        style={{
          fontSize: "14px",
          marginTop: "20px",
        }}
      >
        © 2025 Silken Touch. All Rights Reserved.
      </p>
    </div>
  );
};

export default Maybe;