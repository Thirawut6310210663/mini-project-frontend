
<template>
  <v-container class="mt-10 flex-wrap" >
    <v-row>
      <v-col class="col-md-4" v-for="(card, index) in cards" :key="index" cols="12" md="3">
        <v-card
          class="mx-auto"
          max-width="344"
          @click="goToEditDelete()" 
        >
        <v-img 
          :src="Image(card.categoryPicture)" 
          height="200px"
        >
        </v-img>
        <v-card-title 
          class="text-center d-flex justify-center align-center "
          style="height: 3rem"
        >
          {{ card.categoryName }}
        </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    async CategoryData() {
      try {
        const response = await this.axios.get("http://localhost:8080/category");
        this.cards = response.data;
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    },Image(categoryPicture) {
      return `data:image/jpeg;base64,${categoryPicture}`;
    },
    goToEditDelete() {
      this.$router.push("/EditDelete");
    },
  },
  created() {
    this.CategoryData();
  },

};
</script>

