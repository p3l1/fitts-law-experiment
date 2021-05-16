<template>
  <div id="app">
    <Experiment :width="getWidth(width)" :distance="getDistance(distance)" :isRunning="isRunning" />
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

        
        <b-button variant="info" @click="debug()">Debug</b-button>
        <b-button :variant="buttonVariant" @click="startExperiment" :disabled="isCompleted">{{ buttonText }}</b-button>
        <b-button variant="success" @click="$bvModal.show('result-modal')" :disabled="!isCompleted" style="margin-left: 1rem">Ergebnis anzeigen</b-button>
      </b-form>
    </b-container>
    <ResultModal :resultData="readyData" />
  </div>
</template>

<script>
import Experiment from './components/Experiment.vue'
import ResultModal from './components/ResultModal.vue'

export default {
  name: 'App',
  components: {
    Experiment,
    ResultModal,
  },
  data: () => {
    return {
        width: 100,
        distance: 450,
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
}
#app {
  width: 100vw;
  height: 100vh;
  background-color: #111;
  color: #fff;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.footer b-form {
  width: 80%;
  margin: 0 auto;
  display: block;
}
</style>
