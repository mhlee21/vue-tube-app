import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyword: '',
    videos: [],
    selectedVideo: null,
  },
  getters: {
    selectVideoUrl(state) {
      return `https://www.youtube.com/embed/${state.selectedVideo.id.videoId}`
    }
  },
  mutations: {
    DELETE_SELECTED_VIDEO(state) {
      state.selectedVideo = null
    },
    CREATE_VIDEO_LIST(state, videos) {
      state.videos = videos
    },
    SELECT_VIDEO(state, video) {
      state.selectedVideo = video
    }
  },
  actions: {
    createVideoList({commit}, videos) {
      commit('CREATE_VIDEO_LIST', videos)
    },
    searchKeyword(context, keyword) {
      const URL = "https://www.googleapis.com/youtube/v3/search"
      const API_KEY=process.env.VUE_APP_API_KEY
      const params = {
        key: API_KEY,
        part: 'snippet',
        q: keyword,
        type: 'video',
        maxResults: 20,
      }

      axios({
        method: 'get',
        url: URL,
        params,
      })
        .then(res => {
          context.dispatch('createVideoList', res.data.items)
        })
      
      context.commit('DELETE_SELECTED_VIDEO')
    },
    selectVideo({commit}, video) {
      commit('SELECT_VIDEO', video)
    }
  },
  modules: {
  }
})
