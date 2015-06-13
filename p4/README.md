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

