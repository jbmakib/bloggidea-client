import {
  faComment,
  faFilePen,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Content = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary">
        Here you can describe yourself
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 text-center my-5 py-5">
        <div className="col">
          <div className="card h-100 border-primary">
            <div className="card-body m-3 fw-bold">
              <FontAwesomeIcon icon={faFilePen} className="fs-1" />
              <h3 className="card-title my-2">Create own post</h3>
              <p className="card-text">
                You can create a post. Your ideas can be shared with others.
                Bloggidea helps you to spread your thoughts towards others.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-primary">
            <div className="card-body m-3 fw-bold">
              <FontAwesomeIcon icon={faHeart} className="fs-1" />
              <h3 className="card-title my-2">React others post</h3>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-primary">
            <div className="card-body m-3 fw-bold">
              <FontAwesomeIcon icon={faComment} className="fs-1" />
              <h3 className="card-title my-2">Comment thoughts</h3>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <NavLink
          className="icon-link fw-semibold icon-link-hover link-primary link-underline-primary d-inline-block link-underline-opacity-25"
          to={"/login"}
        >
          Be a blogger {""}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="bi"
            aria-hidden="true"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default Content;
