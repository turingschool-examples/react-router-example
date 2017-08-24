This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# React Router (v.4)

### By the end of this lesson you should...
* Understand what routing is
* Be able to implement React Router
* Know what each of these things are:
    * BrowserRouter
    * Route
    * Link / NavLink
    
### Why Routing?

Up until now you've been creating single page applications that conditionally render based on a boolean in state. Something along the lines of...

```
class SomeComponent extends Component {
  constructor() {
     super()
     this.state = {
         showWelcome: false
     }
  }
  
  render() {
     return (
         { this.state.showWelcome && <Welcome /> }
     )
  }
}
```

This works...but as our applications grow larger and we seek to render more components, these conditinal toggles can become difficult to manage. 

Enter [React Router](https://reacttraining.com/react-router/web/guides/philosophy)

**From the Docs**

React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering

**In a nutshell...**

React Router allows us to:

* Define which component(s) are rendering based on the URL pathname.
* Bookmark specific page/view within our application
* Utilize the `back` and `forward` buttons in our browser

### Types of routers

* `BrowserRouter`: A Router that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
* `HashRouter`: A Router that uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.

We will be focusing on `BrowserRouter` since we want our users to be able to bookmork specific paths and utilize their forward/back buttons. 

There are a few more tools we get with React Router that are important to know about:

##### Route

#### Link && NavLink

#### Redirect

#### Switch






#### Resources:

* [React Router Training](https://reacttraining.com/react-router/web/guides/philosophy)
