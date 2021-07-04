<template>
  <div class="cnotainer-fulid px-4">
    <h1>ฟอร์มเพิ่มข้อมูล</h1>

    <div class="row">
      <div class="col-xl-6 col-md-6">
        <div class="mb-3">
          <form @submit.prevent="onSubmit">
            <label for="exampleFormControlInput1" class="form-label"
              >ชื่อประเภทสินค้า</label
            >
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="name"
              placeholder="ชื่อประเภทสินค้า"
            />

            <button type="submit" class="btn btn-primary">บันทึก</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "CategoryAdd",
  setup() {
    const name = ref("");
    const router = useRouter();

    const onSubmit = async () => {
      const resoponse = await axios.post(
        "https://api.codingthailand.com/api/category",
        {
          name: name.value,
        }
      );
      alert(resoponse.data.message);
      router.replace('/category');
    };

    return { name, onSubmit };
  },
};
</script>

<style></style>
