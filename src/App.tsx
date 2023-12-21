import './App.css'
import Person from "./Person/Person";
import {useState} from "react";


interface Numbers {
    num1: number;
    num2: number;
    num3: number;
    num4: number;
    num5: number
}



function App() {
    const [numbers, setNumber] = useState<Numbers[]>([
        {num1: 5, num2: 11, num3: 16, num4: 23, num5: 32}
    ])

    const ChangeNumber = () => {
        const random1:number = Math.floor(Math.random() * 4) + 5;
        const random2:number = Math.floor(Math.random() * 5) + 10;
        const random3:number = Math.floor(Math.random() * 4) + 16;
        const random4:number = Math.floor(Math.random() * 8) + 21;
        const random5:number = Math.floor(Math.random() * 6) + 30;
        setNumber([
            {num1: random1, num2: random2, num3: random3, num4: random4, num5: random5}

        ])
    }
  return (
      <div>
          <button className="button" onClick={ChangeNumber}>New numbers</button>
          <div>
              <Person num1={numbers[0].num1} num2={numbers[0].num2} num3={numbers[0].num3} num4={numbers[0].num4} num5={numbers[0].num5}/>
          </div>
      </div>
  )
}

export default App
