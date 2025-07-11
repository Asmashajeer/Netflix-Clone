import { createContext ,useState} from "react";

export const WatchListContext=createContext();

export function WatchListProvider({children}){
    const [watchList,setWatchList]=useState([]);

    const addToWatchList = (movie) => {
        setWatchList((prev) => {
            if (!prev.find((item) => item.id === movie.id)) {
            return [...prev, movie]; // add movie
            }
            return prev; // do nothing if already exists
        });
    };

        const removeFromWatchList = (movieId) => {
           
            setWatchList((prev) => prev.filter((movie) => movie.id !== movieId));
        };



    return(
        <WatchListContext.Provider value={{watchList,setWatchList, addToWatchList, removeFromWatchList }}>
        {children}
        </WatchListContext.Provider>
    );
}
