<script setup lang="ts">
import { useSongs } from "../hooks/useSongs";
import { onMounted } from "vue";

const { getSongs, songs, uiState } = useSongs();
const emits = defineEmits<{
  (event: "delete-from-favourites", id: string): void;
}>();
onMounted(async () => {
  await getSongs();
});
</script>

<template>
  <v-card height="250px" width="100%" class="mx-auto pa-2 overflow-y-auto">
    <v-list v-if="!uiState.isLoading">
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

        <template v-slot:append>
          <v-icon
            @click="emits('delete-from-favourites', song.id)"
            icon="mdi-close"
          ></v-icon>
        </template>

        <v-list-item-title v-text="song.title"></v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list
      :style="{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }"
      v-else
    >
      <h2>Loading...</h2>
    </v-list>
  </v-card>
</template>

<style lang="scss" scoped></style>
