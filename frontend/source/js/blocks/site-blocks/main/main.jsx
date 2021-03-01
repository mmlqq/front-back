import React from 'react';
import Collections from './collections/collections';
import Reviews from './reviews/reviews';

export default function Main() {
  return (
    <main className="main">
      <Collections />
      <Reviews />
    </main>
  );
}
