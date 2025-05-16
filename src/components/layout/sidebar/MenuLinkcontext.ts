import React, { Dispatch } from "react"

interface Props{
    activetablink:string
    linkDispatch:Dispatch<string>
}

const MenuLinkcontext =   React.createContext<Props>({} as Props)
export default MenuLinkcontext