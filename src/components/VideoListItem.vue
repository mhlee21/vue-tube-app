<template>
  <div @click="selectVideo(video)" class="card" style="width: 18rem;">
    <img class="card-img-top" :src="video.snippet.thumbnails.default.url" alt="thumbnails">
    <div class="card-body">
      <p>{{ video.snippet.title }}</p>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'VideoListItem',
  props: {
    video: Object,
  },
  methods: {
    ...mapActions(['selectVideo',])    
  }
}
</script>

<style>

</style>