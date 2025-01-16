"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Correct import for `useRouter` in Next.js App Router
import React, { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim()) {
      router.push(`/list?Search=${name}`); // Use encodeURIComponent to handle special characters
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center p-2 justify-between gap-4 bg-gray-100 flex-1 rounded-md">
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        name="Search"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button type="submit" className="cursor-pointer">
        <Image src="/search.png" alt="search" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
