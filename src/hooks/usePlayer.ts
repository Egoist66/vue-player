import { ref } from "vue";
import songs from "../data/songs.json";

export type SongsType = Array<SongType>;

interface SongType {
  id: string
  title: string
  artist: string
  year: number
}


export const usePlayer = () => {
    const playerSongs = ref<SongsType>(songs);


    return {
        playerSongs
    }
}