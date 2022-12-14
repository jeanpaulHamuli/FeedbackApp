import { v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import './App.css';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
    // console.log("FromApp", id);
  }

  const AddFeedback = (newFeedback) => {
    console.log(newFeedback)
    newFeedback.id = uuidv4(); 
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={AddFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
