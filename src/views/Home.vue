<template>
  <div class="home">
    <HelloWorld msg="UX/UI design, graphic design + front end web - overall creator of things ♥"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld
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
.home{
  margin-top: 11rem;
}
</style>
