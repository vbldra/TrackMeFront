import React, { useContext } from "react";

import "./homeContainer.scss";

import { AppContext } from "../app/App";
import Topic from "../topic/Topic";
import TopicBlank from "../topicBlank/TopicBlank";

function HomeContainer() {
    const { topics } = useContext(AppContext);
    console.log(topics);
    return (
        <div className="homeContainer">
            <TopicBlank />
            {topics.map((el) => (
                <Topic key={el.id} topic={el}/>
            ))}
        </div>
    );
}

export default HomeContainer;
