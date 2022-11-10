WEBPACK PROJECT PATTERN
=========================
## INFO

- **Author: restlesswizard;**
- **Last update: 10 October 2022;**
- **Webpack version: 5.74.0;**
- **Purpose: Learn how to use Webpack and make working pattern for my future projects.**

## QUICK START
1. Install Node.js (in case if you don't have it, of course)
2. Clone this repository

		git clone https://github.com/restlesswizard/webpack-project.git

3. Now you have 4 files and 2 folders (marked with "/") cloned from this repository:

	- node_modules/
	- src/
	- package-lock.json
	- package.json
	- readme.md
	- webpack.config.js

4. Go to terminal, run this command:

		npm run build

5. After this, new folder "dist" will appear in your working directory. It will contain:
	- some **.js** file, containing whole project js code
	- **index.html** - main page
	- **Roboto-Regular.ttf** - custom font file
	- **webpack_logo.png** - webpack logo image

6. View index.html file from "dist" folder. It will show this pattern initial markup. If you want to change anything in this project (html, css, js, whatever) and apply changes, you have to go to "src" folder. There you will find:
	- **index.html** - file, that you have to edit if you want to do something
	- **index.js** - JS entry point, here you should write imports for js modules, styles, images, etc.
	-  **assets/** - folder with images
	- **css/** - folder with common .css files
	- **fonts/** - folder with custom fonts
	- **js/** - folder with JS modules


