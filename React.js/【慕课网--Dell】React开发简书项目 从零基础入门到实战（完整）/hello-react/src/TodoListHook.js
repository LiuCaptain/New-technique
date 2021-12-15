import React, { Fragment, useState } from "react";
import TodoItem from "./TodoItemHook";

const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([]);

    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        setList([...list, inputValue]);
        setInputValue("");
    };

    const handleItem = (index) => {
        setList((preList) => {
            const list = [...preList];
            list.splice(index, 1);
            return list;
        });
    };

    return (
        <Fragment>
            <h1>函数组件</h1>
            <div>
                <input value={inputValue} onInput={handleInput} />
                <button onClick={handleSubmit}>添加</button>
            </div>
            <ul>
                {list.map((item, index) => {
                    return (
                        <TodoItem
                            key={index}
                            content={item}
                            handeItem={() => handleItem(index)}
                        ></TodoItem>
                    );
                })}
            </ul>
        </Fragment>
    );
};

export default TodoList;
