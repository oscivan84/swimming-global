<template>
    <div class="row g-2">
      <div class="col-md-3" v-for="(label, model) in fields" :key="model">
        <label :for="model" class="form-label">{{ label }}</label>
        <input v-if="model !== 'tipo'" v-model="localData[model]" type="text" :id="model" class="form-control form-control-sm" />
        <select v-else v-model="localData.tipo" :id="model" class="form-select form-select-sm">
          <option value="NO Enciende">NO Enciende</option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['mac', 'tipo', 'link'],
    data() {
      return {
        localData: { mac: this.mac, tipo: this.tipo, link: this.link },
        fields: { mac: "MAC", tipo: "Tipo", link: "Nodo" }
      };
    },
    watch: {
      localData: {
        handler(newVal) {
          this.$emit('update:service', newVal);
        },
        deep: true
      }
    }
  };
  </script>
  