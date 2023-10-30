<!-- src/components/Navbar.vue -->

<template>
    <v-app-bar app color="primary" light>
      <div class="d-flex align-center">
        <v-btn text @click="goToHome()"> Category </v-btn>
      </div>
  
      <v-spacer></v-spacer>
  
      <v-btn text @click="goToHome()">หน้าแรก</v-btn>
      <v-btn text @click="gotoHomepage()"> Category </v-btn>
      <v-btn text @click="goToManage()">Manage Product</v-btn>
      <v-btn text @click="goToLogin()">เข้าสู่ระบบ</v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    methods: {
      goToHome() {
        this.$router.push("/");
      },
      goToLogin() {
        this.$router.push("/login");
      },
      goToManage() {
        this.$router.push("/EditDelete");
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
  