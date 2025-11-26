// src/components/BookViewer.jsx
import React, { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { biblePages } from '../data/bibleData';
import CoverPage from './CoverPage';
import ChapterPage from './ChapterPage';
import FullscreenButton from './FullscreenButton';

const BookViewer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPages, setFilteredPages] = useState(biblePages);

  // Filter pages when search changes
  React.useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredPages(biblePages);
    } else {
      const filtered = biblePages.filter(page =>
        page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPages(filtered);
      setCurrentPage(0); // Reset to first result
    }
  }, [searchTerm]);

  const nextPage = () => {
    setCurrentPage(prev => (prev + 1) % filteredPages.length);
  };

  const prevPage = () => {
    setCurrentPage(prev => (prev - 1 + filteredPages.length) % filteredPages.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextPage,
    onSwipedRight: prevPage,
    trackMouse: true,
  });

  const page = filteredPages[currentPage] || filteredPages[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white">
      {/* Header with Search */}
      <div className="bg-amber-950/90 backdrop-blur-sm p-4 sticky top-0 z-40 shadow-2xl">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <h1 className="text-2xl md:text-4xl font-bold text-amber-200">
            BIBILIYA YERA
          </h1>
          <input
            type="text"
            placeholder="Shakisha igitabo cyangwa ijambo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-96 px-6 py-3 rounded-full bg-white/20 backdrop-blur border border-amber-300 text-white placeholder-amber-200 focus:outline-none focus:ring-4 focus:ring-amber-400"
          />
        </div>
      </div>

      {/* Full Book Area */}
      <div {...handlers} className="h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="bg-amber-50 text-amber-900 rounded-2xl shadow-2xl w-full max-w-5xl h-full overflow-hidden border-8 border-amber-700 relative">
            {/* Page Content */}
            {page?.type === 'cover' ? (
              <CoverPage />
            ) : (
              <ChapterPage title={page?.title || ''} content={page?.content || ''} />
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-amber-950/90 backdrop-blur p-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button
              onClick={prevPage}
              className="bg-amber-700 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-xl transition shadow-lg"
            >
              Previous
            </button>

            <div className="text-amber-200 font-medium text-lg">
              {currentPage + 1} / {filteredPages.length} 
              {searchTerm && ` • ${filteredPages.length} results`}
            </div>

            <button
              onClick={nextPage}
              className="bg-amber-700 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-xl transition shadow-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Button - Now Works 100% */}
      <FullscreenButton />
    </div>
  );
};

export default BookViewer;