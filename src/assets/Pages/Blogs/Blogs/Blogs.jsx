import React from "react";
import Header from "../../Shared/Header/Header";
import posts from "../posts.json";
import Blog from "../Blog/Blog";

const Blogs = () => {
    // posts.map((post) => console.log(post))
    window.document.title = "Bloggidea - Blogs";
    return (
        <>
            <Header />
            <div className="container">
                <div className="my-5 py-5">
                    <h2>This is blogs</h2>
                    {posts.map((post) => (
                        <Blog key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blogs;
