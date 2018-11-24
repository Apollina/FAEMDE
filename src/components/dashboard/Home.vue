<template>
  <vs-row>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
      Video
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <SupportChat/>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
      User Info
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
      Agents Ranks
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      Chart
    </vs-col>
  </vs-row>

</template>

<script>
  import SupportChat from '../SupportChat'
export default {
  name: 'Home',
  components: {SupportChat}
}
</script>

<style scoped>

</style>
