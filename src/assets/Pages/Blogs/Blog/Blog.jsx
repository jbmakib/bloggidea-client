const Blog = (props) => {
    const { userId, id, title, body } = props.post;
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default Blog;
