<template>
    <div>
      <h2>Register View</h2>
      <form @submit.prevent="register">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async register() {
        // ทำตราบางอย่างเมื่อผู้ใช้กดลงทะเบียน
        console.log('Registered:', this.username);
  
        // เชื่อมต่อกับ backend Spring Boot เพื่อทำการลงทะเบียน
        const userData = {
          username: this.username,
          password: this.password,
        };
  
        try {
          const response = await this.axios.post(
            'http://localhost:8080/api/register',
            userData
          );
  
          if (response.status === 201) {
            // ลงทะเบียนสำเร็จ
            console.log('Registration successful');
          } else {
            // ลงทะเบียนไม่สำเร็จ
            console.error('Registration failed:', response.data);
          }
        } catch (error) {
          // ดักจับ error ที่เกิดขึ้น
          console.error('Error during registration:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* สไตล์ CSS ที่จำกัดให้กับ RegisterView.vue เท่านั้น */
  </style>
  