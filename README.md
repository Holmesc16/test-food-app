**Introduction**

The intent of this coding test is to assess your ability to work with requirements commonly seen at Bottle Rocket. We want you to display your knowledge of software design patterns, HTML-CSS-JavaScript best practices, responsive web design, and working with art comps from our creative team.

We do not specify a particular framework or set of libraries to use for this project as we feel that could create an uneven playing field for our candidates depending on what they have the most experience with. There are a set of web technologies that are core to our solutions so we would like for your implementation to make use of any of the following technologies:

-   Angular or React
-   Redux
-   ES6, Babel
-   Typsecript
-   Grunt, Gulp, Webpack

**Requirements**

1.  Get JSON Feed

1.  <https://s3.amazonaws.com/br-codingexams/restaurants.json>

3.  Responsive Design

1.  At Bottle Rocket, we work in a mobile-first RWD process. The comps you've been given only show mobile phone in portrait orientation. Translate these comps to a 2-column view for popular tablet resolutions and higher.
2.  Art assets have been provided for you from our creative team. Please use these where applicable, noting that you might not use them all.

2.  Translate iOS Comp

1.  One way we stay agile at Bottle Rocket is by reusing as many creative comps as possible across multiple technical disciplines. We work closely with our strategy and creative teams to determine deltas or changes between the comp for one discipline and the other. Often these changes are documented in writing on our project whiteboards. In this exercise, you are given comps for iPhone, implement the following changes in your web app:

1.  Remove the global footer
2.  The "Detail View" should exist on the same page as the "List View" and should slide out with a drawer animation.
3.  Ignore the "Web.png" comp file

2.  Map View

1.  Implement a map using an SDK on the Detail View to center the map on the latitude and longitude for the selected store. (Google and Mapbox are both good options. Please include your API key in the solution. We will not reuse it outside grading your submission)
2.  Feel free to enhance the Map as you see fit. Suggestions include: Placing markers on the map for the stores in the JSON feed; Creating Info Labels with store details that display when activating a marker; Style the map to match some of the other creative styles in the app; anything else you can dream up!

2.  Browser Support

1.  Not everyone has personal access to Apple, Microsoft, and Google hardware and software. For this reason, we ask that you pick one mobile and one desktop operating system and browser combination to fully support. For example, if you own a Mac and an iPhone, you can choose OSX Chrome, and iOS Safari. If you own a PC and an Android phone, you can support Firefox for Windows and Android Chrome. Ideally, we're looking for feature parity and bug-free code on all platforms, but know that you won't be penalized for a bug on a device you don't have access to. Bottle Rocket will simply prioritize the platforms you specify over the remainders. If you have any questions or concerns, don't hesitate to ask us!