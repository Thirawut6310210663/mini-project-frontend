<template>
  
  <v-app style="color: #294949">
    <v-app-bar app color="primary" light>
      <div class="d-flex align-center">
       

        <v-btn text @click="goToHome()"> Home Hub Marketplace </v-btn>
      </div>

      <v-spacer></v-spacer>

      

      <v-btn text @click="goToHome()"> Home</v-btn>

      <v-btn text @click="gotoHomepage()"> marketplace</v-btn>

      <v-btn text @click="goToManage()"> manage Product </v-btn>

      <v-btn text @click="goToLogin()"> Login </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    
  
  </v-app>
  
</template>

<script>
export default {
  name: "App",

  data: () => ({}),
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    goToManage() {
      this.$router.push("/EditDelete");
      // this.$router.push({path: })
    },
    goToRegister() {
      this.$router.push("/Register");
    },
    gotoHomepage() {
      this.$router.push("/Homepage");
    },
    gotoAdd() {
      this.$router.push("/add");
    },
  },
};
</script>
