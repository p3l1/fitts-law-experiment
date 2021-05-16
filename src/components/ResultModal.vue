<template>
  <b-modal id="result-modal" scrollable>
    <template #modal-title>
      <h1>Ergebnisse</h1>
    </template>
    <div class="d-block text-center">
      <b-table striped hover :items="resultData" :fields="tableFields" :labels="csvLabels"></b-table>
    </div>
    <template #modal-footer>
      <download-csv
        class="btn btn-warning"
        :data="resultData"
        :fields="csvFields"
        :labels="csvLabels"
        name= "results.csv">
        CSV
      </download-csv>
      <download-csv
        class="btn btn-warning"
        :data="resultData"
        :fields="csvFields"
        :labels="csvLabels"
        separator-excel
        name= "results.csv">
        CSV (Excel optimiert)
      </download-csv>
      <b-button variant="success" @click="$bvModal.hide('result-modal')">Schließen</b-button>
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
    return {
      csvFields: [
        'distance',
        'width',
        'travelTime'
      ],
      csvLabels: {
        distance: 'Distanz',
        width: 'Breite',
        travelTime: 'Zeit'
      },
      tableFields: [
        { key: 'distance', label: 'Distanz in px' },
        { key: 'width', label: 'Breite in px' },
        { key: 'travelTime', label: 'Zeit in ms' }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
