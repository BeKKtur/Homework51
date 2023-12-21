import './App.css'
import Person from "./Person/Person";

const Button = () => {
  return(
      <>
        <button className="button">New numbers</button>
      </>
  )
}

function App() {
  return (
    <div>
        <Button/>
        <div>
            <Person num1={5} num2={11} num3={16} num4={23} num5={32}/>
        </div>
    </div>
  )
}

export default App
