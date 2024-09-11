import { useState ,useCallback , useRef,useEffect} from 'react'

import './App.css'

function App() {
  const[length,setlength]=useState(8);
  const[numberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("")
  const passwordGenerator=useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  } , [length,numberAllowed,charAllowed,setPassword])
     
    
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    
    
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h2 className='text-white py-8'>Password Generator</h2>
      
          
          <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
            
          <input  className="outline-none w-full py-1 px-3"
            placeholder="Password" type='text'readOnly value={password}>
            </input>
          
          
         
          </div>
         <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
         
          </div>
          <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
           
          

  )
}

export default App
