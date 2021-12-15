import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItemClass";
import "./todoList.css";

class TodoListClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: [],
        };
    }

    handleInput(event) {
        this.setState({
            inputValue: event.target.value,
        });
    }

    handleSubmit() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: "",
        });
    }

    handleItem(index) {
        const list = [...this.state.list];
        list.splice(index, 1);

        this.setState({
            list: list,
        });
    }

    render() {
        return (
            <Fragment>
                {/* 这是class组件 */}
                <h1>class 组件</h1>
                <div>
                    <label htmlFor="todoInput">请输入内容：</label>
                    <input
                        id="todoInput"
                        className="input"
                        value={this.state.inputValue}
                        onInput={this.handleInput.bind(this)}
                    />
                    <button onClick={this.handleSubmit.bind(this)}>添加</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                        return (
                            <TodoItem
                                key={index}
                                content={item}
                                handleItem={this.handleItem.bind(this, index)}
                            ></TodoItem>
                        );
                    })}
                </ul>
            </Fragment>
        );
    }
}

export default TodoListClass;
