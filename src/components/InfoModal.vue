<template>
  <b-modal id="info-modal" scrollable>
    <template #modal-title>
      <h2>Information</h2>
    </template>
    <div class="d-block text-left">
      <p>Diese Anwendung wurde im Sommersemster 2021 im Rahmen des Moduls Mensch-Computer-Interaktion an 
      der Universität Bonn entwickelt.</p>
      <a href="https://philipp.herzo.gs/datenschutz">Datenschutz</a>&nbsp;
      <a href="https://philipp.herzo.gs/impressum">Impressum</a>
    </div>
    <template #modal-footer>
      <b-button variant="dark" @click="$bvModal.hide('info-modal')">Schließen</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'InfoModal',
  data: () => {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
