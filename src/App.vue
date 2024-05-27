<script setup lang="ts">
import PlayerList from "./components/PlayerList.vue";
import Player from "./components/Player.vue";
import { useSongs } from "./hooks/useSongs";

const { addSongsToFavorite, deleteSong, uiState } = useSongs();
</script>

<template>
  <main>
    <div class="container">
      <div class="controls">
        <Player
          :text="uiState.isAdding ? 'Adding...' : 'Add to Favourites'"
          @add-to-favourites="(id: string) => addSongsToFavorite(id)"
          class="player"
        />
        <PlayerList
          @delete-from-favourites="(id: string) => deleteSong(id)"
          class="player-list"
        />

        <v-snackbar
          color="success"
          variant="elevated"
          v-model="uiState.isAdded"
          :timeout="2000"
        >
          Song was added!
        </v-snackbar>
      </div>
    </div>
  </main>
</template>

<style scoped>
.controls {
  width: 100%;
}
</style>
