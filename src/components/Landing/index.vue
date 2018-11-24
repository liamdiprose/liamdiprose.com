<template lang="pug">
#landing
  Title#title
  Tagline#tagline
</template>
 
<script>
import Title from './Title.vue';
import Tagline from './Tagline.vue';

export default {
  name: 'Landing',
  components: {
    "Title": Title, 
    "Tagline": Tagline
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

#title {
  display: block;
  position: relative;
}

#tagline {
  display: block;
  position: relative;
}

</style>
