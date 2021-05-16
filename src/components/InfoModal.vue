<template>
  <b-modal id="info-modal" scrollable>
    <template #modal-title>
      <h2>Information</h2>
    </template>
    <div class="d-block text-left">
      <p>Diese Anwendung wurde im Sommersemster 2021 im Rahmen des Moduls Mensch-Computer-Interaktion an 
      der Universität Bonn entwickelt.</p>
      <p><a href="https://github.com/p3l1/fitts-law-experiment">Zum GitHub Projekt</a></p>
      <b-list-group>
        <b-list-group-item><strong>Verwendete Projekte / Lizenzen</strong></b-list-group-item>
        <b-list-group-item href="https://www.npmjs.com/package/vue-json-csv">vue-json-csv - MIT</b-list-group-item>
        <b-list-group-item href="https://www.npmjs.com/package/vue-page-title">vue-page-title - MIT</b-list-group-item>
        <b-list-group-item href="https://www.npmjs.com/package/bootstrap-icons">bootstrap-icons - MIT</b-list-group-item>
        <b-list-group-item href="https://www.npmjs.com/package/bootstrap-vue">bootstrap-vue - MIT</b-list-group-item>
        <b-list-group-item href="https://www.npmjs.com/package/core-js">core-js - MIT</b-list-group-item>
        <b-list-group-item href="https://www.npmjs.com/package/vue">vue - MIT</b-list-group-item>
      </b-list-group>
    </div>
    <template #modal-footer>
      <div class="mr-1 text-left">
        <a href="https://philipp.herzo.gs/datenschutz">Datenschutz</a>&nbsp;-&nbsp;
        <a href="https://philipp.herzo.gs/impressum">Impressum</a>
      </div>
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
