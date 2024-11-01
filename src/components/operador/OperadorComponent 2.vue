<template>
  <div>
    <!-- Caja de texto que se evalúa al escribir -->
    <input type="text" id="panorama" @input="evaluarPanorama" v-model="panorama" />
    
    <!-- Lista desplegable para seleccionar un operador -->
    <label for="operadores">Seleccionar servicio:</label>
    <select v-model="servicio" @change="handleInput" id="operadores">
      <option value="" disabled>Seleccione un servicio</option>
      <!-- Itera sobre la lista de operadores para crear las opciones -->
      <option v-for="operador in operadores" :key="operador.id" :value="operador.descripcion">
        {{ operador.descripcion }}
      </option>
    </select>

    <!-- Mostrar el mensaje relacionado a la selección -->
    <p>{{ mensaje }}</p>

    <!-- Barra de progreso -->
  </div>
</template>

<script>
// Importar los datos de 'categoria' desde categorias.js
import { categoria } from "@/data/Categoria";

export default {
  data() {
    return {
      operadores: [], // Lista de operadores que será llenada con los datos importados
      servicio: "", // Almacena la selección del servicio
      mensaje: "",  // Mensaje relacionado con la validación del servicio seleccionado
      panorama: "", // Almacena el valor del campo de texto para evaluación
      progress: 0,  // Progreso de la barra
      timerStarted: false,
      elapsedSeconds: 0,
    };
  },

  methods: {
    // Método para manejar la selección de un servicio
    handleInput() {
      if (!this.servicio) {
        this.mensaje = "Seleccione un servicio";
      } else if (this.servicio === 'Internet') {
        this.mensaje = "Internet";
      } else if (this.servicio === 'Tv') {
        this.mensaje = "Tv";
      } else if (this.servicio === 'Telefonía') {
        this.mensaje = "Telefonía";
      } else {
        this.mensaje = "Servicio no reconocido";
      }
    },

    // Método para evaluar el contenido del input basado en la lógica de Excel
    evaluarPanorama() {
      const input = this.panorama.trim();
      if (input === "") {
        this.mensaje = "Seleccione";
      } else if (input.startsWith("D") ||input.startsWith("d") || input.startsWith("M")|| input.startsWith("m")) {
        this.mensaje = "Internet";
      } else if (input.startsWith("T")||input.startsWith("t")) {
        this.mensaje = "Tv";
      } else if (!isNaN(Number(input[0]))) { // Verifica si el primer carácter es un número
        this.mensaje = "Telefonía";
      } else {
        this.mensaje = "Servicio no reconocido";
      }
    }
  },

  created() {
    this.operadores = categoria; // Cargar los datos desde 'categoria'
  },
};
</script>

<style>
/* Estilo para la barra de progreso */
.progress-bar {
  height: 20px;
  width: 100%;
  background-color: lightgray;
  margin-top: 10px;
}
</style>
