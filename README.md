# React-js-FootBar
This is a way of creating navigation from either a next page, a previous page or you can choose to go both
  
# User story
As a user 

I want to be able to click on a button that takes to the next page, and from that page I want to either go back to the previous page are go to the next page.


# Requirements

Have a button that goes to the next page,
Have a button that goes to the previous page,
Have a button that can do both.

# Technical Notes
written in Javascript (React-JS).

  
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
