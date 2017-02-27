<template>
  <div id="app">
    <select @change="handleChangeExample">
      <option value="vue">Choose another example</option>
      <option value="preact">Preact</option>
      <option value="next">Next.js</option>
      <option value="python">Python</option>
      <option value="golang">Golang</option>
    </select>
    <pre><code v-html="code"></code></pre>
    <pre><code v-html="footer"></code></pre>
  </div>
</template>

<script>
  import hanabi from '../src'
  import code from '!raw-loader!./examples/vue.js'

  export default {
    data() {
      return {
        active: 'vue',
        footer: hanabi(`---\n\n<!-- haha, this looks hilarious -->\n<!-- flower and fire, such a highlighter, https://github.com/egoist/hanabi -->`),
        examples: {
          vue: hanabi(code),
          preact: import('!raw-loader!./examples/preact'),
          next: import('!raw-loader!./examples/next'),
          python: import('!raw-loader!./examples/python.py'),
          golang: import('!raw-loader!./examples/golang.go')
        }
      }
    },
    created() {
      this.changeExample('vue')
    },
    computed: {
      code() {
        return this.examples[this.active]
      }
    },
    methods: {
      handleChangeExample({target: {value}}) {
        this.changeExample(value)
      },
      changeExample(type) {
        const example = this.examples[type]
        if (typeof example === 'string') {
          this.active = type
        } else {
          example.then(code => {
            this.examples[type] = hanabi(code)
            this.active = type
          })
        }
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
