# Travel Guide Website - The Wanderlust 101

This project is a interactive travel guide website consist all destination around the world. It consists of 5 section: navbar, photo slider, destination cards, about, and website footer.

## Getting Started

This project includes 3 files and 1 photo of destinations folder.
* index.html -> as entry point to access the website. Recommendation browser by either Safari, Google Chrome, or Mozilla Firefox
* interactive.js -> local JavaScript for interactive such as: searchbox, search from dropdown, calculation of total price, etc.
* style.css -> local CSS for web design
* destination -> folder of destination photos displayed both as slider and card & modal box.

## Deployment

Run index.html using recommended browser. As mentioned above, website consist of 5 section:
* Navbar
using class = "navbar fixed-top" hence navbar header remain stay while the website is scrolled down. This navbar is responsive to small website width. The navbar item menu contained by a toogler on the left.
4 menu option including:
- Home: onclick will direct it to the top of the page including the slider.
- About: onclick will direct it to about section.
- Search: when typed (onkeyup), destination card will be displayed based on search result.
- Total Price: when button Add to Wishlist clicked, it will automatically calculate and display the total price.

* Slider
Displaying 5 destinations, written in image source, that will transitioning for 0.5 second and the slides change every 5 seconds, with height 350, that can be changed in interactive.js as local JS.

* Destination
Featuring 1 dropdown button with each coutry as option that will show destination based on chosen country when clicked.
In default option, resulting all 5 destinations in form of cards.
Each cards provide: Title, destination image, short description, price, and see more & add to wishlist button. To view full description, button see more can be clicked and will show modal box regarding the chosen destination. Add to wishlist button will be calculated the chosen destination and total price will be displayed on right side of navbar.
* * note that modal box display is overlap between 2 framework used, Bootstrap 4 and Materialized CSS, hence the display looked different.

* About
Contain about the provider information and description, which is The Wanderlust 101.
Form is provided as well if there's any further question or feedback, consist of name, email, phone, and message.

* Footer
Is a provider copyright and years of deployment.

## Built With

* [Bootstrap 4](https://getbootstrap.com/docs/4.5/getting-started/introduction/) - The web framework used
* [Materialized CSS](https://materializecss.com/getting-started.html) - web design
* [Font Awesome](https://fontawesome.com/icons) - for icons

## Authors

* **Arleen Natalie** - [GitHub](https://github.com/arleenatalie)
Also guided by Hacktiv8's mentors.

## Acknowledgments

* Kindly use one framework only, as seen above that more than 1 framework may overlap (on this project occurs on modal box). If so, further reconstruction of index.html is needed in order to keep the proper design of website.

