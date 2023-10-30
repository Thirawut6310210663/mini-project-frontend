<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <Product/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    components: {
        Product: () => import('../components/Product.vue')
    }
}
</script>

<style>

</style>