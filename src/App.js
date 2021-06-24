import './App.css';
import TodoList from './Component/TodoList';
// import TodoItem from './Component/TodoItems'
import TodoInput from './Component/TodoInput'


function App() {
  return (
    <div className="App">
        <h3>TODO LIST</h3>
        <TodoInput/>
        {/* <TodoItem/> */}
        <TodoList/>
    </div>
  );
}

export default App;
