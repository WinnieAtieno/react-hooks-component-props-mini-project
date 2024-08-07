import React from 'react';
import Article from './Article';


function ArticleList({ posts }) {

    function handleReadingTime(readingTime){
        if (readingTime <= 30) {
            const coffeeCups = Math.ceil(readingTime / 5);
            return '☕️'.repeat(coffeeCups) + ` ${readingTime} min read`;
          } else {
            const bentoBoxes = Math.ceil(readingTime / 10);
            return '🍱'.repeat(bentoBoxes) + ` ${readingTime} min read`;
          }

    }
  return (
      <main>
          {posts.map(post => (
              <Article
                  key={post.id}
                  title={post.title}
                  date={post.date}
                  readingTime={handleReadingTime(post.minutes)}
                  preview={post.preview}
              />
          ))}
      </main>
  );
}


export default ArticleList;
