<template lang="pug">
h2 likes {{ skill }}
    
</template>

<script>
export default {
    name: "Tagline",
    data() {
        return {
            skill: "Web Development"
        }
    }
}
</script>


<style lang="scss">
h2 {
    font-family: Overpass;
    // display: block;
    margin: auto;
    text-align: center;
}

</style>
