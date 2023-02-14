import React from 'react'
import './styles.css'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputField= ({todo, setTodo, handleAddTodo}: Props) => {
  return (
    <form className="input" onSubmit={handleAddTodo}>
      <input className='inputBox' 
        type="input" 
        value={todo} 
        onChange={(e)=>setTodo(e.target.value)} 
        placeholder='Enter Task' /> 

      <button className="input-button" type='submit'>Lets Go!</button>
    </form>
  )
}

export default InputField;
　