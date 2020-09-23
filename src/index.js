import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TextSignature from './components/TextSignature';
import * as serviceWorker from './serviceWorker';
const getImage = () => {

}
ReactDOM.render(
  <>
    <TextSignature
      className="text"
      name="signature"
      defaultImg={''}
      getImage={getImage}
      x={0}
      y={40}
      height={68}
      font='30px Arial'
    />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
