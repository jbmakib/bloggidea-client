import React, { useState } from "react";

const Blog = (props) => {
    const { userId, title, body } = props.post;
    const [name, SetName] = useState("");

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => SetName(data.name))
        .catch((err) => console.log(err));

    return (
        <div className="d-flex card p-3 my-3 border-primary">
            <div></div>
            <div className="text">
                <h3>{title}</h3>
                <small className="text-muted">{name}</small>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Blog;
