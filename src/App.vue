<template>
  <div id="app">

    <div id="nav-bar">
      <div id="name-holder">
        <div id="name-art"></div>
      </div>
      <div id="nav-pages">
        <router-link to="/">Home </router-link>
        <router-link to="/about"> About</router-link>
      </div>
    </div>

    <div class="logo">
      <div id="my-logo"></div>
    </div>

    <router-view/>

  </div>
</template>

<style lang="scss">
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #daf0e6;
  font-size: 1.2rem;
}
#app {
  font-family: 'Work Sans', Helvetica, Arial, sans-serif;
  font-weight: 100;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.logo{
  width: 30%;
  position: fixed;
  height:400px;
  top: 14rem;
  left: 1%;
  z-index: -5000;
  #my-logo {
    background-image: url('./assets/logo_domu.png');
    background-repeat: no-repeat;
    background-size: 89%;
    background-position: top;
    min-width: 150px;
    width: 100%;
    max-width: 400px;
    height: 100%;
  }
}
#nav-bar{
  background-color: white;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #name-holder{
    width: 400px;
    margin-left: 1rem;
    #name-art{
      background-image: url("./assets/name.png");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      width: 80%;
      height: 60px;
    }
  }
  #nav-pages {
    min-width: 110px;
    margin-right: 1rem;

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
router-view{
  margin: 0 1rem;
}
</style>
