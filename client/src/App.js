import { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { RenderRoute } from "./util/general_util";

// components
import Navbar from "./components/navbar";
import Sidebar from "./components/menu_sidebar";
import Home from "./components/main/home";
import Results from "./components/main/results";
import VideoShow from "./components/main/video_show";
import Error404 from "./components/main/error_404";

// context
import { ApiToggleContext } from "./components/main/api_toggle_context";

function App() {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const [toggleApi, setToggleApi] = useState(true);

  const toggleSidebarDisplay = () => {
    setDisplaySidebar(!displaySidebar);
  };

  return <div id='app'>
    <ApiToggleContext.Provider value={{ toggleApi, setToggleApi }}>
      <Navbar onChange={() => toggleSidebarDisplay()} />
      <Sidebar toggle={displaySidebar} onChange={() => toggleSidebarDisplay()} />
      <Switch>
        <RenderRoute exact path='/' component={Home} />
        <RenderRoute exact path='/results/:search_query' component={Results} />
        <RenderRoute exact path='/video/:id' component={VideoShow} />
        <RenderRoute exact path='/404' component={Error404} />
      </Switch>
    </ApiToggleContext.Provider>
  </div>
}

export default App;