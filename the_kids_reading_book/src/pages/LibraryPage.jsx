import React from 'react';

import LibraryHero from '../components/LibraryHero';
import BookGallery from '../components/BookGallery';

function LibraryPage() {
  return (
    <div className="min-h-screen font-inter">
      <LibraryHero />
      <BookGallery /> 
    </div>
  );
}

export default LibraryPage;
