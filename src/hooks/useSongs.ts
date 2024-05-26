import { ref } from "vue";
import { collection, query, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

import favouriteSongs from "../data/songs.json";

type SongsData = Array<Song>;

type Song = {
  id: string;
  title: string;
  artist: string;
  year: string;
};

export const useSongs = () => {
  const songs = ref<SongsData>([]);

  const getSongs = async () => {
    const q = query(collection(db, "songs"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tempSongs: Song[] = [];

      querySnapshot.forEach((doc) => {
        tempSongs.push({
          id: doc.id,
          ...doc.data(),
        } as Song);
      });
      songs.value = tempSongs;
    });

    return { unsubscribe, };
  };

  const addSongsToFavorite = async (songId: string) => {
    try {

        const favSong = favouriteSongs.find((song) => song.id === songId);
      
        if(favSong){
            console.log(favSong);
            await addDoc(collection(db, "songs"), {
                title: favSong?.title,
                artist: favSong?.artist,
                year: favSong?.year
            });
        }
            
    
    
    }
    catch(err) {
        console.log(err);
    }
  };

  return {
    getSongs,
    addSongsToFavorite,
    songs,
  };
};
