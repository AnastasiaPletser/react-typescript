import './App.css';
import { MyButton } from './MyButton';

function App() {
  const buttonText = "Click Me!";
  const handleClick = () => alert("Hello World!")
  return (
    <div id="hello">
      <span>Hello world!</span>
      <MyButton text={buttonText} handler={handleClick}/>
    </div>
  )
}

export default App
