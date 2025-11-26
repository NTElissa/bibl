// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ pages, onResultClick }) => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const results = pages
    .map((page, i) => ({
      index: i,
      title: page.title || 'Cover',
      snippet: page.content?.toLowerCase().includes(query.toLowerCase())
        ? page.content.substring(0, 120) + '...'
        : null,
    }))
    .filter(r => r.snippet || r.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="relative max-w-2xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowResults(true);
        }}
        onFocus={() => setShowResults(true)}
        onBlur={() => setTimeout(() => setShowResults(false), 200)}
        placeholder="Shakisha mu Itangiriro (ex: Imana, inzoka, Adamu...)"
        className="w-full px-6 py-4 rounded-full bg-white/90 backdrop-blur text-gray-800 text-lg shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-500"
      />

      {showResults && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden max-h-96 overflow-y-auto">
          {results.length === 0 ? (
            <div className="p-4 text-center text-gray-500">Nta bisubizo byabonetse</div>
          ) : (
            results.map((res) => (
              <button
                key={res.index}
                onMouseDown={() => onResultClick(res.index)}
                className="block w-full text-right p-4 hover:bg-amber-50 border-b border-gray-200 transition"
              >
                <div className="font-bold text-amber-800">{res.title}</div>
                {res.snippet && <div className="text-sm text-gray-600 truncate">{res.snippet}</div>}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;