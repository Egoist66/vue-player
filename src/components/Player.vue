<script setup lang="ts">
import { usePlayer } from "../hooks/usePlayer";

const { playerSongs } = usePlayer();
const emits = defineEmits<{
  (event: "add-to-favourites", id: string): void;
}>();

const currentSong =
  playerSongs.value[Math.floor(Math.random() * playerSongs.value.length)];
</script>

<template>
  <v-card v-if="playerSongs.length" class="player" title="Player">
    <v-card-text>
      <v-icon icon="mdi-play"></v-icon>
      {{ currentSong.artist }}, {{ currentSong.title }} - {{ currentSong.year }}
    </v-card-text>
    <v-card-actions>
      <v-btn
        @click="emits('add-to-favourites', currentSong.id)"
        color="primary"
        variant="text"
        >Add to favourites</v-btn
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
