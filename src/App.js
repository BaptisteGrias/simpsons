import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';

function App() {
  const [quoteList, setQuoteList] = useState([]);
  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((res) => res.data)
      .then((quoteList) => {
        setQuoteList(quoteList[0]);
      });
  };
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <QuoteCard quote={quoteList.quote} character={quoteList.character} image={quoteList.image} />
      <button type="button" onClick={getQuote}>
        {' '}
        next simpsons{' '}
      </button>
    </div>
  );
}

export default App;
