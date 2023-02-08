<<<<<<< HEAD
export const globalStates={
    movie1: '',
    movie2:''
}
=======
import { createContext } from "react"

export const globalState = {
    hoverStatei: 505642,
    hoverState: 505642
}

export const GlobalContext = createContext(globalState.hoverStatei)