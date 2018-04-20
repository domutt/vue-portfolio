<template>
  <div class="hello">
    <div class="headline">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">

.hello{
  width: 100%;
  .headline{
    width:80%;
    margin: 0 auto;
  }
}
h1{
  font-weight: 900;
  font-size: 6rem;
  line-height: 7rem;
  // letter-spacing: .2rem;
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
