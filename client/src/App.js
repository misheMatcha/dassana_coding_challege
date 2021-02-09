import { Switch } from "react-router-dom";
import { RenderRoute } from "./util/general_util";

// components
import Navbar from "./components/navbar";
import Home from "./components/home";
import Results from "./components/results";
import VideoShow from "./components/video_show";

function App() {
  return <div>
    <Navbar />
    <Switch>
      <RenderRoute exact path='/' component={Home} />
      <RenderRoute exact path='/results' component={Results} />
      <RenderRoute exact path='/video/:id' component={VideoShow} />
    </Switch>
  </div>
}

export default App;