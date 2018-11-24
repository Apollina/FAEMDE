<template lang="html">
  <div>
    <vs-table :data="users" style="text-align: left">
      <template slot="header">
        <h1>
          Agent Ranks
        </h1>
      </template>
      <template slot="thead">
        <vs-th>
          Name
        </vs-th>
        <vs-th>
          Place
        </vs-th>
        <vs-th>
          Score
        </vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vs-td :data="data[indextr].username">
            {{data[indextr].name}}
          </vs-td>

          <vs-td :data="data[indextr].id">
            {{data[indextr].id}}
          </vs-td>

          <vs-td :data="data[indextr].id">
            <star-rating :rating="data[indextr].score" v-bind:star-size="17" :read-only="true" :increment="0.01"
                         :border-width="0" active-color="#8AC939"
                         :star-points="[23,1, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'AgentRank',
  components: {
    StarRating
  },
  data: function () {
    return {
      users: [
        {
          'id': 1,
          'name': 'Hortensia Giammarino',
          'score': 5
        },
        {
          'id': 2,
          'name': 'Cheri Rhem',
          'score': 4.28
        },
        {
          'id': 3,
          'name': 'Merri Marzette',
          'score': 4.00
        },
        {
          'id': 4,
          'name': 'Hedy Verdin',
          'score': 3.5
        },
        {
          'id': 5,
          'name': 'Manual Ernst',
          'score': 3.15
        },
        {
          'id': 6,
          'name': 'Lanell Pratt',
          'score': 2.95
        },
        {
          'id': 7,
          'name': 'Shaun Hauer',
          'score': 2.60
        },
        {
          'id': 8,
          'name': 'Cornelius Woo',
          'score': 2.10
        },
        {
          'id': 9,
          'name': 'Lynn Bouffard',
          'score': 1.89
        },
        {
          'id': 10,
          'name': 'Novella Daughdrill',
          'score': 0.5
        }
      ]
    }
  }
}
</script>
