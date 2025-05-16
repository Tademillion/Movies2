
 
  import {create} from "zustand"
 interface ZustandProps{
    page:number
    Increment:()=>void
    Decrement:()=>void
 }

const TvshowsPagestand = create<ZustandProps>(set=>({
page:1,
Decrement:()=>set(page=>({page:page.page-1})),
Increment:()=>set(page=>({page:page.page+1})) 
}))

export default TvshowsPagestand