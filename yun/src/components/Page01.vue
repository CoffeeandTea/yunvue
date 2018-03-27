<template>
    <div>
      <div><button @click="goHelloWorld()">点击我啊</button></div>
      <ul>
        <li v-for="item in array">{{item}}</li>
      </ul>
    </div>
</template>

<script>
  import router from '../router/index'
  export default {
    name: 'Page01',
    data () {
      return {
          array: ['王晓宇','王晓宇','王晓宇','王晓宇','王晓宇','王晓宇','王晓宇','王晓宇']
      }
    },
    methods: {
      goHelloWorld() {
        this.$router.push({ name: 'HelloWorld'})
      }
    }
  }
</script>

<style>
    ul{
      list-style: none;
    }
</style>
