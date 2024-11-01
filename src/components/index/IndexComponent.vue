<template>
  <div class="container my-5 bg-light rounded shadow-lg p-4">
    <!-- Hero Section con fondo y opacidad -->
    <div class="hero">
      <div class="hero-content">
        <h1 class="display-4 mb-4"><b>Bienvenidos a Swimming Global</b></h1>
        <h4 class=""><b> Centro de Actividades Acuáticas </b></h4>
        <h5>
          <b> Donde Aprender a Nadar es una Experiencia para Toda la Vida</b>
        </h5>
      </div>
    </div>

    <!-- Sección de video introductorio -->
    <div class="text-center my-5">
      <div>
    <h1 class="text-center">Carrusel de Videos</h1>
    <div id="videoCarousel" class="carousel slide" data-bs-ride="carousel">
      <!-- Indicadores del carrusel -->
      <div class="carousel-indicators">
        <button
          v-for="(video, index) in videos"
          :key="index"
          type="button"
          :data-bs-target="'#videoCarousel'"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          aria-current="index === 0 ? 'true' : 'false'"
          :aria-label="'Slide ' + (index + 1)"
        ></button>
      </div>

      <!-- Contenedor de los videos -->
      <div class="carousel-inner">
        <div
          v-for="(video, index) in videos"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <video class="d-block w-100 %" controls>
            <source :src="video" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>

      <!-- Controles de navegación -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#videoCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#videoCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </div>
      <p class="text-muted mt-3">
        Mira cómo nuestros estudiantes progresan y disfrutan de su tiempo en el
        agua.
      </p>
    </div>

    <!-- Sección de información sobre la academia -->
    <section class="section-with-background mb-5 nosotros">
      <div class="bg-light-transparency p-3 rounded">
        <h2 class="text-primary hero-content">Sobre Nosotros</h2>
        <p class="text-muted">
          Desde 1984, Swimming Global ha brindado un enfoque seguro y
          profesional en la enseñanza de natación, con un equipo experto de
          instructores y un entorno diseñado para promover la diversión, la
          educación y el bienestar en el agua.
        </p>
      </div>
    </section>

    <!-- Sección de programas destacados -->
    <section class="section-with-background mb-5 programas">
      <div class="bg-light-transparency p-3 rounded">
        <h2 class="text-primary hero-content">Nuestros Programas</h2>
        <div class="row">
          <!-- Programas -->
          <div class="col-md-6 mb-3">
            <div class="card h-100 border-0 bg-light">
              <div class="card-body">
                <h5 class="card-title text-primary">Natación para Bebés</h5>
                <p class="card-text text-muted">
                  Clases seguras y divertidas para bebés, acompañados de un
                  adulto.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card h-100 border-0 bg-light">
              <div class="card-body">
                <h5 class="card-title text-primary">
                  Natación para Niños y Adultos
                </h5>
                <p class="card-text text-muted">
                  Clases personalizadas para cada edad y nivel.
                </p>
              </div>
            </div>
          </div>
          <!-- Añadir más programas según sea necesario -->
        </div>
      </div>
    </section>

    <section class="section-with-background mb-5 reserva">
      <div class="bg-light-transparency p-3 rounded">
        <h2 class="text-primary hero-content">¡Reserva tu Clase de Prueba!</h2>
        <p class="text-muted">
          Descubre los beneficios de aprender a nadar en un ambiente seguro y
          profesional.
        </p>
        <button @click="goToSignup" class="btn btn-lg">Reserva Aquí</button>
      </div>
    </section>
    <!-- Llamado a la Acción -->
  </div>
</template>



<script>
export default {
  data() {
    return {
      // Lista de videos (rutas locales o URLs)
      videos: [
      require('../img/index/aprende1.mp4'),
        require('../img/index/aprende2.mp4'),
        require('../img/index/aprende4.mp4')
      ]
    };
  }
};
</script>

<style scoped>
.carousel {
  text-align: center;
  position: relative;
}

.controls {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

button {
  margin: 0 5px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
/* Hero Section con fondo y opacidad */
.hero {
  position: relative;
  background-image: url("img/piscina.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 70px 0;
}
.nosotros {
  position: relative;
  background-image: url("img/piscina2.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}
.programas {
  position: relative;
  background-image: url("img/swimGloba.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}
.reserva {
  position: relative;
  background-image: url("img/swimGloba1.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}
.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 139, 0.5); /* Azul oscuro con opacidad */
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

/* Estilo para el recuadro de fondo transparente */
.bg-light-transparency {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  padding: 1rem;
  border-radius: 8px;
}

/* Sección con fondo de imagen */
.section-with-background {
  background-size: cover;
  background-position: center;
  padding: 2rem;
  border-radius: 8px;
  color: #ffffff;
}

.text-primary {
  color: #007bff;
}

.bg-primary {
  background-color: #007bff;
  color: #ffffff;
}

.btn-outline-light {
  color: #ffffff;
  border-color: #ffffff;
  transition: background-color 0.3s, color 0.3s;
}

.btn-outline-light:hover {
  background-color: #ffffff;
  color: #007bff;
}

.container {
  background-color: #f7f7f7;
  color: #333333;
}

.shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
