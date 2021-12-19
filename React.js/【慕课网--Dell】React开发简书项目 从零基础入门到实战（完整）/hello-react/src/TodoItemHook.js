import React from "react";
import PropTypes from "prop-types";

const TodoItem = (props) => {
    const handleClickLi = () => {
        props.handeItem();
    };

    return <li onClick={handleClickLi} dangerouslySetInnerHTML={{ __html: props.content }}></li>;
};

TodoItem.propTypes = {
    content: PropTypes.string,
};
TodoItem.defaultProps = {
    content: "内容",
};

export default TodoItem;
