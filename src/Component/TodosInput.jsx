import { useState } from "react"
import { v4 as uuid  } from "uuid";

function TodosInput({handleAdd}) {
    const [text, setText] = useState("");
    
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleAddTodo = () => {
        const data = {
            status: false, title:  text , id: uuid()
        }
        handleAdd(data);
        setText("");
    }

    return (
        <>
            <input
                value={text}
                onChange={handleChange}
                type="text"
                placeholder="Add todo" className="input" />
            <button onClick={handleAddTodo} className="butt">+</button>
        </>
    )
}

export default TodosInput;
