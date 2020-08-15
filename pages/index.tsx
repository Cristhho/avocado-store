import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  const [productsList, setProductsList] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch('/api/avo')
      .then((res) => res.json())
      .then(({data, length}) => {
        setProductsList(data);
      })
  }, []);

  return (
    <div>
      <Navbar />
      <h1>NextJS</h1>
      {productsList.map((avo) => {
        return (
        <h2>{avo.name}</h2>
        );
      })}
    </div>
  );
};

export default Home;
