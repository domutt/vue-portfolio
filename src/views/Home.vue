<template>
  <div class="home">
    <HelloWorld msg="UX/UI design, graphic design + front end web development - overall creator of things ♥"/>
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
.home{
  margin: 0 1rem;
}


</style>
