<template>
  <div id="app" class="url">
    <div id="background-triangle"></div>

    <div class="logo">
        <div id="my-logo"></div>
    </div>

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
  // cursor: url('./assets/dual-ring.apng'), auto;
}
.url {cursor: url('./assets/cursor.png'),auto;}
#app {
  font-family: 'Work Sans', Helvetica, Arial, sans-serif;
  font-weight: 100;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // max-width: 940px;
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
  position: fixed;
  top: .5rem;;
  left:2%;

  width: 96%;
  height: 60px;
  // margin: 0 auto;
  // padding-left: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #name-holder{
    width: 500px;
    min-width: 200px;
    // text-align: left;
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
      min-width: 110px;

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
