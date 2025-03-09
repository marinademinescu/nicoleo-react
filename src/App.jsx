import { useContext } from 'react';
import './App.css';
import ToDoListInput from './components/ToDoListInput/ToDoListInput';
import ListProvider from './components/providers/ListProvider';


function App() {

  return (

    <ListProvider>
      <ToDoListInput />
    </ListProvider>

  )

}

export default App;

