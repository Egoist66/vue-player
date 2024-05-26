<script setup lang="ts">
import PlayerList from "./components/PlayerList.vue";
import Player from "./components/Player.vue";
import { useSongs } from "./hooks/useSongs";

const { addSongsToFavorite } = useSongs();
</script>

<template>
  <main>
    <div class="container">
      <div class="controls">
        <Player
          @add-to-favourites="(id: string) => addSongsToFavorite(id)"
          class="player"
        />
        <PlayerList class="player-list" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.controls {
  width: 100%;
}
</style>
