<template>
  <vs-row class="page">
    <vs-col class="video-call" vs-type="block" vs-justify="center" vs-align="center" vs-w="6">
      <VideoCall/>
    </vs-col>
    <vs-col class="chart-container" vs-type="block" vs-justify="center" vs-align="center" vs-w="6">
      <UserHappyChart/>
    </vs-col>
    <vs-col  class="agent-rank" vs-type="flex" vs-justify="left" vs-align="center" vs-w="12">
    <!-- <AgentRank/> -->
      <AgentsRanks/>
    </vs-col>
  </vs-row>

</template>
<script>
import UserHappyChart from '../utils/UserHappyChart'
import VideoCall from '../VideoCall'
import AgentRank from '../utils/AgentRank'
import AgentsRanks from '../utils/AgentsRanks'

export default {
  name: 'Home',
  components: {AgentsRanks, AgentRank, VideoCall, UserHappyChart}
}
</script>

<style scoped>

  .page {
    padding-left: 30px;
    padding-right: 30px;
  }

  .chart-container {
  }
  .video-call, .chart-container {
    padding: 20px 20px 0 20px;
  }
  .agent-rank {
    padding: 70px 100px 120px 100px;
  }

</style>
