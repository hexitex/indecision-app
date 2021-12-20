import React from "react";

const Option = (props) => (
        <div className="option" key={props.index}>
        <p className="option__text">{props.count}. {props.val}</p>
            <button className="button button--link" onClick={(e) => props.handleDeleteOption(props.val)}>Delete</button>
        </div>
    );
export default Option