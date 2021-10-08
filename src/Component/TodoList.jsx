import "./TodoList.css";

function TodoList({ list, toggleTodo,removeTodo }) {
    console.log("hii");
    console.log(list);
    return (
        <>
            {list.map(e => 
                
                <div className="todos"  style={{
                    textDecoration: e.status ? "line-through" : "none",
                }}
                    key={e.id}
                >
                    <p className="text">{e.title}</p>

                    <button onClick={() => {
                        toggleTodo(e.id)
                    }}>&#x2714;</button>
                    <button onClick={() => {
                        removeTodo(e.id)
                    }}>&#x2716;</button>
                </div>
            )}
        
            </>
    
    )
}

export default TodoList;