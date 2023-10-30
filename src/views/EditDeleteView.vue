<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <EditDelete/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    components: {
        EditDelete: () => import('../components/EditDelete.vue')
    },
}
</script>

<style>

</style>