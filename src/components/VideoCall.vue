<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>Current Camera</h1>
        <code v-if="device">{{ device.label }}</code>
        <div class="border">
          <BoundingBox :feelings="feelings" :bbox="bbox" />
          <web-cam ref="webcam"
                width="100%"
                :deviceId="deviceId"
                @started="onStarted"
                @stopped="onStopped"
                @error="onError"
                @cameras="onCameras"
                @camera-change="onCameraChange" />
        </div>

        <div class="row">
          <div class="col-md-12">
            <select v-model="camera">
              <option>-- Select Device --</option>
              <option v-for="device in devices" :key="device.deviceId" :value="device.deviceId">{{ device.label }}</option>
            </select>
          </div>
          <div class="col-md-12">
            <button type="button" class="btn btn-primary" @click="onCapture">Capture Photo</button>
            <button type="button" class="btn btn-danger" @click="onStop">Stop Camera</button>
            <button type="button" class="btn btn-success" @click="onStart">Start Camera</button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h2>Captured Image</h2>
        <figure class="figure">
          <img :src="img" class="img-responsive" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import {WebCam} from 'vue-web-cam'
import {find, head} from 'lodash'
import axios from 'axios'
import BoundingBox from './BoundingBox.vue';

export default {
  name: 'VideoCall',
  components: {WebCam, BoundingBox},
  data () {
    return {
      img: null,
      camera: null,
      deviceId: null,
      devices: [],
      bbox: [0,0,20,20],
      feelings: {
        anger: 0,
        happiness: 0
      }
    }
  },
  computed: {
    device: function () {
      return find(this.devices, n => n.deviceId === this.deviceId)
    }
  },
  watch: {
    camera: function (id) {
      this.deviceId = id
    },
    devices: function () {
      // Once we have a list select the first one
      let first = head(this.devices)
      if (first) {
        this.camera = first.deviceId
        this.deviceId = first.deviceId
      }
    }
  },
  methods: {
    onCapture () {
      if (this.$refs.webcam == null) {
        return;
      }

      this.img = this.$refs.webcam.capture()
    },
    onStarted (stream) {
      console.log('On Started Event', stream)
    },
    onStopped (stream) {
      console.log('On Stopped Event', stream)
    },
    onStop () {
      this.$refs.webcam.stop()
    },
    onStart () {
      this.$refs.webcam.start()
    },
    onError (error, stream) {
      console.log('On Error Event', error, stream)
    },
    onCameras (cameras) {
      this.devices = cameras
      console.log('On Cameras Event', cameras)
    },
    onCameraChange (deviceId) {
      this.deviceId = deviceId
      this.camera = deviceId
      console.log('On Camera Change Event', deviceId)
    }
  },

  mounted () {
    // Emotion recognition
    setInterval(() => {
      if (this.$refs.webcam == null) {
        return;// console.error('Webcam is not available!');
      }

      let image = this.$refs.webcam.capture()

      axios.post('http://127.0.0.1:5001/analyse_emotions', image, {
          headers: { 'Content-Type': 'text/plain' }
        })
        .then((response) => {
          this.feelings = response.data;
          saveFeelings(response.data);
        })
        .catch((error) => { console.log(error); });
      }, 1000);

    // Face detection
    setInterval(() => {
        if (this.$refs.webcam == null) {
          return;// console.error('Webcam is not available!');
        }

        let image = this.$refs.webcam.capture();

        axios.post('http://127.0.0.1:5001/find_faces', image, {
          headers: { 'Content-Type': 'text/plain' }
        })
        .then((response) => {
          this.bbox = head(response.data);
        })
        .catch((error) => { console.log(error); });
      }, 1000);
  }
}

function saveFeelings (feelings) {
  axios
    .post('http://127.0.0.1:5000/video/send_feelings', feelings)
    .then((response) => { /*console.log('Feelings are save!')*/ })
    .catch((error) => { console.log(error) })
}

</script>
