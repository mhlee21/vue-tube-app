<template>
  <div>
    <input type="text"
      v-model="keyword"
      @keydown.enter="searchKeyword(keyword)"
      class="form-control"
    >
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'TheSearchBar',
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    ...mapActions(['searchKeyword',])
  }
}
</script>

<style>

</style>