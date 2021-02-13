import { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { RenderRoute } from "./util/general_util";

// components
import Navbar from "./components/navbar";
import Sidebar from "./components/menu_sidebar";
import Home from "./components/main/home";
import Results from "./components/main/results";
import VideoShow from "./components/main/video_show";

function App() {
  const [displaySidebar, setDisplaySidebar] = useState(false);

  const toggleSidebarDisplay = () => {
    setDisplaySidebar(!displaySidebar);
    alert(displaySidebar)
  };

  useEffect(() => {
    // console.log(displaySidebar)
  });

  return <div id='app'>
    <Navbar onChange={() => toggleSidebarDisplay()} />
    {/* help keep sidebar on left */}
    <div className='display-flex'>
      <Sidebar />
      <Switch>
        <RenderRoute exact path='/' component={Home} />
        <RenderRoute exact path='/results/:search_query' component={Results} />
        <RenderRoute exact path='/video/:id' component={VideoShow} />
      </Switch>
    </div>
  </div>
}

export default App;