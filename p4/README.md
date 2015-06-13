## Website Performance Optimization portfolio project

Page launch:
The pages can be launched from :


Part 1: Optimize PageSpeed Insights score for index.html
Optimized the Critical Rendering Path. Improved the PageSpeed insight score of 90 for both Desktop and Mobile.

Steps taken to check the local pages on Pagespeed Insights:
1) Used a local server by running this command from the terminal  $> python -m SimpleHTTPServer 8080
2) To make the local Server accessible remotely, I downloaded and installed ngrok. From the terminal, use this command ngrok 8080
3) Copied the public URL ngrok gives you and ran it through PageSpeed Insights

Below are the optimizations i performed to achieve the PageSpeed insight score of 90 for both Desktop and Mobile.
1) Inlined only the critical CSS in index.html to avoid any blocking CSS requests needed for the initial render of the page. The less important (minfied)styles are loaded from the external file just before the close of the body tag. Script calls were made asynchronous to defer loading and avoid it from being render blocking.
2) For the Build automation , Gulp was used. Minified JS, CSS and performed Image Optimisations.
   Installed all these plugins to perform the tasks and these build tasks were added to the gulp.js file:
   - gulp-uglify to minify JS
   - gulp-image-optimization to optimise the images
   - gulp-minify-css to minify the CSS
   - gulp-minify-html to minify the HTML
3) Inlined only the needed Google WebFonts in index.html to avoid an extra network request when you embed the external hot link to Google fonts.
4) Images were resized automatically using the gulp tool that led to saving a lot of KBs, helping in faster rendering of the pages.
    profilepic.jpg (saved 9.6 kB)
    mobilewebdev.jpg (saved 26.9 kB)
    cam_be_like.jpg (saved 34.7 kB)
    pizzeria.jpg (saved 365.2 kB)
    pizza.png (saved 420 B)
    2048.png (saved 27.4 kB)

Part 2: Optimize Frames per Second in pizza.html
Used Chrome developer tools to analyze the timeline to track the Frames per second(FPS) when the page is scrolled.
Used emulators to test that the FPS is 60Fps. in mobile devices as well.

Below are the optimizations i performed to the 60FPS in pizza.html
1) In main.js reduced the scripting time by not using querySelectorAll() and instead using documents.getElementsByClassName(). The former is the slowest method to aceess DOM elements
2) Moved the phase calculation outside the loop since it will always only create 5 unique phases and we dont have to do it for every pizza element.
3) Reduced the layout time by using CSS3 Hardware acceleration (translateX) for the animation of the background pizza images.
4) Optimized the function updatePositions() to calculate values outside the loop.(for the ones that don't require recalculation for every pizza element).
5) When the page is loaded , optimised the calculation of the number of pizzas that need to be rendered at a given point of time and now it animates only those that are visible in the viewport.

Part 3:


Project File organisation:
For Part 1:
  The minified version(build version) can be found in the root folder.
  The source(dev. version) files can be found under the src folder from the root.(src/index.html,src/css/style.css,src/css/print.css)
  gulp.js is in the root directory
  The compressed images(build version) (2048.png, cam_be_like.jpg, mobilewebdev.jpg, profilepic.jpg) reside under the images folder in the root directory(images/)
  The original images(uncompressed version) reside under the src/img folder from the root.(src/img)
For Part 2, Part 3:
  All files are under the src directory from the root folder. (src/views/pizza.html and src/views/js/main.js)

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>


Resources:
Reduce reflows
Single recalculate style followed by a Layout (is ideal) -> This optimizes our code as much as we can to avoid the reflows. This can help achieve target of 60fps a lot closer.
chrome://flags
Enable google developer tools
http://gent.ilcore.com/2011/03/how-not-to-trigger-layout-in-webkit.html
