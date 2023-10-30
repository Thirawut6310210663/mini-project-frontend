<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-carousel hide-delimiters>
          <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover height="30000"> <!-- ปรับความสูงตามต้องการ -->
            <!-- เพิ่มโค้ด content ที่ต้องการที่นี่ -->
            <v-row class="fill-height" align="" justify="">
              <v-col>
                <h1 class="display-2 font-weight-bold mb-3">
                  {{ item.title }}
                </h1>
                <br>
              
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col class="mb-16 my-16">
        <h1 class="display-2 font-weight-bold mb-3">
          Home Hub Marketplace
        </h1>
        <br>      
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      { src: 'https://origin.co.th/wp-content/uploads/2021/08/1920x806-7.jpg' },
      { src: 'https://www.sansiri.com/media/noga1fhc/siriplace-ratchaphruek-345-townhouse-cover-banner-desktop-1920x800-01.webp' },
      { src: 'https://www.sansiri.com/media/3t5ngkas/siri-place-prachauthit-90-townhome-cover-banner-desktop-1920x800.jpg' },
      { src: 'https://i.pinimg.com/originals/26/7b/8e/267b8ee6807e651ab260791091e1296e.jpg' },
      { src: 'https://www.thepercentage.asia/wp-content/uploads/2023/04/luxe-villas1.jpg' },
      
    ],
  }),
  created() {
    this.$EventBus.$on('getUsername', this.getUsername)
    this.getUsername()
  },
  methods: {
    getUsername() {
      if (localStorage.getItem('username') !== null) {
        this.username = localStorage.getItem('username')
      } else {
        this.username = 'Vuetify'
      }
    },
    gotoHomepage() {
      this.$router.push("/Homepage");
    },
  },
};
</script>
