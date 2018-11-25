<template lang="pug">
    section#projects
        h1 Projects - 
            span(v-for="proj in projects") {{ proj }} 
        Overview.project
        Bob.project
</template>

<script>
import Bob from './Bob'
import Overview from './Overview'

export default {
    components: {
        Bob: Bob,
        Overview: Overview
    },

    data () {
        return {
            projects: [
                'Bob',
                'Overview'
            ]
        }
    }

}
</script>

<style lang="scss">
.project {
    background-color: whitesmoke;
}
</style>

