<template>
  <div class="container mt-4 login-container">
    <div class="card login-card">
      <div class="card-header">
        <h4 class="mb-0 title-text">DEV202402C ADMIN</h4>
      </div>
      <div class="card-body">
        <div class="d-flex">
          <!-- Barra de navegación -->
          <BarraNavegacion @profile-changed="changeContent" />

          <!-- Contenido dinámico -->
          <div class="content flex-grow-1">
            <component :is="currentComponent" />
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarraNavegacion from './BarraNavegacion.vue';
import DetailSection from './DetailSection.vue'; // Componente por defecto
import OperadorComponent from '../operador/operadoListas.vue'; 
import AdminDataComponent from '../admindata/AdminDataComponent.vue'; 
import SupportComponent from '../online/SupportComponent.vue'; 


export default {
  name: 'LayoutComponent',
  components: {
    BarraNavegacion,
    DetailSection,
    OperadorComponent,
    AdminDataComponent,
    SupportComponent,
  },
  data() {
    return {
      currentComponent: 'DetailSection', // Componente inicial que se muestra
    };
  },
  methods: {
    // Este método cambia el componente dinámicamente según el tipo de perfil
    changeContent(profileType) {
      if (profileType === 'dashboard') {
        this.currentComponent = 'DetailSection'; // Componente para la vista de "Resumen"
      } else if (profileType === 'operador') {
        this.currentComponent = 'OperadorComponent'; // Componente para "Agente"
      } 
      else if (profileType === 'reports') {
        this.currentComponent = 'ReportsComponent'; // Componente para reportes
      }
      else if (profileType === 'admindata') {
        this.currentComponent = 'AdminDataComponent'; // Componente para Administrador de datos
      }
      else if (profileType === 'online') {
        this.currentComponent = 'SupportComponent'; // Componente para Administrador de datos
      }
    },
  },
};
</script>

<style scoped>
.card-body{
  background-color: #e0e8f3;
}

</style>
