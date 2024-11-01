<template>
 
  <div class="container">
    <div>
      <!-- Barra de progreso -->
      <div class="progress-bar-wrapper">
        <div
          class="progress-bar"
          :style="{ width: progress + '%', backgroundColor: progressColor }"
        ></div>
      </div>
    </div>
    <div class="card p-1">
      <h4 class="card-title text-center mb-3">Registro de Incidencia</h4>

      <form @input="handleInput">
        <!-- Datos Básicos -->
        <div class="card card-body mb-3 p-2">
          <div class="infoBasica mb-3">
            <div class="row g-2">
              <div class="col-md-3">
                <label for="cliente" class="form-label">Cliente</label>
                <input
                  v-model="cliente"
                  type="text"
                  class="form-control form-control-sm"
                  id="cliente"
                />
              </div>
              <div class="col-md-3">
                <label for="cuenta" class="form-label">Cuenta</label>
                <input
                  v-model="cuenta"
                  type="text"
                  class="form-control form-control-sm"
                  id="cuenta"
                />
              </div>

              <div class="col-md-3">
                <label for="servicio" class="form-label">Servicio</label>
                
                <div>
                  <input type="text" id="panorama" @input="evaluarPanorama" v-model="panorama" />
                </div>
                
              </div>

              <div class="col-md-3">
                <label for="telefono" class="form-label">Teléfono</label>
                <input
                  v-model="telefono"
                  type="text"
                  class="form-control form-control-sm"
                  id="telefono"
                />
              </div>
            </div>
          </div>

          <!-- Tipo de Servicio -->

          <div class="row g-2">
            <div class="col-md-3">
              <label for="mac" class="form-label">MAC</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="mac"
              />
            </div>
            <div class="col-md-3">
              <label for="tipo" id="subcategoria" class="form-label">Tipo</label>
              <select
          v-model="subcategoriaSeleccionada"
          class="form-select"
          id="subcategoria"
        >
          <option v-for="sub in subcategoriasFiltradas" :key="sub" :value="sub">
            {{ sub }}
          </option>
        </select>
            </div>
            <div class="col-md-3" id="plantilla">
              <label for="plantilla" class="form-label">Plantilla</label>
              <select
                v-model="plantilla"
                class="form-select form-select-sm"
                id="plantilla"
              >
                <option value="NO Enciende" selected>NO Enciende</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="link" class="form-label">Nodo</label>
              <input
                v-model="link"
                type="text"
                class="form-control form-control-sm"
                id="link"
              />
            </div>
          </div>
        </div>

        <!-- Notas y Problemas -->
        <div class="card card-body mb-3 p-2">
          <div class="row g-2">
            <div class="col">
              <label for="problema" class="form-label"><b>Problema</b></label>
              <textarea
                v-model="problema"
                class="form-control form-control-sm"
                id="problema"
                rows="2"
              ></textarea>
              <label for="notas" class="form-label">Notas</label>
              <textarea
                v-model="notas"
                class="form-control form-control-sm"
                id="notas"
                rows="2"
              ></textarea>
            </div>
            <div class="col">
              <label for="preguntas" class="form-label"><b>Plantilla</b></label>
              <input
                v-model="preguntas"
                class="form-control form-control-sm"
                id="preguntas"
                type="text"
              />
              <label for="notas2" class="form-label">Notas</label>
              <input
                v-model="notas2"
                class="form-control form-control-sm"
                id="notas2"
                type="text"
              />
            </div>
          </div>
        </div>

        <!-- Botones -->
        <div class="row g-2 mb-2">
          <div class="col-md-3">
            <button
              type="button"
              class="btn btn-siguiente btn-custom w-100 btn-sm"
            >
              <b>Siguiente</b>
            </button>
          </div>
          <div class="col-md-2">
            <button type="button" class="btn btn-falla btn-custom w-100 btn-sm">
              <b>Falla</b>
            </button>
          </div>
          <div class="col-md-2">
            <button type="button" class="btn btn-ayuda btn-custom w-100 btn-sm">
              <b>Ayuda</b>
            </button>
          </div>
          <div class="col-md-2">
            <button type="button" class="btn btn-chat btn-custom w-100 btn-sm">
              <b>Chat</b>
            </button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-fin btn-custom w-100 btn-sm">
              <b>Finalizar</b>
            </button>
          </div>
        </div>

        <!-- Síntoma y Diagnóstico -->
        <div class="card card-body p-2">
          <div class="row g-2">
            <div class="col-md-2">
              <label for="sintoma" class="form-label">Síntoma</label>
              <select
                v-model="sintoma"
                class="form-select form-select-sm"
                id="sintoma"
              >
                <option selected>sin audio</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="diagnostico" class="form-label">Diagnóstico</label>
              <select
                v-model="diagnostico"
                class="form-select form-select-sm"
                id="diagnostico"
              >
                <option selected>en todos los...</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="falla" class="form-label">Falla</label>
              <input
                v-model="falla"
                type="text"
                class="form-control form-control-sm"
                id="falla"
              />
            </div>
            <div class="col-md-2">
              <label for="box" class="form-label">Box</label>
              <input
                v-model="box"
                type="text"
                class="form-control form-control-sm"
                id="box"
              />
            </div>
            <div class="col-md-4">
              <label for="estado" class="form-label">Estado</label>
              <select
                v-model="estado"
                class="form-select form-select-sm"
                id="estado"
              >
                <option selected>Seleccione</option>
                <option value="Cerrado">Cerrado</option>
                <option value="Abierto">Abierto</option>
              </select>
            </div>
          </div>
          <div class="row g-2">
            <div class="col-12">
              <label for="nota-adicional" class="form-label"
                >Nota adicional</label
              >
              <textarea
                v-model="notaAdicional"
                class="form-control form-control-sm"
                id="nota-adicional"
                rows="2"
              ></textarea>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col">
              <p class="text-muted small">
                Nota: VLAN/CVLAN:1 | Plan:2 | Asignaciones...
              </p>
            </div>
          </div>
        </div>

      </form>
    </div>
  </div>
  <div></div>
</template>

<script>
import { categoria as categorias } from "@/data/Categoria";
import { subcategoria as subcategorias } from "@/data/Subcategoria";

export default {
  data() {
    return {
      categorias,         // Categorías importadas
      subcategorias,      // Subcategorías importadas
      selectedCategoria: null,   // Almacena la categoría seleccionada
      selectedSubcategoria: null,
      
      
      // Datos del primer script
      cliente: "",
      panorama: "",
      cuenta: "",
      servicio: "", // Este "servicio" se utiliza también en la validación
      telefono: "",
      mac:"",
      tipo: "",
      plantilla: "",
      link: "",
      problema: "",
      preguntas: "",
      notas: "",
      notas2: "",
      sintoma: "",
      diagnostico: "",
      falla: "",
      box: "",
      estado: "",
      notaAdicional: "",
      mensaje: "", // Mensaje para la validación de "servicio"

      // Datos del segundo script para el temporizador y la barra de progreso
      progress: 0, // Progreso en porcentaje
      timerStarted: false,
      elapsedSeconds: 0, // Tiempo transcurrido en segundos
      intervalId: null, // ID del intervalo para el temporizador
      totalTime: 170, // 10 minutos en segundos
    };
  },

  computed: {
    subcategoriasFiltradas() {
      if (this.categoriaSeleccionada) {
        return subcategorias[this.categoriaSeleccionada] || [];
      }
      return [];
    },
    // Computed property para el color de la barra de progreso
    progressColor() {
      const red = Math.min(255, (this.elapsedSeconds / this.totalTime) * 255);
      const green = Math.max(0, 255 - red);
      return `rgb(${red}, ${green}, 0)`;
    },
    // Formato del tiempo restante (mm:ss)
    formattedTime() {
      const minutes = Math.floor((this.totalTime - this.elapsedSeconds) / 60);
      const seconds = (this.totalTime - this.elapsedSeconds) % 60;
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    },
  },

  methods: {
    // Método para manejar la entrada del campo "servicio" y validarla


    // Método adicional (si deseas aplicar más lógica)
    evaluarPanorama() {
      const input = this.panorama.trim();
      if (input === "") {
        this.mensaje = " ";
        this.categoriaSeleccionada = "Internet";
        console.log()
      } else if (input.startsWith("D") ||input.startsWith("d") || input.startsWith("M")|| input.startsWith("m")) {
        this.mensaje = "Internet";
        console.log(this.mensaje)
      } else if (input.startsWith("T")||input.startsWith("t")) {
        this.mensaje = "Tv";
        console.log(this.mensaje)
      } else if (!isNaN(Number(input[0]))) { // Verifica si el primer carácter es un número
        this.mensaje = "Telefonía";
        console.log(this.mensaje)
      } else {
        this.mensaje = "Servicio no reconocido";
      }
    },
 

    // Método del segundo script para iniciar el temporizador
    startProgress() {
      this.timerStarted = true;
      this.intervalId = setInterval(this.updateProgress, 1000); // Actualiza cada segundo
    },

    // Método del segundo script para actualizar el progreso
    updateProgress() {
      if (this.elapsedSeconds < this.totalTime) {
        this.elapsedSeconds++;
        this.progress = (this.elapsedSeconds / this.totalTime) * 100;
      } else {
        clearInterval(this.intervalId); // Detiene el temporizador cuando alcanza el final
      }
    },
  },

  // Cargar los datos cuando el componente sea creado
  

  // Limpia el intervalo si el componente es destruido
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>

<style scoped>
.progress-bar-wrapper {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border-radius: 5px;
  margin-top: 20px;
  overflow: hidden;
  border: 1px solid #ccc;
}

.progress-bar {
  height: 100%;
  transition: width 1s linear, background-color 1s linear;
}

/* Personalización general de los botones */
.form-label {
  margin-bottom: 0.1rem;
}

.btn-custom {
  background-color: #007bff; /* Color de fondo */
  color: white; /* Color del texto */
  border: none; /* Sin borde */
  padding: 6px 12px; /* Espaciado interno */
  font-size: 12px; /* Tamaño de la fuente */
  border-radius: 4px; /* Bordes redondeados */
  transition: background-color 0.3s ease; /* Transición para hover */
  text-align: center; /* Centrar el texto */
  cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
}

/* Efecto de hover para los botones */
.btn-custom:hover {
  background-color: #0056b3; /* Cambio de color cuando el mouse pasa sobre el botón */
  color: #ffffff; /* Mantiene el color blanco del texto en hover */
}

/* Estilo para los botones de estado */
.btn-siguiente {
  background-color: #28a745; /* Color verde */
}
.btn-siguiente:hover {
  background-color: #218838; /* Hover verde oscuro */
}

.btn-falla {
  background-color: #dc3545; /* Color rojo */
}
.btn-falla:hover {
  background-color: #c82333; /* Hover rojo oscuro */
}

.btn-ayuda {
  background-color: #ffc107; /* Color amarillo */
}
.btn-ayuda:hover {
  background-color: #e0a800; /* Hover amarillo oscuro */
}

.btn-chat {
  background-color: #17a2b8; /* Color cyan */
}
.btn-chat:hover {
  background-color: #117a8b; /* Hover cyan oscuro */
}

.btn-fin {
  background-color: #6c757d; /* Color gris */
}
.btn-fin:hover {
  background-color: #5a6268; /* Hover gris oscuro */
}

/* Estilos para el tamaño pequeño de los botones */
.btn-sm {
  font-size: 12px;
  padding: 4px 8px; /* Tamaño pequeño */
  line-height: 1.5;
}

/* Estilos para el form control pequeño */
.form-control-sm {
  font-size: 12px; /* Fuente más pequeña */
  padding: 4px; /* Espaciado pequeño */
}

/* Estilos para las etiquetas de los formularios */
.form-label {
  font-size: 12px; /* Tamaño de la fuente de las etiquetas */
  padding: 1%;
}

/* Estilos para las tarjetas */
.card {
  font-size: 12px; /* Tamaño de texto de las tarjetas */
  margin-bottom: 10px;
}
</style>
