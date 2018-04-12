<template>
  <div id="app">
    <div id="background-triangle"></div>

    <div id="nav-bar">
      <div id="name-holder">
        <div id="name-art"></div>
      </div>
      <div id="nav-pages">
        <router-link to="/">Home </router-link>
        <router-link to="/about"> About</router-link>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#background-triangle{
  z-index: -5000;
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right bottom,  #daf0e6  53.75%, transparent 0%);
  background-size: 100%;
  background-repeat: no-repeat;
}

#nav-bar{
  width: 90%;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  #name-holder{
    width: 400px;
    min-width: 200px;
    text-align: left;
    #name-art{
      background-image: url("./assets/name.png");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      width: 100%;
      height: 60px;
    }
  }
  #nav-pages {
      width: 110px;

    a {
      text-decoration: none;
      font-weight: bold;
      color: #2c3e50;
      &:hover{
        color:grey
      }
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}


</style>
