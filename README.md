# Segmed Frontend Challenge

GMail for Medical Reports. The React based application will enable customers to search through reports for specific words and also for words which are excluded from the reports.

### Functionality
* Users can search for substrings that exist in the reports and exclude reports that contain specific substrings by starting the substring with **"-"** (Multiple substring queries must be seperated by **" | "**).
* Users can view report information as rows after typing in their query in the search bar and read full reports displayed on another screen.
* On the full report screen, users are able to toggle tags active and unactive using mouse clicks, drop and drag, and keyboard inputs.
* Tags are saved on the front end using redux as a state management tool.
* While on a full report screen with a active query, users are able to press the previous and next buttons to to move along the constrained search reports.

### Color Pallete

| Color               |  Hex                                                               |
| ------------------- | ------------------------------------------------------------------ |
| Slate Grey          | ![#708090](https://via.placeholder.com/10/708090?text=+) `#708090` |
| Lighter Slate Grey  | ![#8d99a6](https://via.placeholder.com/10/8d99a6?text=+) `#8d99a6` |
| Grey                | ![#e6e6e6](https://via.placeholder.com/10/e6e6e6?text=+) `#e6e6e6` |
| Black               | ![#000000](https://via.placeholder.com/10/000000?text=+) `#000000` |
| White               | ![#F7F7F7](https://via.placeholder.com/10/F7F7F7?text=+) `#F7F7F7` |
| Red                 | ![#e7727d](https://via.placeholder.com/10/e7727d?text=+) `#e7727d` |
| Yellow              | ![#ffd451](https://via.placeholder.com/10/ffd451?text=+) `#ffd451` |
| Green               | ![#69c17d](https://via.placeholder.com/10/69c17d?text=+) `#69c17d` |


### Packages/Libraries Used
* **React-Router-Dom**: Used to create routing between search screen report rows and the full report screen.
* **React-Redux**: Used as a global state mangement tool to save the states of the current filter query, reports, and queried report ids.

### Obstacles
The main issue that I faced was getting data using the english texts from https://www.gutenberg.org/. The content of the books had special characters such as single quotes and double quotes which made it troublesome to try to store it as a string. In the end, I encoded the text to have HTML entities as a string and was able to store it in a array of json objects representing reports. I then decoded the string and inserted into the HTML. However, this meant I had to convert each english text into a string and create a corresponding json object manually which takes a considerable amount of time. That is why I only have 10 english texts or reports for my application.

### How to run the project
1. Make sure you have [Node.js](https://nodejs.org/en/) installed on your computer.
2. Clone the repo and save it to desired file directory.
3. Open up the command prompt and cd to the file directory.
4. Type and enter **`npm install`** to install necessary dependencies.
5. After the installation has completed, type and enter **`npm start`** to run the project on your local server.


