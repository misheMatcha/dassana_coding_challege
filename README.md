# YouTube Clone

Home page
![Screen Shot 2021-02-10 at 10 08 50 PM](https://user-images.githubusercontent.com/52799217/107607117-28270880-6bed-11eb-8b54-025b287fcb64.png)

Search results
![Screen Shot 2021-02-10 at 10 10 36 PM](https://user-images.githubusercontent.com/52799217/107607119-29f0cc00-6bed-11eb-8c56-5819b9163186.png)

Video page
![Screen Shot 2021-02-10 at 10 12 09 PM](https://user-images.githubusercontent.com/52799217/107607120-2a896280-6bed-11eb-8e86-cb1733f31e48.png)
## Technologies
- JavaScript
- React
- YouTube API
- Semantic-UI
## Getting Started
Download or clone the repo onto your computer. Head into the client directory and run 'npm start' into the terminal.

To see the YouTube API features, you can add your API key into the util/api_util.js. Otherwise home, results, and video show will have commented out variables that use a static list for testing, which you can comment back in.

Ex:

![Screen Shot 2021-02-10 at 10 19 12 PM](https://user-images.githubusercontent.com/52799217/107607401-037f6080-6bee-11eb-8848-3ebb90a06049.png)


## Highlights
- Response design

![yt_resize](https://user-images.githubusercontent.com/52799217/107609590-3d536580-6bf4-11eb-8abc-e01cae8fd33c.gif)

- Embedded video player

![yt_resize1](https://user-images.githubusercontent.com/52799217/107609586-388eb180-6bf4-11eb-944a-541d10fb582d.gif)

## Challenges
- Learning and implementing two technologies that I'm unfamiliar with, YouTube API and Semantic-UI.
- Limited testing due to YouTube API quota caps per day. Still looking into this particular challenge I'm still trying to understand how the quota was hit so quickly.
- Figuring out how to convert the published time into specific increments (ex: 1 second ago, 3 weeks ago, etc).
  - Solution: Getting the difference of the current time and published time in milliseconds. Then checking the difference against each single increment. Then truncating the difference and returning a string, making a check to ensure it's singular if its '1'. Switch case wasn't applicable due to the comparisons I needed to make.
  
## Updates
# 02/11/2020
- Fix rendering for results and video show page.
  - Changed constants to functions so that the mapping will run when invoked instead of at initial render when the data is undefined.

## Known Issues
# 02/10/2020
- Video show may not render, video API was tested but related video wasn't before quota cap
- Search only accepts clicks on the magnifying glass, should also accept enter key
- Font sizing issue on video show page where the video title slightly overlaps on wrapped text
- Results and related videos do not have a hover options for adding to queue, watch later, or a report button
- Subscriber count and channel icon substituted for video thumbnail due to channel api authorization issue
- App icons on nav bar need to be switched to login button
- Action (like, dislike, etc) icons need bottom border and hover bubble with what it is for
- Related videos do not have links

## Future Features
- Sidebar for a more complete experience
- Comments
- Video description with show more/less toggle
