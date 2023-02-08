
import { createContext } from "react"

export const globalState = {
    hoverStatei: 505642,
    hoverState: 505642
}

export const GlobalContext = createContext(globalState.hoverStatei)