<template>
  <div class="hello">
    <div class="headline">
      <h1>{{ msg }}</h1>
    </div>


    <!-- <h2>A. Looping through data:</h2>
    <h2>B. Looping through data:</h2> -->
    <!-- <div class="techs">
      <div v-for="tech in techs" :key="tech.id" :tech="tech">
        <img class="tech-logo" v-bind:src="tech.logo"/>
        <h3 class="tech-h3">
          {{ tech.title }}
        </h3>
        <p>{{ tech.text1 }}</p>
        <p>{{ tech.text2 }}</p>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';



export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      showList: false,
      techs: [
        {
          "key": "gulp",
          "title": "Gulp",
          "logo": "http://fountainjs.io/assets/imgs/gulp.png",
          "text1": "The streaming build system",
          "text2": "Automate and enhance your workflow"
        },
        {
          "key": "vue",
          "title": "Vue.js 2",
          "logo": "http://fountainjs.io/assets/imgs/vue.png",
          "text1": "Reactive Components for Modern Web Interfaces",
          "text2": "Write some HTML, grab some JSON, create a Vue instance, that's it."
        },
        {
          "key": "browsersync",
          "title": "Browsersync",
          "logo": "http://fountainjs.io/assets/imgs/browsersync.png",
          "text1": "Time-saving synchronised browser testing",
          "text2": "It’s wicked-fast and totally free"
        },
        {
          "key": "scss",
          "title": "Sass",
          "logo": "http://fountainjs.io/assets/imgs/sass.png",
          "text1": "Syntactically Awesome Style Sheets.",
          "text2": "CSS with superpowers."
        },
        {
          "key": "babel",
          "title": "Babel",
          "logo": "http://fountainjs.io/assets/imgs/babel.png",
          "text1": "Babel is a JavaScript compiler",
          "text2": "Use next generation JavaScript, today"
        },
        {
          "key": "eslint",
          "title": "ESLint",
          "logo": "http://fountainjs.io/assets/imgs/eslint.png",
          "text1": "The pluggable linting utility for JavaScript and JSX.",
          "text2": "1 tool for identifying and reporting on patterns found in ECMAScript/JavaScript code."
        },
        {
          "key": "karma",
          "title": "Karma",
          "logo": "http://fountainjs.io/assets/imgs/karma.png",
          "text1": "Spectacular Test Runner for JavaScript",
          "text2": "Things should be simple. We believe in testing and so we want to make it as simple as possible"
        },
        {
          "key": "webpack",
          "title": "Webpack",
          "logo": "http://fountainjs.io/assets/imgs/webpack.png",
          "text1": "Webpack is a module bundler",
          "text2": "Webpack, the production / unbiased / flexible / extensible / open source module bundler"
        }
      ]
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.hello{
  width: 100%;
  .headline{
    width:60%;
    margin: 0 auto;
  }
}
h1{
  font-weight: 900;
  font-size: 5rem;
  letter-spacing: .5rem;
  color: white;
}
h3 {
  // margin: 40px 0 0;
  font-weight: 400;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
