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

  const handleClick = ev => {
    ev.preventDefault();
    if (article.favorited) {
      props.unfavorite(article.slug);
    } else {
      props.favorite(article.slug);
    }
  };

  return (
    <div className="article-preview">
      <div className="article-meta">
      <Avatar round name={article.aliases[0]} />
        {/* <Link to={`/@${article.culture}`}>
          <img src="https://www.istockphoto.com/photo/gerbera-gm171312337-20779342?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Forange-flower&utm_term=orange%20flower%3A%3Asearch-aggressive-affiliates-v1%3Ab"  />
        </Link> */}

        <div className="info">
          <Link className="author" to={`/characters/${props.index+1}`}>
            {article.aliases[0] ? article.aliases[0] : 'Unkonown'}
          </Link>
          <span className="date">
          {article.gender ? article.gender : ''}
            {/* {new Date(article.createdAt).toDateString()} */}
          </span>
        </div>

        <div className="pull-xs-right">
          <button className={favoriteButtonClass} >
            <i className="ion-heart"></i>
          </button>
        </div>
      </div>

     
    </div>
  );
}

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
