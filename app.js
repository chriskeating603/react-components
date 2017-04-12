// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList />
//   </div>
// );

var App = () => (
  <div>
    <h2>Grocery List</h2>
  	<GroceryList groceries = {['veggie', 'fruit', 'food']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(item =>
      <GroceryListItem groceryItem={item}/>
    )}
  </ul>
)

class GroceryListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      done:false
    }
  }
  onClick () {
    this.setState ({
      done: !this.state.done
    })
  }



  render() { 
    var style = {textDecoration: this.state.done ? 'line-through' : 'none'};
    return (<li style={style} onClick={this.onClick.bind(this)}>{this.props.groceryItem}</li>) }
}

ReactDOM.render(<App />, document.getElementById("app"));


// ________

// // A class component can be defined as an ES6 class
// // that extends the base Component class included in the React library
// class TodoListItem extends React.Component {

//   // A `constructor` method is expected on all ES6 classes
//   // When React instantiates the component,
//   // it will pass `props` to the constructor
//   constructor(props) {
//     // Equivalent to ES5's React.Component.call(this, props)
//     super(props);
//   }

//   // Every class component must have a `render` method
//   // Stateless functional components are pretty much just this method
//   render() {

//     // `props` is no longer passed as an argument,
//     // but instead accessed with `this.props`
//     return (
//       <li>{this.props.todo}</li>
//     );

//   }

// }

// // Update our `TodoList` to use the new `TodoListItem` component
// // This can still be a stateless function component!
// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//     )}
//   </ul>
// );

//     <GroceryListItem groceryItem={props.groceries[0]} onClickA={function () {console.log('You picked veggies!')}}/>
//     <GroceryListItem groceryItem={props.groceries[1]}/>
//     <GroceryListItem groceryItem={props.groceries[2]}/>


//   = (properties) => (
//   <li onClick={properties.onClickA}>{properties.groceryItem}</li>
// )