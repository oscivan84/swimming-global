<template>
  <div>

    <div class="row border" id="mainForm">
      <div class="col">
        <div class="card p-2">
          <div class="card-body">
            <div class="row mb-2">
              <div class="col-sm-2">
                <label for="usuarioNombre" class="form-label"><strong> Usuario</strong></label>
                <input
                  type="text"
                  id="usuarioNombre"
                  class="form-control form-control-sm"
                />
              </div>
              <div class="col-sm-2">
                <label for="cuentaCliente" class="form-label"><strong>Cuenta</strong></label>
                <input
                  type="text"
                  id="cuentaCliente"
                  class="form-control form-control-sm"
                />
              </div>
              <div class="col-sm-2">
                <label for="panorama" class="form-label"><strong>Servicio</strong></label>
                <input
                  type="text"
                  id="panorama"
                  v-model="panorama"
                  @input="evaluarPanorama"
                  class="form-control form-control-sm"
                />
              </div>
              <div class="col-sm-2">
                <label for="codigo" class="form-label"><strong>Tipo</strong></label>
                <select
                  v-model="selectedItem"
                  id="codigo"
                  @change="filterPlantillas"
                  class="form-select form-select-sm"
                >
                  <option v-for="item in filteredItems" :key="item">
                    {{ item }}
                  </option>
                </select>
              </div>
              <div class="col-sm-2" v-if="filteredPlantillas.length > 0">
                <label for="selectPlantilla" class="form-label"
                  ><strong>Plantilla</strong></label
                >
                <select
                  v-model="selectedPlantilla"
                  id="selectPlantilla"
                  @change="filterPreguntas"
                  class="form-select form-select-sm"
                >
                  <option
                    v-for="plantilla in filteredPlantillas"
                    :key="plantilla"
                  >
                    {{ plantilla }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- Tarjeta de Paso a Paso -->
      <div class="col" id="pasoPasoCard" v-if="selectedPlantilla">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h3>Paso a Paso</h3>
              <p>{{ currentAyuda }}</p>
              <div class="row">
                <div class="col col-9">
                  <input
                    type="text"
                    v-model="pasoPasoEjecucion"
                    class="form-control form-control-sm"
                    placeholder="Describe el resultado obtenido"
                  />
                </div>
                <div class="col col-2">
                  <button
                    @click="guardarPasoPaso(currentAyuda), nextAyuda()"
                    class="btn btn-siguiente btn-sm mt-2"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col col-2">
                  <button class="btn btn-ayuda btn-sm mt-2">Consultar</button>
                </div>
                <div class="col col-9">
                  <input
                    type="text"
                    
                    class="form-control form-control-sm"
                    placeholder="Solicita ayuda"
                  />
                </div>
              </div>

              <button class="btn btn-TextoChat btn-sm mt-2">Texto Chat</button>

              <div class="row">
                <div class="col col-2">
                  <label for="sintoma" class="form-label">Síntoma</label>
                  <select
                    v-model="selectedSintoma"
                    id="sintoma"
                    class="form-select form-select-sm"
                  >
                    <option v-for="sintoma in filteredSintomas" :key="sintoma.idsintoma">
                      {{ sintoma.sintoma }}
                    </option>
                  </select>
                </div>
                <div class="col col-2">
                  <label for="diagnostico" class="form-label">Diagnóstico</label>
                  <select
                    v-model="selectedDiagnostico"
                    id="diagnostico"
                    class="form-select form-select-sm"
                  >
                    <option v-for="diag in filteredDiagnosticos" :key="diag.iddiagnostico">
                      {{ diag.diagnostico }}
                    </option>
                  </select>
                </div>
                <div class="col col-2">
                  <label for="usuarioNombre" class="form-label">box</label>
                  <input
                    type="text"
                    id="usuarioNombre"
                    class="form-control form-control-sm"
                  />
                </div>
                <div class="col col-2">
                  <label for="usuarioNombre" class="form-label">Estado</label>
                  <input
                    type="text"
                    id="usuarioNombre"
                    class="form-control form-control-sm"
                  />
                </div>
                
              </div>

              <div v-if="resumen.length <= 200" class="row mt-3">
                <div class="col">
                  <textarea
                    rows="5"
                    cols="50"
                    v-model="resumen"
                    @input="actualizarResumen"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
              <div v-else>
                <div
                  v-for="(parte, index) in resumenPartido"
                  :key="index"
                  class="row"
                >
                  <div class="col">
                    <label>Parte {{ index + 1 }}</label>
                    <textarea
                      rows="5"
                      cols="50"
                      v-model="resumenPartido[index]"
                      @input="actualizarResumenParte(index)"
                      class="form-control"
                    ></textarea>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tarjeta de Preguntas -->
      <div class="col" id="preguntasCard" v-if="selectedPlantilla">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h3>Preguntas:</h3>
              <ul v-if="filteredPreguntas.length > 0">
                <li
                  v-for="(pregunta, index) in filteredPreguntas"
                  :key="index"
                  id="preguntaSeleccion"
                >
                  <strong>{{ pregunta.pregunta }}</strong> <br />
                  <input
                    type="text"
                    v-model="pregunta.preguntaText"
                    @blur="
                      guardarPregunta(pregunta.preguntaText, pregunta.pregunta)
                    "
                    class="form-control form-control-sm mt-2"
                    placeholder="Escribe la respuesta"
                  />
                </li>
              </ul>
              <div v-if="resumenPreguntas.length <= 200" class="row mt-3">
                <div class="col">
                  <textarea
                    rows="5"
                    cols="20"
                    v-model="resumenPreguntas"
                    @input="actualizarResumenPreguntas"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
              <div v-else>
                <div
                  v-for="(parte, index) in resumenPreguntasPartido"
                  :key="index"
                  class="row"
                >
                  <div class="col">
                    <label>Parte{{ index + 1 }}</label>
                    <textarea
                      rows="5"
                      cols="20"
                      v-model="resumenPreguntasPartido[index]"
                      @input="actualizarResumenPreguntasParte(index)"
                      class="form-control"
                    ></textarea>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 20px;
}
.form-label {
  font-size: 12px;
  margin-bottom: 0.5rem;
}
textarea {
  resize: none;
}
.btn-siguiente {
  background-color: #4b90f7;
  color: white;
}
.btn-ayuda {
  background-color: #7baefa;
  color: white;
}
.btn-ayuda:hover {
  background-color: #5296f0;
}
.btn-siguiente:hover {
  background-color: #569ff1;
}
</style>

<script>
export default {
  data() {
    return {
      panorama: "",
      selectedCategory: "Internet",
      selectedSintoma: "",  
      selectedDiagnostico: "",
      items: {
        Internet: ["DS", "MO"],
        Telefono: ["TelDS", "TelMO"],
        Tv: ["Tv", "Master"],
      },
      plantillas: {
        DS: ["Sin Señal", "Intermitencia"],
        MO: ["Dashboard", "Restriccion Navegacion"],
        TelDS: ["Sin tono", "Tono Ocupado"],
        TelMO: ["Sin Tono", "No recibe llamadas"],
        Tv: ["No se ve la guia de canales", "Sin Imagen","Sin Sonido"],
        Master: ["Sin Sonido", "Error en pantalla"],
      },
      preguntas: {
        "Sin Señal": [
          {
            pregunta: "MAC",
            ayuda: "Consulte casos abiertos",
            preguntaText: "",
          },
          {
            pregunta: "Nodo",
            ayuda: "Consulte Dashboard por Numero de cuenta",
            preguntaText: "",
          },
          {
            pregunta: "Segmentacion",
            ayuda: "Consulte Nodo por MAC en busqueda de masivos",
            preguntaText: "",
          },
          {
            pregunta: "RX",
            ayuda: "Verifique conexiones de cableado",
            preguntaText: "",
          },
          {
            pregunta: "TX",
            ayuda: "Verifique lost en rojo",
            preguntaText: "",
          },
        ],
        "Intermitencia": [
          {
            pregunta: "MAC",
            ayuda: "Consulte casos abiertos",
            preguntaText: "",
          },
          {
            pregunta: "Nodo",
            ayuda: "Consulte Dashboard por Numero de cuenta",
            preguntaText: "",
          },
          {
            pregunta: "Segmentacion",
            ayuda: "Consulte Nodo por MAC en busqueda de masivos",
            preguntaText: "",
          },
          {
            pregunta: "RX",
            ayuda: "Verifique conexiones de cableado",
            preguntaText: "",
          },
          {
            pregunta: "TX",
            ayuda: "Verifique lost en rojo",
            preguntaText: "",
          },
        ],
        "Dashboard": [
          {
            pregunta: "MAC",
            ayuda: "Consulte casos abiertos",
            preguntaText: "",
          },
          {
            pregunta: "Nodo",
            ayuda: "Consulte Dashboard por Numero de cuenta",
            preguntaText: "",
          },
          {
            pregunta: "Segmentacion",
            ayuda: "Consulte Nodo por MAC en busqueda de masivos",
            preguntaText: "",
          },
          {
            pregunta: "RX",
            ayuda: "Verifique conexiones de cableado",
            preguntaText: "",
          },
          {
            pregunta: "TX",
            ayuda: "Verifique lost en rojo",
            preguntaText: "",
          },
        ],
        "Sin Tono": [
          {
            pregunta: "MAC",
            ayuda: "Consulte casos abiertos",
            preguntaText: "",
          },
          {
            pregunta: "Nodo",
            ayuda: "Consulte Dashboard por Numero de cuenta",
            preguntaText: "",
          },
          {
            pregunta: "Segmentacion",
            ayuda: "Consulte Nodo por MAC en busqueda de masivos",
            preguntaText: "",
          },
          {
            pregunta: "RX",
            ayuda: "Verifique conexiones de cableado",
            preguntaText: "",
          },
          {
            pregunta: "TX",
            ayuda: "Verifique lost en rojo",
            preguntaText: "",
          },
        ],
        // Otras plantillas...
      },
      selectedSintomaId: null, // Id del síntoma seleccionado
      selectedDiagnosticoId: null, // Id del diagnóstico seleccionado
      sintomas: [
        {
          sintoma: "Conexión lenta",
          diagnostico: "Problemas de ancho de banda",
          idsintoma: 1,
          iddiagnostico: 101,
          subcategoriaId: 1, // DS
          plantilla: "Plantilla 1 DS",
        },
        {
          sintoma: "Sin conexión",
          diagnostico: "Problema en el router",
          idsintoma: 2,
          iddiagnostico: 102,
          subcategoriaId: 2, // DS
          plantilla: "Plantilla 2 DS",
        },
        // Agrega más síntomas y diagnósticos según sea necesario
      ],
      filteredSintomas: [],  
      filteredDiagnosticos: [], 
      filteredItems: [],
      filteredPlantillas: [],
      filteredPreguntas: [],
      selectedItem: "",
      selectedPlantilla: "",
      pasoPasoEjecucion: "",
      resumen: "",
      resumenPreguntas: "",
      currentAyuda: "",
      currentIndex: 0,
      lastCuenta: "",
      lastPlantilla: "",
    };
    
  },
  computed: {
    diagnosticosFiltrados: [],
    resumenPartido() {
      let partes = [];
      for (let i = 0; i < this.resumen.length; i += 200) {
        partes.push(this.resumen.substring(i, i + 200));
      }
      return partes;
    },
    resumenPreguntasPartido() {
      let partes = [];
      for (let i = 0; i < this.resumenPreguntas.length; i += 200) {
        partes.push(this.resumenPreguntas.substring(i, i + 200));
      }
      return partes;
    },
  },
  mounted() {
    this.filterItems();
  },
  methods: {
     filtrarDiagnosticos() {
      // Filtrar los diagnósticos basados en el idsintoma seleccionado
      this.diagnosticosFiltrados = this.sintomas.filter(
        (sintoma) => sintoma.idsintoma === this.selectedSintomaId
      );
      // Limpiar el diagnóstico seleccionado cuando se cambie el síntoma
      this.selectedDiagnosticoId = null;
    },
    filterItems() {
      this.filteredItems = this.items[this.selectedCategory] || [];
      this.filteredPlantillas = [];
      this.filteredPreguntas = [];
      this.selectedItem = "";
      this.selectedPlantilla = "";
    },
    filterPlantillas() {
      if (this.selectedItem && this.plantillas[this.selectedItem]) {
        this.filteredPlantillas = this.plantillas[this.selectedItem];
      } else {
        this.filteredPlantillas = [];
      }
      this.filteredPreguntas = [];
    },
    filterPreguntas() {
      if (this.selectedPlantilla && this.preguntas[this.selectedPlantilla]) {
        this.filteredPreguntas = this.preguntas[this.selectedPlantilla];
        this.currentIndex = 0;
        this.currentAyuda = this.filteredPreguntas[this.currentIndex].ayuda;

        if (
          this.lastCuenta !== this.selectedItem ||
          this.lastPlantilla !== this.selectedPlantilla
        ) {
          this.iniciarResumen();
        }

        this.lastCuenta = this.selectedItem;
        this.lastPlantilla = this.selectedPlantilla;
      } else {
        this.filteredPreguntas = [];
      }
    },
    nextAyuda() {
      if (this.filteredPreguntas.length > 0) {
        this.currentIndex =
          (this.currentIndex + 1) % this.filteredPreguntas.length;
        this.currentAyuda = this.filteredPreguntas[this.currentIndex].ayuda;
      }
    },
    guardarPasoPaso(currentAyuda) {
      if (this.pasoPasoEjecucion.trim()) {
        const nuevoPaso = `${currentAyuda}: ${this.pasoPasoEjecucion} | `;
        this.resumen += nuevoPaso;
        this.pasoPasoEjecucion = "";
      }
    },
    guardarPregunta(respuesta, pregunta) {
      if (respuesta.trim()) {
        const nuevaPregunta = `${pregunta}: ${respuesta} | `;
        this.resumenPreguntas += nuevaPregunta;
      }
    },
    iniciarResumen() {
      this.resumen = `Cuenta: ${this.selectedItem}, Servicio: ${this.selectedCategory}, Plantilla: ${this.selectedPlantilla}, `;
      this.resumenPreguntas = ""; // Reiniciar el resumen de preguntas
    },
    evaluarPanorama() {
      const input = this.panorama.trim();
    
      this.filteredDiagnosticos = this.filteredSintomas.map(sintoma => {
        return {
          iddiagnostico: sintoma.iddiagnostico,
          diagnostico: sintoma.diagnostico
        };
      });
      if (input === "") {
        this.selectedCategory = "";
      } else if (input.match(/^[DdMm]/)) {
        this.selectedCategory = "Internet";
      } else if (input.match(/^[Tt]/)) {
        this.selectedCategory = "Telefono";
      } else if (input.match(/^[Vv]/)) {
        this.selectedCategory = "Tv";
      }
      this.filterItems();
    },
    actualizarResumen(event) {
      this.resumen = event.target.value;
    },
    actualizarResumenParte(index) {
      this.resumenPartido[index] = event.target.value;
    },
    actualizarResumenPreguntas(event) {
      this.resumenPreguntas = event.target.value;
    },
    actualizarResumenPreguntasParte(index) {
      this.resumenPreguntasPartido[index] = event.target.value;
    },
  },
};
</script>