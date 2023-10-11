import React from 'react'
import './article.css'
import { blog01,blog02, blog03, blog04, blog05} from './imports'

const Article = () => {
  return (
    <div className='art-container'>
      <img src={blog01} />
      <p>Sep 26, 2021</p>
      <h2>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
      <p>Read Full Article</p>
    </div>
  )
}

export default Article