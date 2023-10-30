<template>
  <div>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Manage Product</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                เพิ่ม
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="2" sm="12" md="12">
                      <input
                        type="file"   
                        v-on:change="handleImageUpload" 
                      > </input>
                    </v-col>

                    <v-col cols="1" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.productName"
                        label="Name"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.productDescription"
                        label="Description"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="close"> Cancel </v-btn>
                <v-btn color="blue darken-1" text @click="addProduct">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >คุณแน่ใจหรือว่าต้องการลบรายการนี้?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="red darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.productPicture="{ item }">
        <img
          :src="'data:image/jpeg;base64,' + item.productPicture"
          alt="Image"
          style="max-width: 200px"
        />
      </template>

      <template v-slot:item.actions="{ item }">
         <v-btn small outlined @click="openDialog('edit', item)" color="blue">
      <v-icon>
        mdi-pencil
      </v-icon>
      </v-btn>
      <v-btn small outlined @click="deleteItem(item)" color="red" class="ml-2">
      <v-icon>
        mdi-delete
      </v-icon>
      </v-btn>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>


<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "productName",
      },
      {
        text: "Picture",
        sortable: false,
        value: "productPicture",
      },
      {
        text: "Description",
        value: "productDescription",
      },
      {
        text: "actions",
        align: "start",
        sortable: false,
        value: "actions",
      },
    ],

    desserts: [],
    editedIndex: -1,

    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),
  scopedSlots: {
    picture: (item) => {
      return this.$createElement("img", {
        attrs: {
          src: item.picture, // ใช้ URL รูปภาพจากข้อมูล
          alt: item.name, // ใช้ชื่อเป็นคำอธิบายรูปภาพ
          style: "max-width: 100px;", // กำหนดขนาดสูงสุดของรูปภาพ
        },
      });
    },
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Product" : "Edit Product";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      this.desserts = [];
      try {
        var data = await this.axios.get("http://localhost:8080/product");
        console.log("data product ====>", data);
        this.desserts = data.data;
      } catch (error) {}
    },

    computed: {
      formTitle() {
        return this.editedIndex === -1 ? "New Product" : "Edit Product";
      },
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    

    async deleteItem(item) {
      // this.editedIndex = this.desserts.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      // this.dialogDelete = true;

      try {
        var data = await this.axios.delete(
          `http://localhost:8080/product/${item.productId}`
        );

        if (data.status === 200) {
          this.initialize();
          alert("ลบสำเร็จ");
        }
      } catch (error) {}
    },
    async addProduct() {
      try {
        // Create a new FormData object
        const formData = new FormData();

        // Append the fields to the FormData object
        const data = {
          productName: this.editedItem.productName,
          productDescription: this.editedItem.productDescription,
        };
        formData.append("body", JSON.stringify(data));
        formData.append("photo", this.editedItem.selectedImage);

        const response = await this.axios.post(
          "http://localhost:8080/product",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
            },
          }
        );

        if (response.status === 201) {
          // await this.initialize();
          alert("เพิ่มสำเร็จ");
          window.product.reload()
        }
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
    handleImageUpload(event) {
      const selectedFile = event.target.files[0]; // Get the selected file
      // You can now do something with the selected image file, for example, send it to the server.
      // Here, we'll just store the selected file in a data property for reference.
      this.editedItem.selectedImage = selectedFile;
    },
  },
};
</script>