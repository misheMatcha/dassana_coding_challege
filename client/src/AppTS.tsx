import React, { FC, useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { RenderRoute } from './util/general_util';
import { AppContextProvider } from './context/AppContext';

import Home from './components/main/home';
import NavbarTS from './components/navbar_ts';
import Sidebar from './components/menu_sidebar';
import Navbar from './components/navbar';

// rename file after converstion to typescript

const App: FC = () => {
    const [toggleApi, setToggleApi] = useState(true);
    const [toggleSidebar, setToggleSidebar] = useState(false);

    const appContextValues = {
        toggleApi,
        setToggleApi,
        toggleSidebar,
        setToggleSidebar
    }

    useEffect(() => {
        // console.log(toggleApi)
    })

    // pass an onclick as it reduces repetitive code
    const apiOnClick = () => {
        setToggleApi(!toggleApi)
    }

    const sidebarOnClick = () => {
        setToggleSidebar(!toggleSidebar)
    }

    return <div>
        <AppContextProvider value={appContextValues}>
            <Navbar />
            <NavbarTS apiToggle={apiOnClick} sidebarToggle={sidebarOnClick} />
            {/* <Sidebar /> */}
            <Switch>
                <RenderRoute exact path="/" component={Home} />
            </Switch>
        </AppContextProvider>
    </div>
}

export default App;