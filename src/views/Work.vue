<template>
  <div class="work">
    <div class="ui-design stylings">
      <div class="ui-design-inner">
        <span>
          UI Design

        </span>
      </div>
    </div>
    <div class="g-design stylings">
      <div class="g-design-inner">
        <span>
          Graphic Design
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
body{
  background: white !important;
}
.work{
  color: white;
  margin-top: 10rem;
  width: 100%;
  text-align: center;
  font-size: 10rem;
  .stylings{
    margin: 3rem 0 6rem 0;
    span{
      &:hover{
        padding: 1rem 3rem;
        color: #AAA9B7;
        background-color: yellow;
        // mix-blend-mode: multiply;
      }
      &.router-link-exact-active {
        color: #FAF800;
      }

    }
  }
}

</style>
