<template>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <h1>Agents Ranks</h1>
      </vs-col>
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <h2>Name</h2>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <h2>Place</h2>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <h2>Score</h2>
        </vs-col>
      </vs-row>
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <h3>Hortensia Giammarino</h3>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <h3>1</h3>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <star-rating :rating="4.8" v-bind:star-size="17" :read-only="true" :increment="0.01"
                       :border-width="0" active-color="#8AC939"
                       :star-points="[23,1, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
        </vs-col>
      </vs-row>
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <h3>Cheri Rhem</h3>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <h3>2</h3>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <star-rating :rating="4.3" v-bind:star-size="17" :read-only="true" :increment="0.01"
                       :border-width="0" active-color="#8AC939"
                       :star-points="[23,1, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
        </vs-col>
      </vs-row>
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <h3>Merri Marzette</h3>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <h3>3</h3>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <star-rating :rating="3.7" v-bind:star-size="17" :read-only="true" :increment="0.01"
                       :border-width="0" active-color="#8AC939"
                       :star-points="[23,1, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
        </vs-col>
      </vs-row>
    </vs-row>
  </template>

<script>
  import StarRating from 'vue-star-rating/src/star-rating'
  export default {
    name: 'AgentsRanks',
    components: {StarRating}
  }
</script>

<style scoped>

  h1 {
    padding-bottom: 30px;
  }
  h2 {
    padding-bottom: 10px;
    text-decoration: underline;
  }
  h3 {
    padding-bottom: 5px;
  }

</style>
