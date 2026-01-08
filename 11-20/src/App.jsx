import React from 'react'
import Counter from './Componets/Counter'
import InputDemo from './Componets/LiveText'
import ToggleDiv from './Componets/ToggleDiv'
import List from './Componets/PassArguments'
import LoginForm from './Componets/LoginForm'
import CheckBoxDemo from './Componets/CheckBoxDemo'
import RadioDemo from './Componets/RadioDemo'

const App = () => {
  return (
    <div>
      <Counter />
      <InputDemo />
      <ToggleDiv />
      <List items={["Apple", "Banana"]} />
      <LoginForm />
    <CheckBoxDemo />
    <RadioDemo />
    </div>
  )
}

export default App
