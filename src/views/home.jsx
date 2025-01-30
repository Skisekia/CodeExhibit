import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-page">
      {/* ===== SECCIÓN INICIO ===== */}
      <section className="hero-section" id="inicio">
        {/* Contenedor título + subtítulo en la parte superior */}
        <div className="top-section">
          <h1 className="main-title">¡Hola! Soy Siclary Arreola</h1>
          <p className="subtitle">
            Desarrollador Jr | C#, PHP, JavaScript, SQL Server &amp; MySQL
          </p>
        </div>
        
        {/* Contenedor principal que agrupa imagen y texto */}
        <div className="content-container">
          {/* Imagen a la izquierda (más grande) */}
          <div className="image-container">
            <img
              src="/images/profile.png"
              alt="Perfil de Siclary Arreola"
              className="profile-image"
            />
          </div>
          
          {/* Texto principal */}
          <div className="text-container">
            {/* About Me en ~6 renglones (texto forzado a ser más largo) */}
            <p className="about-me">
              Soy apasionada por el desarrollo de software y la creación de soluciones innovadoras.
              Me encanta combinar la lógica de la programación con la creatividad de las interfaces, 
              y he trabajado en proyectos que van desde aplicaciones web de gestión empresarial hasta 
              sistemas de automatización de procesos. Me motiva la colaboración en equipo, la adopción 
              de metodologías ágiles y la búsqueda constante de mejoras en la calidad del código. Mi 
              objetivo es construir aplicaciones eficientes y escalables que brinden valor de forma 
              continua a los usuarios.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECCIÓN PROYECTOS ===== */}
      <section className="projects-section" id="proyectos">
        <h2>Mis Proyectos</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>La Leyenda de Miau</h3>
            <p>Un juego desarrollado para explorar mecánicas de aventuras.</p>
            <a 
              href="https://github.com/Skisekia/Juego_LaLeyendaDeMiau" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-project"
            >
              Ver en GitHub
            </a>
          </div>
          {/* Agrega más project-cards si deseas */}
        </div>
      </section>

      {/* ===== SECCIÓN SERVICIOS ===== */}
      <section className="services-section" id="servicios">
        <h2>Servicios</h2>
        <p>
          Desarrollo web Full Stack (C#, PHP, JS), optimización de bases de datos, 
          automatización de procesos y más.
        </p>
      </section>

      {/* ===== SECCIÓN CONTACTO ===== */}
      <section className="contact-section" id="contacto">
        <h2>Contacto</h2>
        <p>
          Si deseas comunicarte conmigo, puedes hacerlo a través de:
          <br />
          <strong>correo@ejemplo.com</strong>
        </p>
      </section>
    </div>
  );
}

export default Home;
