
 interface IncrmementPage{
type:"INC"
 }
 interface DecrementPage{
type:"DEC"
 }
 export  type CurrentPageProps=IncrmementPage|DecrementPage
const TvshowsPagereducers = (state:number,action:CurrentPageProps) => {
    switch(action.type){
        case "INC":return state+1
        case "DEC": return  state-1
        default :return state
    }
  
}

export default TvshowsPagereducers