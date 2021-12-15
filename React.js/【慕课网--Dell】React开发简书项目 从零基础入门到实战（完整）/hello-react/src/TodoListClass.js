import { Component, Fragment } from "react";
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
                            <li
                                dangerouslySetInnerHTML={{ __html: item }}
                                key={index}
                                onClick={this.handleItem.bind(this, index)}
                            ></li>
                        );
                    })}
                </ul>
            </Fragment>
        );
    }
}

export default TodoListClass;
