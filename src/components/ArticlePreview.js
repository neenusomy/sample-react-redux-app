import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';
import Avatar from 'react-avatar'

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';


const mapDispatchToProps = dispatch => ({
  favorite: slug => dispatch({
    type: ARTICLE_FAVORITED,
    payload: agent.Articles.favorite(slug)
  }),
  unfavorite: slug => dispatch({
    type: ARTICLE_UNFAVORITED,
    payload: agent.Articles.unfavorite(slug)
  })
});

const ArticlePreview = props => {
  const article = props.article;
  const favoriteButtonClass = article.favorited ?
    FAVORITED_CLASS :
    NOT_FAVORITED_CLASS;

  const heartClicked = ev => {
    ev.preventDefault();
    alert("Click not implemented yet!")
  };

  return (
    <div className="article-preview">
      <div className="article-meta">
      <Avatar round name={article.aliases[0]} />
        <div className="info">
          <Link className="author" to={`/characters/${props.index+1}`}>
            {article.aliases[0] ? article.aliases[0] : 'Unkonown'}
          </Link>
          <span className="date">
          {article.gender ? article.gender : ''}
          </span>
        </div>

        <div className="pull-xs-right">
          <button className={favoriteButtonClass} onClick={heartClicked} >
            <i className="ion-heart"></i>
          </button>
        </div>
      </div>

     
    </div>
  );
}

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
