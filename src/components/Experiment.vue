<template>
  <div class="experiment-wrapper" :style="{ width: (2*width + distance) + 'px' }">
    <div @click="clickBar('left')" class="bar left" :class="{ active: bars.left.isActive, done: experiment.isCompleted }" :style="{ width: width + 'px' }" />
    <div @click="clickBar('right')" class="bar right" :class="{ active: bars.right.isActive, done: experiment.isCompleted }" :style="{ margin: '0 0 0 ' + (width + distance) + 'px', width: width + 'px' }" />
  </div>
</template>

<script>
export default {
  name: 'Experiment',
  props: [
    'width',
    'distance',
    'isRunning',
    'iterations'
  ],
  data: () => {
    return {
      bars: {
        left: {
          isActive: false,
        },
        right: {
          isActive: false,
        }
      },
      experiment: {
        isReady: false,
        isCompleted: false,
        clickCounter: 0,
        startTime: 0,
        data: []
      }
    }
  },
  watch: {
    isRunning: function setStartState(newState, oldState) {

      if(oldState === false) {
        this.bars.left.isActive = true;
        this.experiment.isReady = true;
        this.experiment.startTime = Date.now()
      }
      else {
        this.bars.left.isActive = false;
      }
      return;
    },
  },
  methods: {
    clickBar(barPosition) {

      // Catches click if Experiment has not yet started
      if (!this.experiment.isReady || !this.isRunning || this.experiment.isCompleted) {
        console.log('Not started or is completed')
        return;
      }

      // Catches click if bar is not active
      if ((barPosition === 'left' && !this.bars.left.isActive) ||
      (barPosition === 'right' && !this.bars.right.isActive)) {
        return;
      }
      else {
        let newEntryObj = {
          distance: this.distance,
          width: this.width,
          clickTime: Date.now(),
          travelTime: undefined,
        };
        this.experiment.data.push(newEntryObj);

        this.toggleBarState();
        this.experiment.clickCounter += 1;
      }

      // Catches click if counter is exceeded
      // Experiment is finished
      if (!(this.experiment.clickCounter < this.iterations)) {
        console.log('Counter exceeded', this.experiment.clickCounter)
        this.$parent.isRunning = false;
        this.experiment.isCompleted = true;
        this.convertData();
        return;
      }
    },
    toggleBarState() {
      if (this.bars.left.isActive) {
        this.bars.left.isActive = false;
        this.bars.right.isActive = true;
      }
      else {
        this.bars.left.isActive = true;
        this.bars.right.isActive = false;
      }
    },
    convertData() {
      let index;
      for (index = 0; index < this.experiment.data.length; index++) {
        if (index === 0)
          this.experiment.data[index].travelTime = this.experiment.data[index].clickTime - this.experiment.startTime;
        else
          this.experiment.data[index].travelTime = this.experiment.data[index].clickTime - this.experiment.data[index-1].clickTime;
        console.log(index, this.experiment.data[index])
      }

      this.$parent.readyData = this.experiment.data;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.experiment-wrapper {
  display: block;
  height: auto;
  margin: 0 auto;
  padding: 12rem 0 0 0;
}
.experiment-wrapper .bar {
  background-color: #fff;
  height: 300px;
  width: 100px;
  display: block;
  position: relative;
  transition: background .2s;
}
.experiment-wrapper .bar.left {
  float: left;
}

.experiment-wrapper .bar.active {
  background-color: #dc3545;
}

.experiment-wrapper .bar.done {
  background-color: #28a745;
}
</style>
