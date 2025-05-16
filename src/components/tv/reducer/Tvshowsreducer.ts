
export interface TvshowsreducerProps {
  endpoint: string;
}

const Tvshowsreducer = (state:string,action:TvshowsreducerProps):string => {

 return action.endpoint
}

export default Tvshowsreducer