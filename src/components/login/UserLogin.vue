<!-- src/components/login/UserLogin.vue -->
<template>
  <div class="login-container">
    <div class="card login-card shadow-lg border-0">
      <div class="card-body">
        <h2 class="text-center mb-4 title-text">Iniciar Sesión</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="username" class="form-label label-text">Usuario</label>
            <input type="text" class="form-control input-highlight" id="username" v-model="username" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label label-text">Contraseña</label>
            <input type="password" class="form-control input-highlight" id="password" v-model="password" required>
          </div>
          <router-link class="nav-link btn btn-primary ms-3" to="/layout">Entrar</router-link>
 
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Aquí puedes implementar la lógica de autenticación
      console.log(`Usuario: ${this.username}, Contraseña: ${this.password}`);
    }
  }
};
</script>

<style scoped>
/* Carga las tipografías de Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@400;500&display=swap');

.login-container {
  max-width: 400px;
  margin: auto;
  padding-top: 50px;
  font-family: 'Poppins', sans-serif;
}

/* Estilo de la tarjeta de inicio de sesión */
.login-card {
  background-color: #ffffff; /* Fondo blanco para limpieza y contraste */
  border-radius: 12px; /* Bordes redondeados */
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

.login-card:hover {
  transform: translateY(-6px); /* Efecto de flotación suave */
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); /* Sombra más profunda */
}

.card-body {
  padding: 30px;
  text-align: center; /* Centrado del contenido */
}

/* Títulos y textos importantes */
.title-text {
  font-size: 1.8rem;
  color: #1b2a49; /* Azul oscuro para confianza y profesionalismo */
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

.label-text {
  font-size: 1rem;
  color: #343a40; /* Gris oscuro para neutralidad */
  font-weight: 500;
  display: block;
  text-align: left;
  margin-bottom: 8px;
}

.input-highlight {
  background-color: #f0f4f8; /* Gris claro para limpieza y modernidad */
  border: 1px solid #dcdcdc; /* Borde gris claro */
  font-size: 1rem;
  font-family: 'Roboto', sans-serif; /* Fuente moderna */
  color: #212529; /* Texto gris oscuro */
  padding: 10px 15px;
  border-radius: 8px;
  transition: border-color 0.3s, box-shadow 0.3s ease;
}

.input-highlight:focus {
  border-color: #007bff; /* Azul claro en el borde al hacer focus */
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.5); /* Sombra azul claro */
  background-color: #ffffff; /* Fondo blanco al enfocar */
}

/* Botón de envío */
.submit-btn {
  background-color: #1b2a49; /* Botón azul oscuro para confianza */
  border-color: transparent;
  font-weight: 600;
  font-size: 1.1rem;
  color: #fff; /* Texto blanco para contraste */
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease, box-shadow 0.3s;
}

.submit-btn:hover {
  background-color: #054386; /* Hover en azul claro para frescura */
  transform: translateY(-2px); /* Efecto flotante */
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4); /* Sombra más intensa */
}

.submit-btn:active {
  transform: scale(0.98); /* Efecto al hacer clic */
}

/* Sombras y enfoque en áreas clave */
.btn-primary:hover,
.input-highlight:focus {
  border-color: #007bff; /* Azul claro para enfocar elementos importantes */
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.5); /* Brillo en azul */
}

/* Ajustes de accesibilidad */
input:focus, button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(94, 143, 250, 0.7); /* Mejor retroalimentación */
}

@media (max-width: 600px) {
  .login-container {
    padding: 20px; /* Ajuste para pantallas móviles */
  }

  .title-text {
    font-size: 1.6rem;
  }

  .submit-btn {
    font-size: 1rem;
  }
}
</style>


