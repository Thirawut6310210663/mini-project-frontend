<template>
    <v-container>
        <!-- <v-row>
            <v-col cols="1" v-for="i in 12" :key="i">
                {{ 'col -' + i }}
            </v-col>
        </v-row> -->
        <v-row>
            <v-col cols="12">
                <LoginForm/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import LoginForm from '../components/Login.vue'
export default {
    components: {
        LoginForm
    },
    goToHomeAdmin() {
      this.$router.push('/HomeAdmin')
    }
}
</script>

<style>

</style>