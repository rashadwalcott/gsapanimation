import React, {useRef, useEffect, useState} from 'react';
import {TweenMax, Power3} from 'gsap';
import './App.css';

function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [state, setState] = useState(false);

  const handleExpand = () => {
    TweenMax.to(circle, .8, {width: 200, height: 200, ease: Power3.easeOut})
    setState(true)
  }

  const redHandleExpand = () => {
    TweenMax.to(circleRed, .8, {width: 200, height: 200, ease: Power3.easeOut})
    setState(true)
  }
  const blueHandleExpand = () => {
    TweenMax.to(circleBlue, .8, {width: 200, height: 200, ease: Power3.easeOut})
    setState(true)
  }


  const handleShrink = () => {
    TweenMax.to(circle, .8, {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  const redHandleShrink = () => {
    TweenMax.to(circleRed, .8, {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  const blueHandleShrink = () => {
    TweenMax.to(circleBlue, .8, {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }

  useEffect(() => {
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})
    // TweenMax.from(circle, .8, {opacity: 0, x: 40, ease: Power3.easeOut});
    // TweenMax.from(circleRed, .8, {opacity: 0, x: 40, delay: .3, ease: Power3.easeOut});
    // TweenMax.from(circleBlue, .8, {opacity: 0, x: 40, delay: .6, ease: Power3.easeOut});
    TweenMax.staggerFrom([circle,circleRed,circleBlue], .8, {opacity: 0, x: 40, ease: Power3.easeOut}, .3)
  },[])

  return (
    <div
      ref={el => app= el}
      className="App">
      <header className="App-header">
        <div className='circle-container'>
          <div
            onClick = {state !== true ? handleExpand : handleShrink}
            ref={el => circle = el}
            className='circle'></div>
          <div
            onClick = {state !== true ? redHandleExpand : redHandleShrink}
            ref={el => circleRed = el}
            className='circle red'></div>
          <div
            onClick = {state !== true ? blueHandleExpand : blueHandleShrink}
            ref={el => circleBlue = el}
            className='circle blue'></div>
        </div>
      </header>
    </div>
  );
}

export default App;
