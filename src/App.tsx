import React from 'react';
import './App.css';
import Listing from './components/Listing';
import etsy from './data/etsy.json';
import { ItemType } from './types';

const items: ItemType[] = etsy as ItemType[];

const App: React.FC = () => {
  return (
    <div className="container">
      <Listing items={items} />
    </div>
  );
};

export default App;
