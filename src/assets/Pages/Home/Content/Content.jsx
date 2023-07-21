import {
  faComment,
  faFilePen,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary">
        Here you can describe yourself
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
        <div className="col">
          <div className="card h-100">
            <div className="card-body m-3">
              <FontAwesomeIcon icon={faFilePen} className="fs-1" />
              <h3 className="card-title my-2">Create own post</h3>
              <p className="card-text">You can create a post.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body m-3">
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
          <div className="card h-100">
            <div className="card-body m-3">
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
    </div>
  );
};

export default Content;
