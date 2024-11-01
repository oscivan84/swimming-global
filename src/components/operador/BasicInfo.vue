<template>
    <div class="infoBasica mb-3">
      <div class="row g-2">
        <div class="col-md-3" v-for="(label, model) in fields" :key="model">
          <label :for="model" class="form-label">{{ label }}</label>
          <input v-model="localData[model]" type="text" :id="model" class="form-control form-control-sm" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['cliente', 'cuenta', 'panorama', 'telefono'],
    data() {
      return {
        localData: { cliente: this.cliente, cuenta: this.cuenta, panorama: this.panorama, telefono: this.telefono },
        fields: {
          cliente: "Cliente",
          cuenta: "Cuenta",
          panorama: "Servicio",
          telefono: "Teléfono"
        }
      };
    },
    watch: {
      localData: {
        handler(newVal) {
          this.$emit('update:data', newVal);
        },
        deep: true
      }
    }
  };
  </script>
  