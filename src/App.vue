<script setup lang="ts">
import PlayerList from "./components/PlayerList.vue";
import Player from "./components/Player.vue";
import { useSongs } from "./hooks/useSongs";
import type { Directive } from "vue";

const { addSongsToFavorite, deleteSong, uiState } = useSongs();

const vFocus: Directive = {
  mounted: (el: HTMLInputElement) => el.focus(),
};
</script>

<template>
  <main>
    <div class="container">
      <div class="controls">
        <!--          <input  v-focus type="text">-->
        <Player
          :text="uiState.isAdding ? 'Adding...' : 'Add to Favourites'"
          @add-to-favourites="(id: string) => addSongsToFavorite(id)"
          class="player"
        />
        <PlayerList
          #default="{ songs }"
          @delete-from-favourites="(id: string) => deleteSong(id)"
          class="player-list"
        >
        </PlayerList>
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
