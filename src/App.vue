<script setup lang="ts">
import { onMounted } from "vue";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";

onMounted(async () => {
  const q = query(collection(db, "songs"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
});
</script>

<template>
  <main></main>
</template>

<style scoped></style>
