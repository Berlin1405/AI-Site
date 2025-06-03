import React from "react";

export default function FooterLogo() {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: 48,
        height: 48,
        borderRadius: 16,
        background: "#12091a",
        boxShadow:
          "0 0 0 1.5px rgba(163,103,255,0.12), 0 4px 32px 0 rgba(163,103,255,0.10)",
        position: "relative",
        marginLeft: 0,
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 60% 40%, #fff 0%, #a367ff 40%, #6933ff 100%)",
          boxShadow:
            "0 0 24px 8px #a367ff88, 0 0 8px 2px #fff8",
        }}
      />
    </div>
  );
} 