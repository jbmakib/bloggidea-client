import React, { useState } from "react";

const Blog = (props) => {
    const { userId, title, body } = props.post;
    const [name, SetName] = useState("");

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => SetName(data.name))
        .catch((err) => console.log(err.message));

    return (
        <div className="d-flex">
            <div></div>
            <div>
                <h1>{title}</h1>
                <h3>{name}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Blog;
