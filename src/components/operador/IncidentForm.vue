<template>
    <div class="container">
      <ProgressBar :progress="progress" :progressColor="progressColor" />
  
      <div class="card p-1">
        <h4 class="card-title text-center mb-3">Registro de Incidencia</h4>
  
        <form @input="handleInput">
          <BasicInfo :cliente="cliente" :cuenta="cuenta" :panorama="panorama" :telefono="telefono" @update:data="updateBasicInfo" />
          
          <ServiceType :mac="mac" :tipo="tipo" :link="link" @update:service="updateServiceType" />
  
          <!-- Otros componentes como NotesAndIssues, Buttons, Diagnosis, etc. -->
          
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import ProgressBar from './ProgressBar.vue';
  import BasicInfo from './BasicInfo.vue';
  import ServiceType from './ServiceType.vue';
  
  export default {
    components: { ProgressBar, BasicInfo, ServiceType },
    data() {
      return {
        cliente: "",
        cuenta: "",
        panorama: "",
        telefono: "",
        mac: "",
        tipo: "",
        link: "",
        progress: 0,
        totalTime: 100, // Define el tiempo total en segundos, ajusta según sea necesario
        elapsedSeconds: 0, // Inicializa el tiempo transcurrido en 0
      };
    },
    computed: {
      progressColor() {
        const red = Math.min(255, (this.elapsedSeconds / this.totalTime) * 255);
        const green = Math.max(0, 255 - red);
        return `rgb(${red}, ${green}, 0)`;
      }
    },
    methods: {
      handleInput() {
        // Actualiza el progreso basado en el número de campos completados
        const filledFields = [this.cliente, this.cuenta, this.panorama, this.telefono, this.mac, this.tipo, this.link]
          .filter(field => field.trim() !== "").length;
        const totalFields = 7; // Número total de campos a completar
        this.progress = Math.round((filledFields / totalFields) * 100);
  
        // Simula el incremento de tiempo transcurrido
        this.elapsedSeconds = Math.min(this.totalTime, this.elapsedSeconds + 1); // Incremento por input
      },
      updateBasicInfo(data) {
        Object.assign(this, data);
      },
      updateServiceType(data) {
        Object.assign(this, data);
      }
    }
  };
  </script>
  