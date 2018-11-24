<template>
  <vs-row>
    <vs-col vs-type="grid" vs-justify="center" vs-align="center" vs-w="6">
      Video
    </vs-col>
    <vs-col vs-type="grid" vs-justify="center" vs-align="center" vs-w="6">
      <SupportChat/>
    </vs-col>
    <vs-col vs-type="grid" vs-justify="center" vs-align="center" vs-w="6">
      User Info
    </vs-col>
    <vs-col vs-type="grid" vs-justify="center" vs-align="center" vs-w="6">
      Agents Ranks
    </vs-col>
    <vs-col class="chart-container" vs-type="grid" vs-justify="left" vs-align="left" vs-w="12">
      <UserHappyChart/>
    </vs-col>
  </vs-row>

</template>

<script>
import SupportChat from '../utils/SupportChat'
import UserHappyChart from '../utils/UserHappyChart'

export default {
  name: 'Home',
  components: {UserHappyChart, SupportChat}
}
</script>

<style scoped>

  .chart-container {
    padding: 50px;
  }

</style>
