const useFilteredTodos = (list, search) => {
  const listTodo = search ? list.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))  : list

    console.log(listTodo)
  
  return {listTodo}


 
}

export default useFilteredTodos;
