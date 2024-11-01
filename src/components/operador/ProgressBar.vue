<template>
    <div class="progress-bar-wrapper">
      <div class="progress-bar" :style="{ width: progress + '%', backgroundColor: progressColor }"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      progress: {
        type: Number,
        required: true,
        default: 0
      },
      progressColor: {
        type: String,
        required: true,
        default: '#4caf50' // Color verde por defecto
      }
    }
  };
  </script>
  
  <style scoped>
  .progress-bar-wrapper {
    width: 100%;
    height: 20px; /* Altura de la barra */
    background-color: #e0e0e0; /* Color de fondo de la barra */
    border-radius: 8px; /* Bordes redondeados */
    overflow: hidden; /* Evita que el progreso sobresalga */
  }
  
  .progress-bar {
    height: 100%;
    transition: width 0.3s ease; /* Transición suave para el progreso */
  }
  </style>
  