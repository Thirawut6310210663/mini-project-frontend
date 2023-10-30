<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="4" class="text-center">
            <v-card class="mx-auto mt-15" style="width: 100%; height: 350px;">
              <v-card-title style="font-size: 25px; color: #33CCCC" >
                เข้าสู่ระบบ
              </v-card-title>
              <v-card-text class="mx-auto mt-5">
                <v-form ref="loginForm" v-model="valid" lazy-validation>
                  <v-text-field
                v-model="username"
                :rules="usernameRules"
                label="username"
                placeholder="username"
                required
                outlined
              ></v-text-field>

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="password"
                placeholder="password"
                type="password"
                required
                outlined
              ></v-text-field>
                  <v-row justify="center" class="mx-auto mt-2">
                    <v-col cols="12" sm="8" md="6" class="text-center">
                      <v-btn
                        :disabled="!valid"
                        color="#33CCCC"
                        @click="goToHomeAdmin()"
                        style="text-align: center; color: #FFFFFF;"
                      >
                        เข้าสู่ระบบ
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    username: "",
    nameRules: [
      (v) => !!v || "กรุณากรอกชื่อผู้ใช้งาน",
      (v) => (v && v.length <= 20) || "กรุณากรอกชื่อผู้ใช้งานห้ามเกิน 20 ตัวอักษร",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "กรุณากรอกรหัสผ่าน"
      ]
  }),
  methods: {
    async goToHomeAdmin() {
      if (this.$refs.loginForm.validate(true)) {
        const Data = {
          adminUsername: this.username,
          adminPassword: this.password,
        };

        try {
          const response = await this.axios.post(
            "http://localhost:8080/admin/login",
            Data
          );
          if (response.status === 200) {
              this.$router.push("/HomeAdmin");
            // window.product.reload();
          } else if (response.status === 401) {
            console.error("Failed login information.");
          } else {
            console.error("Internal server error.");
          }
        } catch (error) {
          alert("Incorrect password. Please try again.");
          console.error(error);
        }
      }
    }
  }
}
</script>
