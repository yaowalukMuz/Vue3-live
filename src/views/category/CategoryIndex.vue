<template>
  <div class="container-fluid px-4">
    <div class="row">
      <div class="col-xl-12 col-md-12">
        <h1>ประเภทสินค้า</h1>

        <router-link to="/category/add" class="btn btn-primary"> เพิ่มข้อมูล   </router-link>


        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
        <div v-if="loading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <table class="table" v-if="categorys.length > 0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">id</th>
              <th scope="col">ชื่อ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in categorys" :key="item.id">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "CategoryIndex",
  setup() {
    const categorys = ref([]);
    const errorMessage = ref("");
    const loading = ref("");

    const getData = async () => {
      try {
        loading.value = true;
        const response = await axios.get(
          "https://api.codingthailand.com/api/category"
        );
        categorys.value = response.data; // [{id:...}]
        console.log(response.data);
      } catch (error) {
        errorMessage.value = "เกิดข้อพลาด กรุณาลองไหน";
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      getData();
    });

    return { categorys, errorMessage, loading };
  },
};
</script>

<style></style>
