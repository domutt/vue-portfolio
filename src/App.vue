<template>
  <div id="app">

    <div id="nav-bar">
      <div id="my-name">
        <router-link to="/"> DOMINIC MUTTEL </router-link>
      </div>
      <div id="nav-pages">
        <router-link to="/work">Work</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>

    <div class="logo">
      <div id="my-logo"></div>
    </div>

    <router-view/>

  </div>
</template>

<style lang="scss">

$darkest-color: black;
$dark-color: #0A0624;
$bright-color: #FAF800;
$light-color: #AAA9B7;
$lightest-color: white;
$light-transparency: rgba(255,255,255, .2);

$font-dir: "./assets/fonts/";

@font-face {
  font-family: "Monique";
  src: url("#{$font-dir}Monique-RegularRound20.woff2") format("woff2"),
	url("#{$font-dir}Monique-RegularRound20.woff") format("woff"),
	url("#{$font-dir}Monique-RegularRound20.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Work Sans";
  src: url("#{$font-dir}WorkSans-Thin.woff2") format("woff2"),
	url("#{$font-dir}WorkSans-Thin.woff") format("woff"),
	url("#{$font-dir}WorkSans-Thin.ttf") format("truetype");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "Work Sans";
  src: url("#{$font-dir}WorkSans-Regular.woff2") format("woff2"),
  url("#{$font-dir}WorkSans-Regular.woff") format("woff"),
  url("#{$font-dir}WorkSans-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Work Sans";
  src: url("#{$font-dir}WorkSans-Medium.woff2") format("woff2"),
	url("#{$font-dir}WorkSans-Medium.woff") format("woff"),
	url("#{$font-dir}WorkSans-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Work Sans";
  src: url("#{$font-dir}WorkSans-Black.woff2") format("woff2"),
	url("#{$font-dir}WorkSans-Black.woff") format("woff"),
	url("#{$font-dir}WorkSans-Black.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
}

body {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  background-color: $light-color;
  font-size: 1.2rem;
}

h2{
  font-weight: 600;
}
h3{
  font-weight: normal;
}
#app {
  font-family: 'Work Sans', Helvetica, Arial, sans-serif;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark-color;
}
.logo{
  position: fixed;
  width: 100%;
  height: 400px;
  top: 14rem;
  z-index: -5000;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 100%;
  top: 0;
  color: $darkest-color;
  text-align: center;
  height: 100px;
  #my-name{
    width: 100%;
    font-family: 'Monique';
    font-size: 2.5rem;
    text-decoration: none;
    margin: 0 auto;
    a {
      margin: .5rem;
      padding: .2rem;
      text-decoration: none;
      font-weight: 400;
      color: $darkest-color;
    }

  }
  #nav-pages {
    font-size: 1rem;
    width: 100%;
    a {
      margin: .2rem;
      padding: .1rem .4rem ;
      text-decoration: none;
      font-weight: 400;
      color: $darkest-color;
      &:hover{
        background-color: $light-transparency;
      }
      &.router-link-exact-active {
        color: $bright-color;
      }
    }
  }
}

</style>
