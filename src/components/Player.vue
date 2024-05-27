<script setup lang="ts">
import { onMounted } from "vue";
import { usePlayer } from "../hooks/usePlayer";

const { playerSongs, currentSong: current } = usePlayer();
const emits = defineEmits<{
  (event: "add-to-favourites", id: string): void;
  (event: "delete-from-favourites", id: string): void;
}>();

defineProps<{ text: string }>();

const getRandomSong = () => {
  current.value = playerSongs.value[Math.floor(Math.random() * playerSongs.value.length)];
};
onMounted(() => {
  getRandomSong();
});
</script>

<template>
  <v-card v-if="playerSongs.length" class="player" title="Player">
    <div :style="{ paddingLeft: '13px' }">
      <v-btn class="random-button" @click="getRandomSong">Get Random</v-btn>
    </div>
    <v-card-text>
      <v-icon icon="mdi-play"></v-icon>
      {{ current?.artist }}, {{ current?.title }} - {{ current?.year }}
    </v-card-text>
    <v-card-actions>
      <v-btn
        @click="emits('add-to-favourites', current?.id!)"
        color="primary"
        variant="text"
        >{{ text }}</v-btn
      >
    </v-card-actions>
  </v-card>

  <v-card v-else class="player" title="Player">
    <v-card-text> No songs exist </v-card-text>
  </v-card>
</template>

<style scoped>
.player {
  margin-bottom: 20px;
}
</style>
