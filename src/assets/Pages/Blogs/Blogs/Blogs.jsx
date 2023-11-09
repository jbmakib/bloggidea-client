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
                    {posts.length === 0 ? (
                        <div
                            className="spinner-border text-primary mx-auto d-block"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        posts.map((post) => <Blog key={post.id} post={post} />)
                    )}
                </div>
            </div>
        </>
    );
};

export default Blogs;
