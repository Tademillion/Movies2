import { create } from "zustand";


interface Props  {
    isAuthenticated:boolean,
    Login:()=>void;
   logout:()=>void
}

const AuthorizationStand= create<Props>(set=>({
    isAuthenticated:false,
    Login:()=>set(()=>({
        isAuthenticated:true
    })),
    logout:()=>set(()=>({isAuthenticated:false}))
}))

export default AuthorizationStand