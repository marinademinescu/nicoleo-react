import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";
import TodoList from "./components/TodoList/TodoList";
import Todo from "./components/Todo";
import TodoDetails from "./components/TodoDetails";


function App() {

  return (
    
       <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="todolist" element={<TodoList />} />
          <Route path="about" element={<About />} />
          <Route path="todo/:id" element={<Todo />} />
          <Route path="tododetails/:id" element={<TodoDetails />} />
          
        </Route>
      </Routes>

    </BrowserRouter>
   
  )

}

export default App;

