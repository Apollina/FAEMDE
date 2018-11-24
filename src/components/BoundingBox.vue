<template>
    <div id="bounding-box-container">
        <div id="bounding-box" v-bind:style="styleObject">
            <p class="notes">Anger: {{anger}}</p>
            <p class="notes">Happiness: {{happiness}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BoundingBox',
  props: ['bbox', 'feelings'],

  watch: {
    bbox (bbox) {
      if (!bbox) {
        return
      }
      this.styleObject = {
        top: bbox[1] + 'px',
        left: bbox[0] + 'px',
        width: bbox[2] + 'px',
        height: bbox[3] + 20 + 'px'
      }
    },
    feelings (feelings) {
      this.anger = feelings.anger.toFixed(2)
      this.happiness = feelings.happiness.toFixed(2)
    }
  },

  data () {
    return {
      styleObject: {
        top: this.top + 'px',
        left: this.left + 'px',
        width: this.width + 'px',
        height: this.height + 'px'
      },
      anger: 0,
      happiness: 0
    }
  }
}
</script>

<style>
#bounding-box-container {
    position: relative;
    width: 100%;
    height: 100%;
}

#bounding-box {
    border: greenyellow 3px solid;
    position: absolute;
}

.notes {
    text-align: left;
    margin-left: 5px;
    color: white;
}
</style>
