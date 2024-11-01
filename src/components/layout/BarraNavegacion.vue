<template>
  <div class="sidebar p-4 rounded">
    <h3 class="text-white mb-4">Menú</h3>
    <ul class="nav flex-column">
      <!-- Usamos v-for para iterar sobre las opciones -->
      <li class="nav-item mb-2" v-for="(item, index) in menuItems" :key="index">
        <a class="nav-link btn btn-primary d-block text-start" @click="loadProfile(item.profile)">
         <b> {{ item.label }}</b>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BarraNavegacion',
  data() {
    return {
      // Definimos un arreglo con las opciones del menú
      menuItems: [
        { label: 'Resumen', profile: 'dashboard' },
        { label: 'Agente', profile: 'operador' },
       
        { label: 'Ayuda', profile: 'online' },
        { label: 'Casos Abiertos', profile: 'Abiertos' },
        { label: 'Casos Abiertos', profile: 'Reportes' },
        { label: 'Admin Datos', profile: 'admindata' },
        
        // Puedes agregar más opciones aquí si es necesario
      ],
    };
  },
  methods: {
    loadProfile(profileType) {
      // Emitimos un evento al componente padre, pasando el tipo de perfil
      this.$emit('profile-changed', profileType);
    },
  },
};
</script>

<style scoped>
.sidebar {
  min-height: 100vh;
  background-color: #cfe2ff;
  border-radius: 10px;
  font-size: 12px;
}

.nav-link {
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-align: center;
}

.nav-link:hover {
  background-color: #4b90f7; /* Color azul primario al hacer hover */
  color: #fff;
  transform: translateX(5px); /* Animación leve de desplazamiento */
  transition: all 0.3s ease-in-out;
}

</style>
