import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="text-center mt-5">Bienvenido a Mi Portafolio</h1>
        <p className="text-center">Aquí encontrarás algunos de mis proyectos más destacados.</p>
      </div>
    </div>
  );
}

export default Home;
