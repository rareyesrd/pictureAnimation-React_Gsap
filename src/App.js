import React, {useRef, useEffect} from 'react';
import cat from './cat-image.jpg';
import './App.css';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { TweenMax, Power2, TimelineLite } from 'gsap';

function App() {
  let title = useRef(null)
  let container = useRef(null)
  let image = useRef(null)
  let imageReveal = CSSRulePlugin.getRule('.image-container:after');

  const tl = new TimelineLite();
  useEffect(() => {
    tl.to(container, 1.4, {css: {visibility: 'visible'}})
    .to(imageReveal, 1.4, {width:'0%', ease: Power2.easeInOut})
    .from(image, 1.8, {scale: 1.6, ease: Power2.easeInOut, delay: -2 })
    TweenMax.to( title, 1, {opacity: '1', y: -5, ease: Power2.easeInOut, delay: 1}, 1.2 )
  });
  return (
    <div className="main">
      <div ref={el => { container = el }} className="container">
      <h1 ref={el => { title = el }} className="title">Fancy image reveal</h1>
          <div className="image-container">
            <img ref={el => { image = el }} src={cat} alt="Cat"/>
          </div>
      </div>
    </div>
  );
}

export default App;
