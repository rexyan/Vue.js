<template>
  <div>
    <!--<h5> {{ test_value }} </h5>-->
    <!--<button @click="GET_USERINFO"> changeData</button>-->
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    data() {
      return {}
    },
    name: "VuexTest",
    computed: {
      ...mapState([
        'test_value'
      ])
    },
    methods: {
      ...mapMutations([
        'GET_USERINFO'
      ]),
      ...mapActions([
        'getUserInfo'
      ]),
      changeData() {
        return this.GET_USERINFO('change_value')
      }
    },
    mounted:function () {
      this.getUserInfo()
    }
  }
</script>

<style scoped>

</style>
