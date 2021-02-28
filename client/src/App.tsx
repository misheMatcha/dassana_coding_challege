import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { RenderRoute } from './util/general_util';
import { AppContextProvider } from './context/AppContext';

import Home from './components/main/home';
import Sidebar from './components/menu_sidebar';
import Navbar from './components/navbar';
import Results from './components/main/results';
import VideoShow from './components/main/video_show';
import ErrorShow from './components/main/error_show';

interface Props extends RouteComponentProps {}

const App: FC<Props> = ({ history }) => {
    const [toggleApi, setToggleApi] = useState(true);
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const appContextValues = {
        toggleApi,
        setToggleApi,
        toggleSidebar,
        setToggleSidebar,
        searchQuery,
        setSearchQuery
    }

    useEffect(() => {
        // console.log(toggleSidebar)
        // console.log(toggleApi)
        // console.log(searchQuery)
    })

    // pass an onclick as it reduces repetitive code
    const toggleOnClick = (toggle: string) => {
        if(toggle === 'api'){
            setToggleApi(!toggleApi)
        }else{
            setToggleSidebar(!toggleSidebar)
        }
    }

    const redirectUrl = (endpoint: string) => {
        history.push(`/results/${endpoint}`)
    }

    const updateSearchQuery = (queryString: string) => {
        setSearchQuery(queryString)
        // console.log(queryString)
        // history.push(`/results/${searchQuery}`)
        redirectUrl(queryString)
    }

    return <div>
        <AppContextProvider value={appContextValues}>
            <Navbar onClickToggle={toggleOnClick} updateQuery={updateSearchQuery} />
            {/* <Sidebar /> */}
            <Switch>
                <RenderRoute exact path='/' component={Home} />
                <RenderRoute exact path='/results/:search_query' component={Results} />
                <RenderRoute exact path='/video/:id' component={VideoShow} />
                <RenderRoute exact path='/404' component={ErrorShow} />
                <RenderRoute exact path='/page-not-found' component={ErrorShow} />
            </Switch>
        </AppContextProvider>
    </div>
}

export default withRouter(App);