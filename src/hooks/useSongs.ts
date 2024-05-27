import { ref } from "vue";
import { collection, query, onSnapshot, addDoc, doc, getDoc, deleteDoc } from "firebase/firestore";
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
  const uiState = ref<{ isLoading: boolean;  isAdded: boolean;  isAdding: boolean }>({
    isLoading: true,
    isAdded: false,
    isAdding: false,
  })

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
      uiState.value.isLoading = false;
    });

    return { unsubscribe};
  };

  const deleteSong = async (id: string) => {
   
      await deleteDoc(doc(db, "songs", id));

    

    
  }

  const addSongsToFavorite = async (songId: string) => {
    uiState.value.isAdding = true
    try {
      
      const favSong = favouriteSongs.find((song) => song.id === songId);
      if(favSong){
             
        await addDoc(collection(db, "songs"), {
          title: favSong?.title,
          artist: favSong?.artist,
          year: favSong?.year
        });

        uiState.value.isAdded = true
        const timer = setTimeout(() => {
          uiState.value.isAdded = false
          clearTimeout(timer)
        }, 3000)
      }
   

      
            
    
    
    }
    catch(err) {
        console.log(err);
    }
    finally {
      uiState.value.isAdding = false
    }
  };

  return {
    getSongs,
    deleteSong,
    addSongsToFavorite,
    uiState,
    songs,
  };
};
