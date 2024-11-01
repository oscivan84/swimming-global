<template>
  <div class="container-fluid">
    <div class="accordion" id="accordionExample">
      <!-- Sección de Categoría -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingCategory">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCategory" aria-expanded="false" aria-controls="collapseCategory">
            Categorías
          </button>
        </h2>
        <div id="collapseCategory" class="accordion-collapse collapse" aria-labelledby="headingCategory" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <label for="categoryInput">Nueva categoría</label>
            <input id="categoryInput" v-model="categoryInput" placeholder="Ingrese nueva categoría" class="form-control" />
            <button @click="addCategory" class="btn btn-primary mt-2">Agregar categoría</button>
            <p v-if="categoryAdded" class="text-success">¡Categoría agregada exitosamente!</p>
          </div>
        </div>
      </div>

      <!-- Sección de Subcategoría (abierta por defecto) -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSubcategory">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSubcategory" aria-expanded="true" aria-controls="collapseSubcategory">
            Subcategorías
          </button>
        </h2>
        <div id="collapseSubcategory" class="accordion-collapse collapse show" aria-labelledby="headingSubcategory" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <label for="mainCategorySelect">Seleccione Categoría Principal</label>
            <select id="mainCategorySelect" v-model="selectedMainCategory" @change="loadSubcategories" class="form-select">
              <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
            </select>
            <label for="subcategoryInput" class="mt-2">Nueva subcategoría</label>
            <input id="subcategoryInput" v-model="subcategoryInput" placeholder="Ingrese nueva subcategoría" class="form-control" />
            <button @click="addSubcategory" class="btn btn-primary mt-2">Agregar subcategoría</button>
            <p v-if="subcategoryAdded" class="text-success">¡Subcategoría agregada exitosamente!</p>
          </div>
        </div>
      </div>

      <!-- Sección de Plantillas -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTemplate">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTemplate" aria-expanded="false" aria-controls="collapseTemplate">
            Plantillas
          </button>
        </h2>
        <div id="collapseTemplate" class="accordion-collapse collapse" aria-labelledby="headingTemplate" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <label for="subcategorySelect">Seleccione Subcategoría</label>
            <select id="subcategorySelect" v-model="selectedSubcategory" @change="loadTemplates" class="form-select">
              <option v-for="subcategory in selectedMainCategorySubcategories" :key="subcategory.id" :value="subcategory.id">{{ subcategory.name }}</option>
            </select>
            <label for="templateInput" class="mt-2">Nueva plantilla</label>
            <input id="templateInput" v-model="templateInput" placeholder="Ingrese nueva plantilla" class="form-control" />
            <button @click="addTemplate" class="btn btn-primary mt-2">Agregar plantilla</button>
            <p v-if="templateAdded" class="text-success">¡Plantilla agregada exitosamente!</p>
          </div>
        </div>
      </div>

      <!-- Acordeón para Agregar Cierres -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingCierre">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCierre" aria-expanded="false" aria-controls="collapseCierre">
            Agregar Cierres
          </button>
        </h2>
        <div id="collapseCierre" class="accordion-collapse collapse" aria-labelledby="headingCierre" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <label for="cierreCategorySelect">Seleccione Categoría</label>
            <select id="cierreCategorySelect" v-model="selectedCierreCategory" class="form-select">
              <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
            </select>
            <button @click="showCierreForm = true; resetRightPanel" class="btn btn-primary mt-2">Agregar Cierre</button>
          </div>
        </div>
      </div>

      <!-- Acordeón para Agregar Síntomas -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSintoma">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSintoma" aria-expanded="false" aria-controls="collapseSintoma">
            Agregar Síntomas
          </button>
        </h2>
        <div id="collapseSintoma" class="accordion-collapse collapse" aria-labelledby="headingSintoma" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <label for="serviceSelect">Seleccione Servicio</label>
            <select id="serviceSelect" v-model="selectedService" class="form-select">
              <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
            </select>
            <button @click="showSintomaForm = true; resetRightPanel" class="btn btn-primary mt-2">Agregar Síntoma</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.left-panel, .right-panel {
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
  background-color: #f8f9fa;
}
</style>

<script>
export default {
  data() {
    return {
      categoryInput: '',
      subcategoryInput: '',
      templateInput: '',
      cierreInput: '',
      cierreCodigo: '',
      cierreDescripcion: '',
      sintomaInput: '',
      boxInput: '',
      categories: [],
      selectedMainCategory: null,
      selectedSubcategory: null,
      selectedService: null,
      selectedCierreCategory: null,
      selectedMainCategorySubcategories: [],
      cierres: [],
      sintomas: [],
      categoryAdded: false,
      subcategoryAdded: false,
      templateAdded: false,
      cierreAdded: false,
      sintomaAdded: false,
      showCierreForm: false,
      showSintomaForm: false,
    };
  },
  methods: {
    addCategory() {
      this.categories.push({ id: Date.now(), name: this.categoryInput, subcategories: [] });
      this.categoryInput = '';
      this.categoryAdded = true;
      setTimeout(() => (this.categoryAdded = false), 3000);
    },
    addSubcategory() {
      const selectedCategory = this.categories.find(cat => cat.id === this.selectedMainCategory);
      if (selectedCategory) {
        selectedCategory.subcategories.push({ id: Date.now(), name: this.subcategoryInput });
        this.subcategoryInput = '';
        this.subcategoryAdded = true;
        setTimeout(() => (this.subcategoryAdded = false), 3000);
        this.loadSubcategories();
      }
    },
    addTemplate() {
      const selectedCategory = this.categories.find(cat => cat.id === this.selectedMainCategory);
      const selectedSubcategory = selectedCategory?.subcategories.find(sub => sub.id === this.selectedSubcategory);

      if (selectedSubcategory) {
        selectedSubcategory.templates.push({ id: Date.now(), name: this.templateInput });
        this.templateInput = '';
        this.templateAdded = true;
        setTimeout(() => (this.templateAdded = false), 3000);
      }
    },
    loadSubcategories() {
      const selectedCategory = this.categories.find(cat => cat.id === this.selectedMainCategory);
      this.selectedMainCategorySubcategories = selectedCategory ? selectedCategory.subcategories : [];
    }
  }
};
</script>
