import React, { useState } from "react";
import Header from "../components/Valuation/Header";
import SearchBar from "../components/Valuation/SearchBar";
import ValuationLinks from "../components/Valuation/ValuationLinks";
import Disclaimer from "../components/Valuation/Disclaimer";
import PatentValuation from "../components/Valuation/PatentValuation";

const ValuationPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Placeholder for API call
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <Header />
        <h1 className="text-4xl font-bold text-green-600 mb-4">Valuation Your Invention</h1>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSubmit={handleSearch}
        />
        <ValuationLinks />
        <Disclaimer />
      </div>
    </div>

      <div className="min-h-screen bg-white p-6">
        <PatentValuation query={searchQuery}/>
      </div>
    </>
  );
};

export default ValuationPage;
