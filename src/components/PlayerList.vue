<script setup lang="ts">
import { useSongs } from "../hooks/useSongs";
import { onMounted } from "vue";

const { getSongs, songs } = useSongs();

onMounted(async () => {
  await getSongs();
});
</script>

<template>
  <v-card width="100%" class="mx-auto pa-2">
    <v-list>
      <v-list-subheader>The favourite songs</v-list-subheader>

      <v-list-item
        v-for="song in songs"
        :key="song.id"
        :value="song"
        color="primary"
        rounded="shaped"
      >
        <template v-slot:prepend>
          <v-icon icon="mdi-headphones"></v-icon>
        </template>

        <v-list-item-title v-text="song.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style lang="scss" scoped></style>
