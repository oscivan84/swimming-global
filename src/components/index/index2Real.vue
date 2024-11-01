<template>
    <div class="landing-page">
      <header class="hero-section">
        <h1>Sistema Integral de Monitoreo en Tiempo Real</h1>
        <p>
          Optimiza la gestión de casos de servicio al cliente con un sistema eficiente de monitoreo, seguimiento, identificación y control de estados.
        </p>
        
      </header>
  
      <section class="features-section">
        <h2>Funcionalidades Clave</h2>
        <div class="row">
          <div class="col TroubleshootingGeneral">
            <div class="feature Troubleshooting">
              <h3>Troubleshooting</h3>
              <p>
                Sistema de Tickets Inteligente: Captura eficiente de información con preguntas y respuestas interactivas. Categoriza solicitudes por prioridad y tipo.
              </p>
              <p>
                Integración Multicanal: Centraliza interacciones de chat y teléfono en un tablero único.
              </p>
            </div>
          </div>
          <div class="col MonitoreoGeneral">
            <div class="feature Monitoreo">
              <h3>Monitoreo en Tiempo Real</h3>
              <p>
                Panel en Vivo: Interfaz que muestra casos activos en tiempo real.
              </p>
              <p>
                Alertas Proactivas: Configura alertas automáticas para casos críticos, asegurando intervención temprana.
              </p>
              <p>
                Mapeo Geolocalizado: Identifica áreas problemáticas por ubicación.
              </p>
            </div>
          </div>
          <div class="col SeguimientoGeneral">
            <div class="feature Seguimiento">
              <h3>Seguimiento Activo de Casos</h3>
              <p>
                Asistente Virtual: Un bot que informa sobre el progreso de los casos y reduce consultas repetitivas.
              </p>
              <p>
                Asignación Dinámica: Automatiza la asignación de técnicos según la complejidad.
              </p>
            </div>
          </div>
        </div>
  
        <div class="row">
          <div class="col IdentificacionGeneral">
            <div class="feature Identificacion">
              <h3>Identificación de Casuísticas</h3>
              <p>
                Análisis Predictivo: Sistema que identifica patrones y problemas recurrentes.
              </p>
              <p>
                Reportes Personalizados: Reportes automáticos con causas comunes y tiempos de resolución.
              </p>
            </div>
          </div>
          <div class="col ControlGeneral">
            <div class="feature Control">
              <h3>Control de Estados</h3>
              <p>
                Estados Automatizados: Actualización automática según acciones tomadas.
              </p>
              <p>
                Visualización de Progreso: Gráficos que muestran el ciclo de vida del caso.
              </p>
            </div>
          </div>
          <div class="col ExperienciaGeneral">
            <div class="feature Experiencia">
              <h3>Experiencia del Cliente</h3>
              <p>
                Feedback Automático: Encuestas para medir la satisfacción al cerrar un caso.
              </p>
              <p>
                Autoescalación: Los casos se escalan automáticamente si no se resuelven a tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <footer class="footer">
        <p>PanoramA</p>
        <div class="row">
          <div class="col">2024☼B♠Panorama</div>
          <div class="col">horasDEVuelo</div>
          <div class="col">SofSol®</div>
          <div class="col">Soluciones tecnológicas</div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "LandingPage",
  };
  </script>
  
  <style scoped>
  /* Estilos globales */
  .landing-page {
    font-family: 'Poppins', sans-serif;
    background: #f3f4f6;
    padding: 5px;
  }
  
  /* Hero Section */
  .hero-section {
    padding: 60px 15px;
  }
  
  .hero-section h1 {
    font-size: 36px;
  }
  
  .hero-section p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  .cta-btn {
    padding: 10px 20px;
    font-size: 16px;
  }
  
  /* Features Section */
  .features-section {
    padding: 40px 15px;
  }
  
  .features-section h2 {
    font-size: 28px;
    margin-bottom: 40px;
  }
  
  .feature {
    padding: 20px;
  }
  
  .feature h3 {
    font-size: 20px;
  }
  
  .feature p {
    font-size: 14px;
  }
  
  /* Ajuste de columnas en dispositivos móviles */
  @media (max-width: 768px) {
    .row {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .col {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  
  /* Footer */
  .footer {
    padding: 30px 15px;
  }
  
  .footer h3 {
    font-size: 20px;
  }
  
  .footer p {
    font-size: 14px;
  }
  
  /* Mejora del botón para móvil */
  .cta-btn {
    font-size: 16px;
    padding: 10px 20px;
  }
  
  .landing-page {
    font-family: 'Poppins', sans-serif;
    background: #f3f4f6;
  }
  
  .hero-section {
    position: relative;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/img/backgroundos.jpg") center/cover no-repeat;
    color: white;
    text-align: center;
    padding: 100px 20px;
  }
  
  .hero-section h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }
  
  .hero-section p {
    font-size: 18px;
    margin-bottom: 30px;
  }
  
  .cta-btn {
    background-color: #3b82f6;
    padding: 12px 25px;
    border-radius: 8px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .cta-btn:hover {
    background-color: #2563eb;
  }
  
  .features-section {
    padding: 60px 20px;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .features-section h2 {
    text-align: center;
    font-size: 32px;
    color: #1f2937;
    margin-bottom: 50px;
  }
  
  .feature {
    background-color: #f8fafc;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
  }
  
  .col.MonitoreoGeneral, .col.TroubleshootingGeneral, .col.SeguimientoGeneral, .col.IdentificacionGeneral, .col.ControlGeneral, .col.ExperienciaGeneral {
    position: relative;
    overflow: hidden;
  }
  
  .TroubleshootingGeneral::before, .MonitoreoGeneral::before, .SeguimientoGeneral::before, .IdentificacionGeneral::before, .ControlGeneral::before, .ExperienciaGeneral::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    z-index: 1;
  }
  
  .TroubleshootingGeneral::before {
    background-image: url("/img/robot.jpg");
  }
  
  .MonitoreoGeneral::before {
    background-image: url("/img/analisis.jpg");
  }
  
  .SeguimientoGeneral::before {
    background-image: url("/img/tablero.jpg");
  }
  
  .IdentificacionGeneral::before {
    background-image: url("/img/tablero2.jpg");
  }
  
  .ControlGeneral::before {
    background-image: url("/img/troublesh.jpg");
  }
  
  .ExperienciaGeneral::before {
    background-image: url("/img/background.jpg");
  }
  
  .feature {
    position: relative;
    z-index: 2;
    background-color: rgba(248, 250, 252, 0.8);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
  }
  
  .feature h3 {
    font-size: 24px;
    color: #1d4ed8;
    margin-bottom: 15px;
  }
  
  .feature p {
    font-size: 16px;
    color: #4b5563;
    line-height: 1.6;
  }
  
  .feature:hover {
    transform: translateY(-10px);
  }
  
  .footer {
    text-align: center;
    background-color: #1f2937;
    color: white;
    padding: 40px 20px;
  }
  
  .footer h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .footer p {
    font-size: 16px;
  }
  
  .footer .cta-btn {
    margin-top: 20px;
  }
  </style>
  