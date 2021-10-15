import { Link } from 'react-router-dom';
import React from 'react';
import Avatar from 'react-avatar';

const Comment = props => {
  const comment = props.comment;
  return (
    <div className="card">
      <div className="card-footer">
        {/* <Link
          to={`/@${comment.aliases[0]}`}
          className="comment-author">
          <img src={comment.aliases[0]} className="comment-author-img"  />
        </Link> */}
        <Avatar name={comment.aliases[0]} />
        &nbsp;
        <Link
          to={'#'}
          className="comment-author">
          {comment.aliases[0]}
        </Link>
        <span className="date-posted" style={{position: 'absolute',top: '43%',right: '10px'}}>
          {new Date().toDateString()}
        </span>
      </div>
    </div>
  );
};

export default Comment;
