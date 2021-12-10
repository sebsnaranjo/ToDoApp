import React from "react";

function TodoList(props) {
    return (
        <section>
            <ul>
                {props.chlidren}
            </ul>
        </section>
    );
}

export { TodoList };