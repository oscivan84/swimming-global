<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">
        <h4 class="mb-0">Dashboard - Sistema de Atención al Cliente</h4>
      </div>
      <div class="content flex-grow-1">
        <div class="container mt-4">
          <div >
            <div  id="profileContent">
             
              <div class="row">
                <!-- Gráfico de Anillos -->
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-header">
                      <h5>Gráfico de Barras: Casos por Técnico</h5>
                    </div>
                    <div class="card-body">
                      <canvas id="doughnutChart"></canvas>
                    </div>
                  </div>
                </div>
                <!-- Gráfico de Barras -->
                <div class="col-md-4">
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
</template>

<script>
import {
  Chart,
  DoughnutController,
  BarController,
  CategoryScale,
  ArcElement,
  BarElement,
  LinearScale,  // Registrar la escala 'linear'
  Tooltip,
  Legend
} from 'chart.js';

export default {
  data() {
    return {
      doughnutData: {
        labels: ['Soporte', 'Ventas', 'Consultas'],
        datasets: [
          {
            label: 'Distribución de Casos',
            data: [30, 50, 20],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
          }
        ]
      },
      barData: {
        labels: ['Técnico 1', 'Técnico 2', 'Técnico 3'],
        datasets: [
          {
            label: 'Casos',
            data: [12, 19, 3],
            backgroundColor: ['#36a2eb', '#ff6384', '#ffce56']
          }
        ]
      }
    };
  },
  mounted() {
    // Registrar los componentes necesarios de Chart.js
    Chart.register(
      DoughnutController,
      BarController,
      CategoryScale,
      ArcElement,
      BarElement,
      LinearScale,  // Registrar la escala 'linear'
      Tooltip,
      Legend
    );

    // Inicializar gráfico de anillos (Doughnut)
    const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
    new Chart(doughnutCtx, {
      type: 'doughnut',
      data: this.doughnutData
    });

    // Inicializar gráfico de barras (Bar)
    const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
      type: 'bar',
      data: this.barData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
};
</script>


<style scoped>
body {
  background-color: #f7f9fc;
  font-family: "Arial", sans-serif;
  font-size: medium;
}
.card {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}
.btn-custom {
  font-size: 0.9rem;
  padding: 0.75rem 1.25rem;
}
.btn-falla {
  background-color: #ffc107;
  color: rgb(245, 237, 237);
}
.btn-fin {
  background-color: #e69098;
  color: white;
}
.btn-ayuda {
  background-color: #28a745;
  color: white;
}
.btn-chat {
  background-color: #5d45eb;
  color: white;
}
</style>
