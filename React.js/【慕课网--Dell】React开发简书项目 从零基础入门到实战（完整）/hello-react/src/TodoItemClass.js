import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
    constructor(props) {
        super(props);

        // 在此处改变方法的 this 指向，是为了节省性能
        this.handleClickLi = this.handleClickLi.bind(this);
    }

    handleClickLi() {
        this.props.handleItem();
    }

    render() {
        const { content } = this.props;
        return <li onClick={this.handleClickLi} dangerouslySetInnerHTML={{ __html: content }}></li>;
    }
}

TodoItem.propTypes = {
    content: PropTypes.string,
};
TodoItem.defaultProps = {
    content: "内容",
};

export default TodoItem;
