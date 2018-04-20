<template>
  <div class="work">
    <div class="ui-design stylings">
      <div id="ui-design-inner">
        <span @click="showUiProjects">UI Design  </span>
        <component :is="uiView"/>
      </div>
    </div>
    <div class="g-design stylings">
      <div id="g-design-inner">
        <span @click="showGdProjects">Graphic Design</span>
        <component :is="gdView"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import GraphicDesign from '@/components/GraphicDesign.vue';
import UiDesign from '@/components/UiDesign.vue';
import Blank from '@/components/Blank.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'work',
  components: {
    'graphic-design': GraphicDesign,
    'ui-design': UiDesign,
    'blank': Blank,
  },
  data() {
    return {
      uiView: Blank,
      gdView: Blank,

    };

  },
  methods : {
    showUiProjects() {
      if (this.uiView  === Blank ) {
        this.uiView = UiDesign;

      } else {
        this.uiView = Blank;
      }

    },

    showGdProjects() {
      if (this.gdView  === Blank ) {
        this.gdView = GraphicDesign;

      } else {
        this.gdView = Blank;
      }
    },
  },
});
</script>
<style scoped lang="scss">
$darkest-color: black;
$dark-color: #0A0624;
$bright-color: #FAF800;
$light-color: #AAA9B7;
$lightest-color: white;
$light-transparency: rgba(255,255,255, .2);

.work{
  color: $lightest-color;
  margin-top: 10rem;
  width: 100%;
  text-align: center;
  font-size: 10rem;
  .stylings{
    margin: 3rem 0 6rem 0;
    span{
      &:hover{
        padding: 1rem 3rem;
        color: $light-color;
        background-color: $bright-color;
      }
      &.router-link-exact-active {
        color: $dark-color;
      }
    }
  }
}
</style>
