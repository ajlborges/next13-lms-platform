import React from 'react';
import { FaStar } from 'react-icons/fa';  // Make sure to install react-icons or replace this with any star icon of your choice

interface RatingProps {
  score: number;
  reviews: number;
}

const Rating: React.FC<RatingProps> = ({ score, reviews }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem' }}>
      <FaStar style={{ color: 'gold', marginRight: '0.2rem' }} />
      <span style={{ fontWeight: 'bold', marginRight: '0.2rem' }}>{score.toFixed(1)}</span>
      <span style={{ color: '#666' }}>({reviews.toLocaleString()} reviews)</span>
    </div>
  );
};

// Example usage
const App = () => {
  return (
    <div>
      <Rating score={4.6} reviews={38000} />
    </div>
  );
};

export default App;
