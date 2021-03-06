import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItemClass";
import "./todoList.css";

/**1、当组件的 state 或者 props 发生改变的时候，render 函数就会重新执行
 * 2、当父组件的 render 函数被执行时，它的子组件的 render 函数都将被重新执行
 */

class TodoListClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: [],
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState(() => ({
            inputValue: event.target.value,
        }));
    }

    handleSubmit() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: "",
        }));
    }

    handleItem(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return { list: list };
        });
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    content={item}
                    handleItem={this.handleItem.bind(this, index)}
                ></TodoItem>
            );
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
                        onInput={this.handleInput}
                    />
                    <button onClick={this.handleSubmit}>添加</button>
                </div>
                <ul>{this.getTodoItem()}</ul>
            </Fragment>
        );
    }
}

export default TodoListClass;
