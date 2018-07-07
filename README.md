# React-js-FootBar
This is a way of creating navigation from either a next page, a previous page or both.
  
# User story
As a user 

I want to be able to click on a button that takes me to the next page, and from that page I want to either go back to the previous page or go to the next page.


# Requirements

Either have a button that goes to the next page,
Either have a button that goes to the previous page,
Or have two button that can go to the next or previous page.

# Technical Notes
written in React-JS.
Uses Next.js Link 
Uses React-bootstrap.
Uses Font-Awesome.
  
# Developer Notes
Within these three pages, you are able to navigate between different pages while also having the ability to change wether or not you want a button on a specific side or not.


In order to change to the page you want all you have to do is change the next and/or previous props.
E.G.

```javascript
  <FootBar isPage2 nextPage="page-3" prevPage="index" />
```
You can have:

```javascript
   <FootBar isPage2 prevPage="aboutPage" nextPage="contactUs" />
```


If you want to add more button props for different pages then in the footBarComp.js file create a new const variable, E.G.
```javascript
const isPage4 = props.isPage4;
```
And then you can either copy and paste one already used and just change the if/else if parameters to 'isPage4' or you can create your own if statement but as long as you include the 'isPage4' for the if to check.
E.G.
```javascript
if(isPage4) {
        return <div className="container-fluid border-top border-primary margin-top fixed-bottom back-red bg-white">
                    <Link href={props.nextPage}>
                    <div className="d-inline-block pr-3 float-right">
                        <div className="btn btn-primary btn-circle">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                    </Link>
                </div>;
    }
```
This is only a next page button, to add a previous just copy and paste the div and change the '{props.nextPage}' to '{props.prevPage}'. And also change the 'fa-arrow-right' to 'fa-arrow-left'.

# How to set-up your react environment
**Note:** You can either download the required files from this repository, or you can create your own.  

First you are going to need to have [Node.js](https://nodejs.org) and NPM (which will automatically download along with Node.js).
Once you have Node and npm installed, create folder and then in your terminal (Linux and mac's) or Command prompt (Windows) navigate to that folder and then type ```npm ini``` Where it will walk you through a wizard.  
It will ask you questions like 'Package Name', 'Version', 'Description' etc... You can skip most of this if you want to, but appropriate names should be taken into consideration.  
Once you have finished that step it will display some json like this:
```json
{
  "name": "test",
  "version": "1.0.0",
  "description": "Test",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
This is your package.json file, this file holds various metadata and helps recognise the dependencies needed for the project. (You can find out more about package.json files [here](https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json/).)

After you have created the package.json, open it up in your choice of editor (like [Notepad++](https://notepad-plus-plus.org), or [VS Code](https://code.visualstudio.com/)), and change the scripts so that it runs through next.js:
```json
{
  "name": "test",
  "version": "1.0.0",
  "description": "Test",
  "main": "index.js",
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
  "author": "",
  "license": "ISC"
}
```
After you have done this go back to the terminal/command prompt and type  ```npm i react ```, ```npm i json-loader```, ```npm i bootstrap``` and ```npm i nextjs```, and wait for the dependancies to install.

once that is installed create a page called 'index.js' and copy and paste this:
```javascript
const { createServer } = require('http')
const next = require('next')
const dev = (process.env.NODE_ENV || '').startsWith('dev')
const app = next({ dev })
const handle = app.getRequestHandler()
app.prepare().then(() => {
  createServer(handle).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
```
Then create folder called 'pages', 'components', 'style' and 'static'.  

The 'pages' folder is where the main webpages for the react app will go, so create a new file inside the folder called 'index.js' and a file called '_document.js'. Inside the '_document' copy and paste this:
```javascript
// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Artwork App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Roboto+Slab:400,700" rel="stylesheet" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
```
And inside your 'index.js' file copy and paste this:
```javascript
import React, { Component } from 'react';
import FootBar from '../components/footBarComp';

export default class extends Component {
    render(){
        return(
            <div>
                    <h3>This is the index page</h3>
                    <FootBar isIndex nextPage="gallery" />
                </div>
            </div>
        );
    }
}


```
The 'components' folder is where you will store your react comnponents, open that up and create a file called 'footBarComp.js'.
The 'style' folder is where you will keep your css or scss, we dont have to worry about this at this current time.
The 'static' folder is where you will store stuff like images or sound files.  
  
You have now set up your react js enviornment.
