import { useContext } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import { observer } from 'mobx-rect-title'

const App = observer(() => {
  return (
    <>
      <CreateTodo />
    </>
  );
});

export default App;
