import './App.css'
import Counter from './Counter';
import Player from './Player';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick() {
    alert('button clicked');
  }

  const handelClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFour = (num) => {
    alert(num + 4);
  }

  return (
    <>
      <h2>React Core Concepts 2</h2>

      <Friends></Friends>
      <Users></Users>
      <Player></Player>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handelClick2}>Click 2</button>
      <button onClick={() => alert('third clicked')}>Third</button>
      <button onClick={() => addToFour(3)}>Four</button>

{/* 
      <button onClick={function handleSomething() { alert('function diaaa') }}>ffff</button> */}
    </>
  )
}

export default App


//<> </> -> fragement