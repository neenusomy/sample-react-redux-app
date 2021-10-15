import ArticlePreview from './ArticlePreview';
import React from 'react';

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No characters are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.articles[0].map((article,index) => {
          return (
            <ArticlePreview article={article} index={index} key={article.slug} />
          );
        })
      }
    </div>
  );
};

export default ArticleList;
