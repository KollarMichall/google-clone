import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../contexts/ResultContextProvider'

import { Links } from './Links';

export const Search = () => {
  const { setSearchTerm, searchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={searchTerm}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm !== '' && (
        <button type="button" className="absolute top-4 right-4 text-sm text-gray-500 " onClick={() => setSearchTerm('')}>
          &#10005;
        </button>
      )}
      <Links />
    </div>
  );
};