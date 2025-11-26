// src/components/CoverPage.jsx
import React from 'react';

const CoverPage = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-gradient-to-b from-amber-100 to-amber-200 p-12 text-center">
      <div className="bg-amber-800/20 rounded-3xl p-16 shadow-2xl border-4 border-amber-700">
        <h1 className="text-6xl md:text-8xl font-bold text-amber-900 mb-8">
          BIBILIYA YERA
        </h1>
        <div className="text-4xl md:text-6xl font-serif text-amber-800 mb-6">
          Itangiriro
        </div>
        <div className="text-2xl md:text-4xl text-amber-700">
          Inyongera 1–5
        </div>
        <div className="mt-12 text-amber-900 font-medium">
          Gusoma no gusenga Bibiliya Yera mu Kinyarwanda
        </div>
      </div>
    </div>
  );
};

export default CoverPage;