import React from "react";

const TodoItem = (props) => {
    const handleClickLi = () => {
        props.handeItem();
    };

    return <li onClick={handleClickLi} dangerouslySetInnerHTML={{ __html: props.content }}></li>;
};

export default TodoItem;
