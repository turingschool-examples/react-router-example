
# Time to Code!

Enough talk, let's implement React Router!

* Clone [this repo](https://github.com/turingschool-examples/react-router-example) and `cd` into it
* checkout the `in-class` branch
* `npm i`
* `npm start`
* open your text editor

---

This application will provide us with a `Main` landing page as well as 3 routes to pages containing:
* Unicorns
* Puppies
* Sharks

Additionally we will add a dynamic route to dig deeper into a specific creatures cards.

First let's install `react-router-dom`

```bash
npm i --save react-router-dom
```

Next let's go import it and wrap it around our main entry point `App`:

```javascript
//index.js

import { BrowserRouter } from 'react-router-dom'

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));

```

Next we will go to our `App.js` file and begin constructing the routes for our application. We'll need to import some additional pieces from the library.

```javascript
//App.js

import { Route, NavLink } from 'react-router-dom'
```

Now let's build a header to persist on all views. We will use `NavLink` so we can take advantage of the `activeClassName` attribute. 

_**It comes with a default class of `.active` so we can either use that without defining it, or define a new name.**_

```javascript
export default class App extends Component {
  
  render() {
    return (
      <div className='App'>
        <div className='header-section'>
          <header>
            <NavLink to='/unicorns' className='nav'> Unicorns </NavLink>
            <NavLink to='/puppies' className='nav'> Puppies </NavLink>
            <NavLink to='/sharks' className='nav'> Sharks </NavLink>
          </header>
        </div>
      </div>
    );
  }
}
```

If you click on these links now, you should see the URL change to the routes we told each NavLink to route `to`. 

Next we need to define a `Home` route for when users first arrive to the app (or when the `path='/'`). For now we'll just do a basic welcome message:

```javascript
//Home.js

import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <h4>Click on the links above to see a variety of creatures</h4>
    </div>
  )
}

export default Home;
```

Now let's define the route:

```javascript
//App.js

<Route path='/' component={Home} />
```

### Your Turn!

Next we need to define those routes and tell it which components to render. Take 10 mintues and see if you can get the `/unicorns` Route working by displaying `<h1> Unicorns! </h1>`.

_hint: You'll probably need to create a new component to render when on the `/unicorns` route_

![unicorn](http://www.chickensmoothie.com/oekaki/image/image.php?id=410567&size=large&format=auto&rev=1302806499)

Here's how we can do it using the `component` render method on a `Route`:

```javascript
//App.js

<Route path='/unicorns' component={Unicorns} />
```

At this point clicking a header link (NavLink) should change the URL and render the component associated with that Route...however, we're still seeing the `Home` component above, what's with that?

This is where we need to use the `exact` attribute on a `Route`

```javascript
//App.js

<Route exact path='/' component={Home} />
```

What we're saying by adding this attribute is that only when the path is **EXACT**ly `'/'` do we want to render the `Home` component.

Now that we have routes defined, and a template of a component, let's get something more fun displaying. Go to your `Unicorns` component and replace what you have with this code:

```javascript
//Unicorns.js

import React from 'react';
import './image-display.css';
import unicornData from './data/unicorn-data'

const Unicorns = () => {

  const displayUnicorns = unicornData.map((unicorn, i) => <img src={unicorn.image} className='app-img' key={unicorn.id}/>)

  return (
    <div className='image-display'>
      <h1>Unicorns!</h1>
      {displayUnicorns}
    </div>
  )
}

export default Unicorns;
```

We should now be able to see a bunch of unicorns displaying on the page!

### Your Turn!

Take some time to mimic these steps for `Puppies` and `Sharks` so that each respective route shows images of their respective creatures.

**A few things to keep in mind:**

* Each component will share classNames and need the `image-display.css` file
* Each component will need their respective data:
	* `unicorn-data.js`
	* `puppy-data.js`
	* `shark-data.js`

![whaaaat?!](https://i.imgflip.com/160nr0.jpg)

**Let's recap where we're at:**

* We have defined four Routes:
	* `/` 
	* `/unicorns`
	* `/puppies`
	* `/sharks`
* Each route renders a different component
* The `Home` route requires an `exact` attribute because all of the routes contain `/`

Hopefully this seems pretty straight forward so far, but what if we want to go a level deeper? When a user clicks on an image, we want to send them to a new view where they can see information specific to _that_ creature only. This is where we get into **dynamic routing**.

### Dynamic Routing

Currently we have 9 creatures per component and we want to be able to link to a specific view for **each creature**. One way we could do this is to create a route for each creature...something like:

```javascript
<Route to='/unicorns/1' />
<Route to='/unicorns/2' />
<Route to='/unicorns/3' />
<Route to='/unicorns/4' />
...
```

This would be incredibly inefficient. Instead, we can use the `render` attribute within our `Route` to dynamically match the id of the URL with the matching ID within our data. 

To signify a dynamic route, you simply add a colon in front of the parameter you're dynamically changing. 

```javascript
path='/unicorns/:id'
```

Let's focus just on unicorns for now. Here are the steps we're working through:

1. A user clicks a specific image
2. We `Link` to a dynamic route where the end of the URL matches the ID of that specific unicorn
3. Based on the ID in the URL, we pass through data specific to that matching unicorn

So, if our first unicorn's data looks like this:
	
```javascript
{ 
  id: 1, 
  name: 'Chuck', 
  image: img1, 
  type: 'unicorns', 
  bio: bio1 
}
``` 
	
We want to redirect to `/unicorns/1`

Then, we want to define a `Route` that looks at the parameter in the URL and passes the specific matching data into something we can render.

Let's poke the bear a little bit. Paste this route into your `App.js` file:

```javascript
//App.js

<Route path='/unicorns/:id' render={({ match }) => {
   console.log(match)
	      
   return (
      <div>New Unicorn Route!</div>
   )
}} />
```

Now visit this URL and open up your console: `http://localhost:3000/unicorns/1`

First thing we should see is that all of our unicorns are still showing, why do you think this is? 

It's because we didn't specify the `exact` attribute in our `/unicorns` route, so that route sees the URL is `/unicorns/1`, considers it a match and renders any components that match. Let's fix this for all three components:

```javascript
//App.js

<Route exact path='/unicorns' component={Unicorns} />
<Route exact path='/sharks' component={Sharks} />
<Route exact path='/puppies' component={Puppies} />
```

Ok back to business!

We passed through the `match` prop and console logged it, let's take a look. Notice that the `params` property contains an object with our defined paramter `id`, and it is equal to the ID we linked to in the URL!

Now all we have to do is modify our route to render the correct data.

### Your Turn!

See if you can write some codes to render the correct data based on the ID in the URL. Focus just on unicorns for now.

**_Hints:_**

* You will need to bring in the data from the `unicorn-data.js` file
* You may want to use the `CreatureDetails` component already set up for you
* Focus first on seeing the data when you type in the URL manually, we'll set up the click next

![rambo on unicorn](http://pleatedjeans.files.wordpress.com/2010/08/10-28-rambounicorn1.jpg)

Here's the code:

```javascript
<Route path='/unicorns/:id' render={({ match }) => {
	const { id } = match.params
	const creature = unicornData.find(uni => uni.id === parseInt(id))
	      
	if (creature) {
	  return <CreatureDetails {...creature} />
	}
}} />
```

Now if we visit `http://localhost:3000/unicorns/1` we should see a view specifically for Unicorn 1!

### Your Turn!

See if you can modify your `Unicorn` component so that each image can be clicked and `Link` to the correct Route / path / URL.

![tunacorn](http://www.nataliedee.com/081905/tuna-plus-unicorn.jpg)

Here's a simple addition to `Unicorn.js`.

First we `import { Link } from 'react-router-dom'`

Then we just wrap what we returned before with a `<Link>` as such:

```javascript
const displayUnicorns = unicornData.map((unicorn, i) => {
	return (
	  <Link to={`/unicorns/${unicorn.id}`} key={unicorn.id}>
	    <img src={unicorn.image} className='app-img' />
	  </Link>
	)
})
```

If we really wanted to be efficent, we could turn this into a separate component since our `Puppies` and `Sharks` components are likely to operate the same way. So instead we can just render the component and pass through all of the data as such:

```javascript
// Unicorn.js

import React from 'react';
import './image-display.css';
import unicornData from './data/unicorn-data.js';
import ImageCard from './ImageCard';

const Unicorns = () => {

	const displayUnicorns = unicornData.map((unicorn, i) => 
		<ImageCard {...unicorn} key={unicorn.id} className='app-img'/>
	)

	return (
		<div className='image-display'>
		  <h1>Unicorns!</h1>
		  {displayUnicorns}
		</div>
	)
}

export default Unicorns;
```

```javascript
// ImageCard.js

import React from 'react';
import './image-display.css';
import { Link } from 'react-router-dom';

const ImageCard = ({ name, bio, image, id, type }) => {

  return (
      <Link to={`${type}/${id}`}>
        <img src={image} className='app-img' />
      </Link>
  )
}

export default ImageCard;
```

And that's it! Go ahead and work on setting up dynamic routes for the other two components!
