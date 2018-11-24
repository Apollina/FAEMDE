<template>
  <div class="chart">
    <h1>Chart</h1>
    <line-chart :chart-data="data"></line-chart>
  </div>
</template>

<script>
import LineChart from './LineChart.js'
import axios from 'axios'

export default {
  name: 'UserHappyChart',
  components: { LineChart },

  data () {
    return {
      data: null,
    }
  },

  mounted () {
    setInterval(() => {
      this.updateData();
    }, 1000)
  },

  methods: {
    updateData () {
      axios
        .get('http://localhost:5000/video/get_feelings')
        .then((response) => {
          let angerStats = response.data.map((s) => s.angriness);
          let happinessStats = response.data.map((s) => s.happiness);

          angerStats = angerStats.slice(angerStats.length - 50, angerStats.length);
          happinessStats = happinessStats.slice(happinessStats.length - 50, happinessStats.length);


          this.data = {
            datasets: [
              {
                label: 'Happiness',
                borderColor: '#f87979',
                fill: true,
                showLine: true,
                backgroundColor: '#f87979',
                data: happinessStats.map((s, i) => ({x: i, y: s}))
              }
            ]
          }
        })
        .catch((err) => { console.error(err); });
    }
  }
}
</script>

<style>
  .chart {
  }
  .chartjs-render-monitor {
    height: 700px !important;
    width: 600px;
  }
</style>
