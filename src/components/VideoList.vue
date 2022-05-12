<template>
  <div class="row justify-content-center">
    <video-list-item
      class="col-3"
      v-for="video in videos"
      :key="video.id.videoId"
      :video="video"
    >
    </video-list-item>
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem'
export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  computed: {
    videos() {
      return this.$store.state.videos
    }
  }
}
</script>

<style>

</style>