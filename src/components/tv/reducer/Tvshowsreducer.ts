
export interface TvshowsReducers {
  endpoint: string;
}

const Tvshowsreducer = (state:string,action:TvshowsReducers):string => {
  return action.endpoint
}

export default Tvshowsreducer