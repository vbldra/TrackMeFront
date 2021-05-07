import React from "react";

import './topic.scss'

function Topic({topic}) {
    return (
        <div className="topic">
            <p>{topic.title}</p>
        </div>
    );
}

export default Topic;
