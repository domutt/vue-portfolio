<template lang="html">
  <div class="graphic-design">
    <div class="techs">
      <div v-for="tech in techs" :key="tech.id" :tech="tech" class="project-frame">
        <div class="project-logo">
          <img class="tech-logo" v-bind:src="tech.logo"/>
        </div>
        <div class="project-info">
          <h3 class="tech-h3">
            {{ tech.title }}
          </h3>
          <p>{{ tech.text1 }}</p>
          <p>{{ tech.text2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'GraphicDesign',
  props: {
    msg: String,
  },
  data() {
    return {
      techs: [
        {
          key: 'gulp',
          title: 'Gulp',
          logo: 'http://fountainjs.io/assets/imgs/gulp.png',
          text1: 'The streaming build system',
          text2: 'Automate and enhance your workflow',
        },
        {
          key: 'vue',
          title: 'Vue.js 2',
          logo: 'http://fountainjs.io/assets/imgs/vue.png',
          text1: 'Reactive Components for Modern Web Interfaces',
          text2: 'Write some HTML, grab some JSON, create a Vue instance, that\'s it.',
        },
      ],
    };
  },
});
</script>


<style lang="scss">
</style>
