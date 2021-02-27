import { createContext } from "react";

interface AppContextProps {
    toggleApi: boolean;
    toggleSidebar: boolean;
}

const AppContext = createContext<AppContextProps>({
    toggleApi: true,
    toggleSidebar: false
})

export const AppContextProvider = AppContext.Provider;
export default AppContext;