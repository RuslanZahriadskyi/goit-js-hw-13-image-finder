import Vue from 'vue'
import { PaginationNavPlugin } from 'bootstrap-vue'
Vue.use(PaginationNavPlugin)


export default {
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    }
  }