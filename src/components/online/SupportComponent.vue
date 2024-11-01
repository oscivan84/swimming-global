<template>
    <div class="card card-body mb-3 p-2">
      <div class="infoBasica mb-3">
  <div class="container-fluid">
    <div class="accordion" id="accordionExample">
     
      <!-- Iterar sobre el arreglo de clientes para mostrar un acordeón por cliente -->
      <div v-for="(clienteData, index) in clientes" :key="index" class="accordion-item">
        <div class="card card-body mb-3 p-2">
          <div class="infoBasica mb-3">
        <h2 class="accordion-header" :id="'headingDatosCliente' + index">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapseDatosCliente' + index" aria-expanded="true" :aria-controls="'collapseDatosCliente' + index">
            Datos del Cliente: {{ clienteData.cliente }}
          </button>
        </h2>
        <div :id="'collapseDatosCliente' + index" class="accordion-collapse collapse show" :aria-labelledby="'headingDatosCliente' + index" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="infoBasica mb-3">
              <div class="row g-2">
                <div class="col-md-3">
                  <label for="cliente" class="form-label">Cliente</label>
                  <input v-model="clienteData.cliente" type="text" class="form-control form-control-sm" />
                </div>
                <div class="col-md-3">
                  <label for="cuenta" class="form-label">Cuenta</label>
                  <input v-model="clienteData.cuenta" type="text" class="form-control form-control-sm" />
                </div>
                <div class="col-md-3">
                  <label for="servicio" class="form-label">Servicio</label>
                  <input v-model="clienteData.servicio" type="text" class="form-control form-control-sm" />
                </div>
                <div class="col-md-3">
                  <label for="telefono" class="form-label">Teléfono</label>
                  <input v-model="clienteData.telefono" type="text" class="form-control form-control-sm" />
                </div>
                <div class="col-md-3">
                  <label for="mac" class="form-label">MAC</label>
                  <input v-model="clienteData.mac" type="text" class="form-control form-control-sm" />
                </div>
                <div class="col-md-3">
                  <label for="tipo" class="form-label">Tipo</label>
                  <select v-model="clienteData.tipo" class="form-select form-select-sm">
                    <option>Seleccione...</option>
                    <option>Tipo 1</option>
                    <option>Tipo 2</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="plantilla" class="form-label">Plantilla</label>
                  <input v-model="clienteData.plantilla" type="text" class="form-control form-control-sm" />
                </div>
                <div class="col-md-3">
                  <label for="nodo" class="form-label">Nodo</label>
                  <input v-model="clienteData.nodo" type="text" class="form-control form-control-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sección de Soporte con Chat de Preguntas y Respuestas -->
        <div class="accordion-item">
          <h2 class="accordion-header" :id="'headingSoporte' + index">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapseSoporte' + index" aria-expanded="false" :aria-controls="'collapseSoporte' + index">
              Soporte
            </button>
          </h2>
          <div :id="'collapseSoporte' + index" class="accordion-collapse collapse" :aria-labelledby="'headingSoporte' + index" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <!-- Estilo de Chat con Preguntas y Respuestas -->
              <div class="chat-container">
                <div v-for="(pregunta, pregIndex) in clienteData.preguntas" :key="pregIndex" class="chat-message">
                  <div :class="{'alert alert-warning': pregunta.marcado}">
                    {{ pregunta.texto }}
                    <button v-if="pregunta.marcado" class="btn btn-sm btn-link" @click="agregarComentario(clienteData, pregIndex)">Agregar comentario</button>
                  </div>
                  <textarea v-if="pregunta.comentarioVisible" v-model="pregunta.comentario" placeholder="Escriba su comentario aquí..." class="form-control mt-2"></textarea>
                </div>

                <!-- Agregar nueva pregunta -->
                <div class="mt-3">
                  <input v-model="clienteData.nuevaPregunta" placeholder="Escriba una nueva pregunta" class="form-control" />
                  <button @click="agregarPregunta(clienteData)" class="btn btn-primary mt-2">Agregar Pregunta</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div></div>
    </div>
  </div>
  </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      clientes: [
        {
          cliente: 'Cliente 1',
          cuenta: '1234567890',
          servicio: 'Internet Fiber',
          telefono: '3101234567',
          mac: '00:1A:2B:3C:4D:5E',
          tipo: 'Tipo 1',
          plantilla: 'Plantilla A',
          nodo: 'Nodo 1',
          direccion: 'Calle 123, Ciudad',
          email: 'cliente1@email.com',
          fechaAlta: '2023-05-15',
          estado: 'Activo',
          comentarios: 'Cliente satisfecho',
          preguntas: [
            { texto: "¿Usted puede evidenciar luces en su Modem?", marcado: false, comentario: '', comentarioVisible: false },
            { texto: "¿La conexión a internet ha sido estable?", marcado: true, comentario: '', comentarioVisible: false },
            { texto: "¿Ha intentado reiniciar su modem?", marcado: false, comentario: '', comentarioVisible: false }
          ]
        },
        {
          cliente: 'Cliente 2',
          cuenta: '9876543210',
          servicio: 'Telefonía Fija',
          telefono: '3207654321',
          mac: '00:1B:2C:3D:4E:5F',
          tipo: 'Tipo 2',
          plantilla: 'Plantilla B',
          nodo: 'Nodo 2',
          direccion: 'Avenida 456, Ciudad',
          email: 'cliente2@email.com',
          fechaAlta: '2022-11-01',
          estado: 'Inactivo',
          comentarios: 'Problemas con el servicio, en espera de solución',
          preguntas: [
            { texto: "¿Se ha presentado algún corte en su línea?", marcado: true, comentario: '', comentarioVisible: false },
            { texto: "¿Ha intentado verificar el cableado?", marcado: false, comentario: '', comentarioVisible: false },
            { texto: "¿Podría indicarme si ha recibido alguna notificación del servicio?", marcado: false, comentario: '', comentarioVisible: false },
            { texto: "¿El problema persiste incluso después de reiniciar el equipo?", marcado: false, comentario: '', comentarioVisible: false }
          ]
        },
        {
          cliente: 'Cliente 3',
          cuenta: '1122334455',
          servicio: 'TV por Cable',
          telefono: '3001122334',
          mac: '00:1C:2D:3E:4F:5A',
          tipo: 'Tipo 1',
          plantilla: 'Plantilla C',
          nodo: 'Nodo 3',
          direccion: 'Carrera 789, Ciudad',
          email: 'cliente3@email.com',
          fechaAlta: '2024-02-20',
          estado: 'Activo',
          comentarios: 'Nuevo cliente, instalación pendiente',
          preguntas: [
            { texto: "¿La señal de televisión está clara o presenta interferencias?", marcado: false, comentario: '', comentarioVisible: false },
            { texto: "¿Ha notado algún problema de señal en algunos canales específicos?", marcado: true, comentario: '', comentarioVisible: false },
            { texto: "¿Ha intentado reiniciar el decodificador?", marcado: false, comentario: '', comentarioVisible: false },
            { texto: "¿Se ha presentado algún tipo de pixelación o congelamiento en la pantalla?", marcado: false, comentario: '', comentarioVisible: false }
          ]
        },
        {
          cliente: 'Cliente 4',
          cuenta: '6677889900',
          servicio: 'Internet Móvil',
          telefono: '3145567890',
          mac: '00:1D:2E:3F:4G:5H',
          tipo: 'Tipo 2',
          plantilla: 'Plantilla D',
          nodo: 'Nodo 4',
          direccion: 'Calle 789, Ciudad',
          email: 'cliente4@email.com',
          fechaAlta: '2023-07-25',
          estado: 'Activo',
          comentarios: 'Buen desempeño del servicio, sin inconvenientes',
          preguntas: [
            { texto: "¿Ha intentado apagar y encender su dispositivo móvil?", marcado: true, comentario: '', comentarioVisible: false },
            { texto: "¿El problema ocurre en una zona específica o en todo el área?", marcado: false, comentario: '', comentarioVisible: false },
            { texto: "¿El equipo está actualizado con la última versión de software?", marcado: false, comentario: '', comentarioVisible: false },
            { texto: "¿Puede indicarme si está recibiendo las velocidades prometidas?", marcado: false, comentario: '', comentarioVisible: false }
          ]
        },
        {
          cliente: 'Cliente 5',
          cuenta: '2233445566',
          servicio: 'Internet de Alta Velocidad',
          telefono: '3219876543',
          mac: '00:1E:2F:3G:4H:5I',
          tipo: 'Tipo 1',
          plantilla: 'Plantilla E',
          nodo: 'Nodo 5',
          direccion: 'Avenida 101, Ciudad',
          email: 'cliente5@email.com',
          fechaAlta: '2023-01-10',
          estado: 'Activo',
          comentarios: 'Cliente frecuente, satisfecho con la calidad del servicio',
          preguntas: [
            { texto: "¿El problema ocurre en todos los dispositivos o solo en uno?", marcado: false, comentario: '', comentarioVisible: false },
            { texto: "¿Tiene el servicio de fibra óptica o ADSL?", marcado: true, comentario: '', comentarioVisible: false },
            { texto: "¿El problema persiste en las horas pico o solo en ciertos momentos?", marcado: false, comentario: '', comentarioVisible: false },
            { texto: "¿Ha verificado la conexión directa al router por cable?", marcado: false, comentario: '', comentarioVisible: false },
            { texto: "¿Tiene problemas de latencia en juegos en línea o videollamadas?", marcado: false, comentario: '', comentarioVisible: false }
          ]
        }
      ],
      nuevaPregunta: ''
    };
  },
  methods: {
    agregarPregunta() {
      if (this.nuevaPregunta.trim()) {
        this.preguntas.push({ texto: this.nuevaPregunta, marcado: false, comentario: '', comentarioVisible: false });
        this.nuevaPregunta = '';
      }
    },
    agregarComentario(index) {
      this.preguntas[index].comentarioVisible = true;
    }
  }
};
</script>


<style scoped>
.chat-container {
  max-height: 300px;
  overflow-y: auto;
}

.chat-message {
  margin-bottom: 10px;
}

.alert-warning {
  background-color: #fff3cd;
}
</style>
