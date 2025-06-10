// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => (
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center">
      <img
        src="/src/assets/idg-logo.png"
        alt="IPMart IDG Logo"
        className="h-10 mr-2"
      />
      <span className="text-xl font-semibold">IPMart IDG</span>
      <span className="text-gray-500 text-sm ml-2">Powered by Patsnap</span>
    </div>
    <span className="text-gray-500 text-sm">For illustrative purposes only</span>
  </div>
);

export default Header;
