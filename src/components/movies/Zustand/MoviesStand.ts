
import { create } from 'zustand'
 interface Props{
    genre:number|null,
    sortedby:string|null
    updateGenre:(data:number)=>void
    updateSortedby:(data:string)=>void
 }


const MoviesStand =   create<Props>(set=>({
    genre:null,
    sortedby:null,
    updateGenre:(data)=>set(()=>({genre:data})) ,
    updateSortedby:(data)=>set(()=>({sortedby:data}))
}))

export default MoviesStand