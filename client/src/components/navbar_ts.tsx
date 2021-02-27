import { FC, useContext, useState } from "react";
import AppContext, { AppContextProvider } from "../context/AppContext";

interface NavbarProps {
    apiToggle: () => void;
    sidebarToggle: () => void;
}

const Navbar: FC<NavbarProps> = ({ apiToggle, sidebarToggle }: NavbarProps) => {
    const [query, setQuery] = useState('');
    const { toggleApi } = useContext(AppContext);
    
    return <div>
        im a nav bar
    </div>
}

export default Navbar;