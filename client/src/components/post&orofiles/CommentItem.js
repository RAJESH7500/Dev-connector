import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";
import { Button } from "reactstrap";

const CommentItem = ({
  comment: { _id, text, name, avatar, user, date },
  postId,
  auth,
  deleteComment,
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <a href="/profile">
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        {!auth.isLoading && user === auth.user._id && (
          <Button color="danger" onClick={() => deleteComment(postId, _id)}>
            <i className="fas fa-times"></i>
          </Button>
        )}
      </div>
    </div>
  );
};
CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateTopProp = (state) => ({
  auth: state.auth,
});
export default connect(mapStateTopProp, { deleteComment })(CommentItem);
