import { createContext } from "react";

interface AppContextProps {
    toggleApi: boolean;
    toggleSidebar: boolean;
    searchQuery: string;
}

const AppContext = createContext<AppContextProps>({
    toggleApi: true,
    toggleSidebar: false,
    searchQuery: ''
})

export const AppContextProvider = AppContext.Provider;
export default AppContext;