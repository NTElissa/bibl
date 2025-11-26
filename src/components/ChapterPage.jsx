// src/components/ChapterPage.jsx
import React from 'react';

const ChapterPage = ({ title, content }) => {
  return (
    <div className="h-full p-10 md:p-16 overflow-y-auto bg-gradient-to-b from-amber-50 to-amber-100">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-amber-900 drop-shadow">
        {title}
      </h2>
      <div className="text-lg md:text-xl leading-relaxed font-serif text-amber-900 whitespace-pre-line tracking-wide">
        {content}
      </div>
    </div>
  );
};

export default ChapterPage;