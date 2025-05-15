
export interface TvshowsreducerProps {
  endpoint: string;
}

const Tvshowsreducer = (state:string,action:TvshowsreducerProps):string => {
 console.log("state of reducer", action.endpoint)
 return action.endpoint
}

export default Tvshowsreducer