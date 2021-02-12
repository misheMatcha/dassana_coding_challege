import { Switch } from "react-router-dom";
import { RenderRoute } from "./util/general_util";

// components
import Navbar from "./components/navbar";
import Home from "./components/main/home";
import Results from "./components/main/results";
import VideoShow from "./components/main/video_show";

function App() {
  return <div id='app'>
    <Navbar />
    <Switch>
      <RenderRoute exact path='/' component={Home} />
      <RenderRoute exact path='/results/:search_query' component={Results} />
      <RenderRoute exact path='/video/:id' component={VideoShow} />
    </Switch>
  </div>
}

export default App;