<template>
  <div id="app">
    <pre><code v-html="code"></code></pre>
  </div>
</template>

<script>
  import hanabi from 'hanabi'
  import code from '!raw-loader!example/App.vue'

  export default {
    data() {
      return {
        code: hanabi(code)
      }
    }
  }
</script>

<style scoped>
  pre {
    width: 100%;
    overflow: auto;
  }
</style>
