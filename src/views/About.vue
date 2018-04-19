<template>
  <div class="about">
    <div id="profile-container">
      <div id="profile-pic">
      </div>
    </div>
    <div id="about-me">
      <h2>
        <span>
          UI Designer and half-stack dev with experience in visual art, branding, and graphic design. My interests rest in finding creative solutions that activate the user experience through beautiful interfaces.

        </span>
      </h2>
    </div>
    <div class="talent">
      <h3>
        <span>

          TECH
        </span>
      </h3>
      <div class="talents">
        <span>
          HTML/CSS/JS, JS Frameworks, Adobe CS, Sketch, Invision, Zeplin, Confluence/Jira, Trello
        </span>
      </div>
    </div>
    <div class="talent">
      <h3>
        <span>
          SKILLS

        </span>
      </h3>
      <div class="talents">
        <span>
          Print/Digital, Web/Mobile, Grid/Layout, Typography, Color Theory, Wire-framing, Prototyping, UX/UI, Front-end Development, Interaction, Branding, Identity, Creative Solutions
        </span>
      </div>
    </div>
    <div id="connect">
      <div class="get-at-me">
        connect
      </div>
      <div class="get-at-me">
        <span >
          <a href="https://www.linkedin.com/in/domuttel" target="_blank">Linkedin</a>
        </span>
        <span class="or"> or </span>
        <span class="get-at-me">
          <a href="mailto:domuttel@gmail.com">Email Me :)</a>
        </span>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about{
  text-align: center;
  margin-top: 80px;
}
#profile-container{
  display: flex;
  align-items: center;
  justify-content: center;
  padding:0;
  margin-bottom: -1.7rem;
  width: 100%;
  #profile-pic{
    padding:0;
    // margin: 110px;
    width: 220px;
    height: 220px;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url('../assets/a.png');
    transition: all .1s;
    &:hover{
      background-image: url('../assets/e.png');
      transition: all .1s;
    }
    &:active {
      background-image: url('../assets/b.png');
      transition: all .1s;
    }
  }
}
#about-me{
  h2{
    span{
      // display: block;
      padding: 0;
      margin: 0;
      line-height: 2.5rem;
      color: white;
      letter-spacing: .25rem;
      background-color:#0A0624;;
    }
  }
}
.talent{
  h3{
    // text-decoration: underline;
    // width: auto;
    // border: 1px solid #000;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 3rem;
    span{
      // margin-bottom: -9rem;
      background-color: white;
      padding: .5rem 1rem 2rem 1rem;
    }
  }
  .talents{
    font-weight: 600;
    span{

      background-color: white;
    }
    // text-decoration: none;

  }
}

#connect{
  margin-top: 2rem;
}
.or{
  font-style: italic;
  font-size: 1rem;
  color: yellow;
  margin: 0 2rem;
  // margin-bottom: 10rem;
}
.get-at-me {
  margin-top: 30px;
  margin-bottom: 1.3rem;


  a {
    text-decoration: none;
    font-weight: 400;
    color: black;
    &:hover{
      color: yellow;
      border-bottom: 2px solid yellow;
      // text-decoration: line-through;
      // color:white;
      // background-color: rgba(255,255,255, .2);
    }
  }

}

</style>
