<template lang="pug">
    p List of projects
</template>

<script>
export default {
    name: 'ProjectsView',
    data () {
        return {
            name: this.$route.params.projectname
        }
    }
}
</script>

