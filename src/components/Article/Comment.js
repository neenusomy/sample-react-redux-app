import DeleteButton from './DeleteButton';
import { Link } from 'react-router-dom';
import React from 'react';
import Avatar from 'react-avatar';

const Comment = props => {
  const comment = props.comment;
  const show = props.currentUser &&
    props.currentUser.username === comment.author.username;
  return (
    <div className="card">
      <div className="card-block">
        {comment.books.map((article, index) => (
          
            <p className="card-text">{article}</p>
          
        ))}
        
      </div>
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
        <span className="date-posted">
          {new Date().toDateString()}
        </span>
        <DeleteButton show={show} slug={props.slug} commentId={comment.id} />
      </div>
    </div>
  );
};

export default Comment;
