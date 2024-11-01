<template>
    <div class="container mt-4">
      <div class="card" style="width: 85%rem;">
        <div class="card-header">
          <h4 class="mb-0">Dashboard</h4>
        </div>
        <div class="card-body">
          <div class="d-flex">
           
  
            <!-- Contenido principal -->
            <div class="content flex-grow-1">
             
  
              <div class="container mt-4">
                <div class="card">
                 
                  <div id="profileContent">
                   
                    <div class="row">
                      <div class="col-md-6">
                        <div class="card">
                          <div class="card-header">
                            <h5>Gráfico de Anillos: Distribución de Casos</h5>
                          </div>
                          <div class="card-body">
                            <canvas id="doughnutChart"></canvas>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="card">
                          <div class="card-header">
                            <h5>Gráfico de Barras: Casos por Técnico</h5>
                          </div>
                          <div class="card-body">
                            <canvas id="barChart"></canvas>
                          </div>
                        </div>
                      </div>
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
  
  <script>
  export default {
    methods: {
      loadView(view) {
        const fileToLoad = view === "primerContacto" ? "dashboard/vistaAgente.html" : `${view}.html`;
  
        fetch(fileToLoad)
          .then((response) => response.text())
          .then((data) => {
            const profileContent = document.getElementById("profileContent");
            profileContent.innerHTML = data;
  
            const scriptFile = view === "primerContacto" ? "dashboard/vistaAgente.js" : `${view}.js`;
  
            const scriptElement = document.createElement("script");
            scriptElement.src = scriptFile;
            scriptElement.onload = () => {
              console.log(`${scriptFile} cargado correctamente`);
            };
            scriptElement.onerror = () => {
              console.error(`Error al cargar el archivo ${scriptFile}`);
            };
  
            document.body.appendChild(scriptElement);
          })
          .catch((error) => console.error("Error al cargar la vista:", error));
      },
  
      loadAgente() {
        this.loadView("vistaAgente");
      },
  
      loadProfile(view) {
        this.loadView(view);
      }
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background-color: #343a40;
    height: 100vh;
  }
  
  .sidebar h3 {
    color: #fff;
  }
  
  .sidebar .nav-link {
    color: #ddd;
    padding: 10px;
  }
  
  .sidebar .nav-link:hover {
    background-color: #495057;
    color: #fff;
  }
  
  .content {
    padding-left: 20px;
  }
  </style>
  