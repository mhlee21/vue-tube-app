<template>
  <div v-if="$store.state.selectedVideo" class="area">
    <iframe id="ytplayer" type="text/html" class="video"
      :src="selectVideoUrl"
      frameborder="0"></iframe>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'VideoDetail',
  computed: {
    ...mapGetters(['selectVideoUrl'])
  }
}
</script>

<style>
.area {
  position: relative; /* absolute는 부모가 relative일 때 부모를 따라간다. */
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 비율 */
}

.video {
  position: absolute;
  width: 100%; /* 부모에 맞게 꽉 채운다. */
  height: 100%;
}
</style>