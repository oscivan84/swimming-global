<template>
    <div>
      <h1>Reproductor de Video</h1>
      <video controls width="640">
        <source :src="videoSource" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // URL o ruta local del video
        videoSource: require('../img/index/aprende3.mp4') // Ruta en la carpeta assets
        // videoSource: 'https://ejemplo.com/ruta-al-video.mp4' // Ruta externa
      };
    }
  };
  </script>
  
  <style scoped>
  video {
    max-width: 100%;
    height: auto;
  }
  </style>
  