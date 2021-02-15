# YouTube Clone

Home page
![Screen Shot 2021-02-14 at 2 32 50 PM](https://user-images.githubusercontent.com/52799217/107891118-86940580-6ed1-11eb-9e76-5d612f776b9e.png)

Search results
![Screen Shot 2021-02-14 at 2 33 20 PM](https://user-images.githubusercontent.com/52799217/107891133-97447b80-6ed1-11eb-86a0-428db20436c3.png)

Video page
![Screen Shot 2021-02-14 at 2 33 44 PM](https://user-images.githubusercontent.com/52799217/107891142-a4fa0100-6ed1-11eb-8757-66f7845b7129.png)
## Technologies
- JavaScript
- React
- YouTube API
- Semantic-UI
## Getting Started
Download or clone the repo onto your computer. Head into the client directory and run 'npm start' into the terminal.



To see the YouTube API features, you can add your API key into the client/src/util/api_util.js. Otherwise you can use the api toggle in the navigation bar to use static data.

![api-toggle-onoff](https://user-images.githubusercontent.com/52799217/107983465-a9c6bf80-6f7a-11eb-87b7-5853798f080f.gif)

## Highlights
- Responsive design

![resizing](https://user-images.githubusercontent.com/52799217/107891219-f0acaa80-6ed1-11eb-9e34-95d2a65ca51c.gif)

- Embedded video player

![video-playing](https://user-images.githubusercontent.com/52799217/107891101-67957380-6ed1-11eb-9416-7b0b6d1287d8.gif)

- Sidebar

![updated-sidebar](https://user-images.githubusercontent.com/52799217/107891100-66644680-6ed1-11eb-93d3-a6cc342078eb.gif)

Creating a function to help display the links and help reduce repetitive code:

```javascript
const displayLink = whichList => {
    return linkLists[whichList].nameList.map((name, idx) => {
      return <Menu.Item key={idx}
        as={Link} to='/'
        fitted
        >
          <Item.Content className='menu-sidebar-link'>
            <Icon name={linkLists[whichList].iconList[idx]} />
            <Item className='menu-sidebar-link-name'>{name}</Item>
          </Item.Content>
      </Menu.Item>
    });
  };
```

- Api Toggle

![api-toggle](https://user-images.githubusercontent.com/52799217/107891098-6401ec80-6ed1-11eb-99ba-7f571b8766e8.gif)

Created an api toggle to allow users to continue testing out features in case the api fails. Utilizing react context in order to pass the value to it children components from App.js

```javascript
// App.js
const [toggleApi, setToggleApi] = useState(true);

<ApiToggleContext.Provider value={{ toggleApi, setToggleApi }}>
      <Navbar onChange={() => toggleSidebarDisplay()} />
      <Sidebar toggle={displaySidebar} onChange={() => toggleSidebarDisplay()} />
      <Switch>
        <RenderRoute exact path='/' component={Home} />
        <RenderRoute exact path='/results/:search_query' component={Results} />
        <RenderRoute exact path='/video/:id' component={VideoShow} />
        <RenderRoute exact path='/404' component={ErrorShow} />
        <RenderRoute exact path='/page-not-found' component={ErrorShow} />
      </Switch>
    </ApiToggleContext.Provider>
```

```javascript
// components/main/results.js
const { toggleApi } = useContext(ApiToggleContext);

useEffect(() => {
    if(toggleApi){
      fetchSearchResults(10 ,query.slice(9))
        .then(data => setSearchResults(data.items))
        .catch(err => props.history.push('/404'))
    }else{
        setSearchResults(SEARCH_RESULTS);
      }
  }, [toggleApi]);
```

- Error page

![Screen Shot 2021-02-14 at 2 31 10 PM](https://user-images.githubusercontent.com/52799217/107891091-6106fc00-6ed1-11eb-961c-4ccdcc8a6218.png)

Recreated the YouTube error image using svg, accounting for the slight gradient YouTube has.

```svg
<svg width="200px" height="65" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="Gradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#DD2825"/>
      <stop offset="100%" stop-color="#B51218"/>
    </linearGradient>
  </defs>

  <rect x="75" y="10" rx="5" ry="25" width="60" height="45" stroke="#B71418" fill="url(#Gradient)" stroke-width="0"/>
  <circle cx="95" cy="25" r="3" stroke="white" fill="white" />
  <circle cx="115" cy="25" r="3" stroke="white" fill="white" />
  <rect x="-105" y="-65" width="25" height="1" stroke='white' fill='white' stroke-width="1" transform="rotate(165)" />
</svg>
```

## Challenges
- Learning and implementing two technologies that I'm unfamiliar with, YouTube API and Semantic-UI.
- Limited testing due to YouTube API quota caps per day. Still looking into this particular challenge I'm still trying to understand how the quota was hit so quickly.
- Figuring out how to convert the published time into specific increments (ex: 1 second ago, 3 weeks ago, etc).
  - Solution: Getting the difference of the current time and published time in milliseconds. Then checking the difference against each single increment. Then truncating the difference and returning a string, making a check to ensure it's singular if its '1'. Switch case wasn't applicable due to the comparisons I needed to make.
  
## Updates
### 02/14/2020
- Added error page for when api quota cap is met, or if the api has failed.
- Added api toggle to allow the user to switch between static data or api data. Creates a better user experiences and allows user to continue testing features without being blocked by api limitations.
- Added error handling, when api fails it will redirect the user to the 404 error page.
### 02/12/2020
- Add sidebar. Includes the ability to toggle between being displayed and being hidden.
- Removed fetching from home page. Keeping static data as fetching is only required for searching and video display.
### 02/11/2020
- Fix rendering for results and video show page.
  - Changed constants to functions so that the mapping will run when invoked instead of at initial render when the data is undefined.

## Known Issues
### 02/13/2020
- While on search results, searching again doesn't rerender the page with the new query
### 02/12/2020
- Hovering color issue on sidebar YouTube icon
- Navbar styling needs to fixed to be more aligned with the sidebar to prevent visual conflicts
### 02/10/2020
- ~Video show may not render, video API was tested but related video wasn't before quota cap~ (fixed: 02/11/2020)
- Search only accepts clicks on the magnifying glass, should also accept enter key
- Font sizing issue on video show page where the video title slightly overlaps on wrapped text
- Results and related videos do not have a hover options for adding to queue, watch later, or a report button
- Subscriber count and channel icon substituted for video thumbnail due to channel api authorization issue
- App icons on nav bar need to be switched to login button
- Action (like, dislike, etc) icons need bottom border and hover bubble with what it is for
- Related videos do not have links

## Future Features
- ~Sidebar for a more complete experience~ (added: 02/12/2020)
- Comments
- Video description with show more/less toggle
- ~404/Error page~ (added: 02/14/2020)
- Hosting for easier access instead of cloning the repo
- Tests to ensure everything is working as intended
