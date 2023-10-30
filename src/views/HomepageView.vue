<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <Homepage/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    components: {
        Homepage: () => import('../components/Homepage.vue')
    },
    goToProduct() {
      this.$router.push('/product')
    }
    
}
</script>

<style>

</style>