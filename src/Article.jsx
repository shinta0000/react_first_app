import React from 'react';

const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態:</label>
      <input type="checkbox" checked={props.isPublished} id="check" onClick={() => props.toggle()} />
      <p>{props.order}</p>
      <button onClick={() => props.countup()}>+</button>
      <button onClick={() => props.countdown()}>-</button>
    </div>
  )
};

export default Article;