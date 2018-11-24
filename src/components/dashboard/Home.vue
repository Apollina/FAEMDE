<template>
  <vs-row>
    <vs-col class="video-call" vs-type="block" vs-justify="center" vs-align="center" vs-w="6">
      <VideoCall/>
    </vs-col>
    <vs-col  class="agent-rank" vs-type="-webkit-box" vs-justify="left" vs-align="center" vs-w="6">

    </vs-col>
    <vs-col vs-type="grid" vs-justify="center" vs-align="center" vs-w="6">
      User Info
    </vs-col>
    <vs-col vs-type="grid" vs-justify="center" vs-align="center" vs-w="6">
    </vs-col>
    <vs-col class="chart-container" vs-type="grid" vs-justify="left" vs-align="left" vs-w="12">
      <UserHappyChart/>
    </vs-col>
  </vs-row>

</template>
<script>
import UserHappyChart from '../utils/UserHappyChart'
import VideoCall from '../VideoCall'
import AgentRank from '../utils/AgentRank'

export default {
  name: 'Home',
  components: {AgentRank, VideoCall, UserHappyChart}
}
</script>

<style scoped>

  .chart-container {
    padding: 50px;
  }
  .video-call, .agent-rank {
    padding-top: 70px;
  }

</style>
