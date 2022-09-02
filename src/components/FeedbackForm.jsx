import React, { useState } from 'react'
import Card from './share/Card'
import Button from './share/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10)
  

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null)
      setBtnDisabled(false);
    }
    setText(e.target.value);

  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }

      console.log(newFeedback)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service</h2>
        <RatingSelect select={(rating) => setRating(rating)} selected={rating} />
        <div className='input-group'>
          <input type='text' placeholder='Write a review' value={text} name="text" onChange={handleTextChange} />   
          <Button type='submit' version='secondary' isDesabled={btnDisabled}>Send</Button>         
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
