<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <HomeAdmin/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    components: {
        HomeAdmin: () => import('../components/HomeAdmin.vue')
    },
    goToEditDelete() {
      this.$router.push('/EditDelete')
    }
    
}
</script>

<style>

</style>