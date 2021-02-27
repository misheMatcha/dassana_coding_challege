import { FC, useContext, useState } from "react";
import AppContext, { AppContextProvider } from "../context/AppContext";
import { Button } from "./main/button";

interface NavbarProps {
    apiToggle: () => void;
    sidebarToggle: () => void;
}

const Navbar: FC<NavbarProps> = ({ apiToggle, sidebarToggle }: NavbarProps) => {
    const [query, setQuery] = useState('');
    const { toggleApi } = useContext(AppContext);

    return <div>
        <Button onClick={apiToggle}>{toggleApi ? 'API On' : 'API Off'}</Button>
    </div>
}

export default Navbar;