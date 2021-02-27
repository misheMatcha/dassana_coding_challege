import React, { FC, useState } from 'react';
import { RenderRoute } from './util/general_util';

import Home from './components/main/home';
import { AppContextProvider } from './context/AppContext';

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

    return <div>
        <AppContextProvider value={appContextValues}>
            <RenderRoute exact path="/" component={Home} />
        </AppContextProvider>
    </div>
}

export default App;