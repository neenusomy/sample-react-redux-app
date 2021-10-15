import ArticleActions from './ArticleActions';
import { Link } from 'react-router-dom';
import React from 'react';

const ArticleMeta = props => {
  const article = props.article;
  return (
    <div className="article-meta">
      {/* <Link to={`/@${article[0].culture}`}>
        <img src={article[0].culture} alt={article[0].cultures} />
      </Link> */}

      <div className="info">
        <Link to={`#`} className="author">
          {article[0].culture}
        </Link>
        <span className="date">
          {new Date().toDateString()}
        </span>
      </div>

      {/* <ArticleActions canModify={props.canModify} article={article} /> */}
    </div>
  );
};

export default ArticleMeta;
