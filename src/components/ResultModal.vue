<template>
  <b-modal id="result-modal">
    <template #modal-title>
      <h1>Ergebnisse</h1>
    </template>
    <div class="d-block text-center">
      <b-table striped hover :items="resultData"></b-table>
    </div>
    <template #modal-footer>
      <b-button variant="danger" title="Deaktiviert" disabled class="mt-3" @click="$bvModal.hide('result-modal')">CSV Export</b-button>
      <b-button variant="success" class="mt-3" @click="$bvModal.hide('result-modal')">Schließen</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ResultModal',
  props: [
    'resultData',
  ],
  data: () => {
    return {}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
