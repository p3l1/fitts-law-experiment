<template>
  <div id="app">
    <Experiment :width="getWidth(width)" :distance="getDistance(distance)" :iterations="getIterations(iterations)" :isRunning="isRunning" />
    <b-container class="footer">
      <b-form inline>
        <label class="sr-only" for="input-width">Breite</label>
        <b-input-group append="px" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input id="input-width" placeholder="Breite" v-model="width" type="number" min="10" :disabled="isRunning" />
        </b-input-group>

        <label class="sr-only" for="input-distance">Distanz</label>
        <b-input-group append="px" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input id="input-distance" placeholder="Distanz" v-model="distance" type="number" min="100" :disabled="isRunning" />
        </b-input-group>

        <label class="sr-only" for="input-distance">Durchläufe</label>
        <b-input-group append="Mal" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input id="input-iterations" placeholder="Durchläufe" v-model="iterations" type="number" min="10" :disabled="isRunning" />
        </b-input-group>

        <b-button :variant="buttonVariant" @click="startExperiment" :disabled="isCompleted">{{ buttonText }}</b-button>
        <b-button variant="success" @click="$bvModal.show('result-modal')" :disabled="!isCompleted" class="ml-2">Ergebnis anzeigen</b-button>
      </b-form>
      <b-icon icon="info-circle" class="info-icon" type="button" @click="$bvModal.show('info-modal')" />
    </b-container>
    <InfoModal />
    <ResultModal :resultData="readyData" />
  </div>
</template>

<script>
import Experiment from './components/Experiment.vue'
import ResultModal from './components/ResultModal.vue'
import InfoModal from './components/InfoModal.vue'


export default {
  name: 'App',
  title: ' ',
  components: {
    Experiment,
    ResultModal,
    InfoModal,
  },
  data: () => {
    return {
        width: 100,
        distance: 450,
        iterations: 10,
        isRunning: false,
        isCompleted: false,
        buttonText: 'Start',
        buttonVariant: 'success',
        readyData: undefined,
      }
  },
  watch: {
    isRunning: function checkExperimentState() {
      if (!this.isRunning) {
        this.stopExperiment();
        this.isCompleted = true;
      }
    }
  },
  methods: {
    getWidth(width) {
      return Number.parseInt(width)
    },
    getDistance(distance) {
      return Number.parseInt(distance)
    },
    getIterations(iterations) {
      return Number.parseInt(iterations)
    },
    startExperiment() {
      this.isRunning = true;
      this.buttonText = 'Gestartet'
      this.buttonVariant = 'warning'
    },
    stopExperiment() {
      this.buttonText = 'Beendet'
      this.buttonVariant = 'danger'
    },
    debug() {
      console.log(this.readyData)
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
#app {
  width: 100vw;
  height: 100vh;
  background-color: #111;
  color: #fff;
}
.footer {
  padding: 8rem 0 4rem;
  width: 100vw;
  height: auto;
}
.footer b-form {
  display: block;
  text-align: center;
}
.info-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 999;
  color: #fff;
  font-size: 200%;
  fill: #fff;
}
</style>
