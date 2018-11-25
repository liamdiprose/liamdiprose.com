<template lang="pug">
#titlebox
  svg#background(viewBox="0 0 6.5 10" preserveAspectRatio="xMinYMax meet")
    polygon(points="0,0 0,6.5 23,0")
  .title
    h1
      span.firstname Liam
      span.lastname Diprose
</template>
 
<script>
export default {
  name: 'Title',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.title {
  z-index: 1;
  position: relative;

  font: italic bold 26pt/150% "Overpass";

  margin-bottom: 0;
  max-width: 300pt;
  margin: auto;

  .firstname {
    color: white;
  }

  .lastname {
    margin-top: 0;
    margin-left: 90pt;
    display: inline-block;
  }
}

.title::before {
  content: "";
  display: block;
  height: calc(100vw / 4.4 - 70px);
  max-height: 20vh;
}

#titlebox {
  display: block;
}

#background {
  position: absolute;
  overflow-x: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60vw;
  // min-width: 350px;
  min-height: 185px;
  max-height: 100vh;
  z-index: 0;
}
</style>
