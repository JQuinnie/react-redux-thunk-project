## React with Redux and Thunk

### General Data Loading with Redux

- Component gets rendered onto the screen [1]
- Component's `componentDidMount` lifecycle method gets called [1]
- We call action creator from `componentDidMount` [1]
- Action creator runs code to make an API request [2]
- API responds with data [2]
- Action creator returns an `action` with the fetched data on the `payload` property [2]
- Some reducer sees the action, returns the data off the `payload` [3]
- Because we generated some new state object, redux/react-redux cause our React app to be rerendered [3]

note:

1. Components are generally responsible for fetching data they need by calling an action creator
2. Action creator are responsible for making API requests (this is where **Redux-Thunk** comes into play)
3. We get fetched data into a component by generating new stat in our redux store, then getting that into our component through mapStateToProps
