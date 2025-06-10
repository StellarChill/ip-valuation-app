// src/components/SearchBar.tsx
import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, onSubmit }) => (
  <form onSubmit={onSubmit} className="mb-6">
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Brief description of the invention here..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded-r-lg hover:bg-green-600 transition-colors"
      >
        <FaSearch />
      </button>
      <span className="ml-4 text-gray-500">Simple Search</span>
    </div>
  </form>
);

export default SearchBar;
