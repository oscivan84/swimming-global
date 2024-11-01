<template>
 
  <div>
    <!-- Navigation bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">DEV202402C</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link btn btn-primary ms-3" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Servicios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Soporte</a>
            </li>
            <li class="nav-item">
  <router-link class="nav-link btn btn-primary ms-3" to="/login">Entrar</router-link>
 
</li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  
  </div>
</template>

<script>
export default {
  name: 'IndexComponent',
};
</script>

<style scoped>
/* Estilo para los íconos de las características */
.feature-icon {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Estilos adicionales */
.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}


.footer {
  font-size: 0.9rem;
}
</style>
