import React, {useRef, useEffect} from 'react';
import cat from './cat-image.jpg';
import './App.css';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { Power2, TimelineLite } from 'gsap';

function App() {

  let container = useRef(null)
  let image = useRef(null)
  let imageReveal = CSSRulePlugin.getRule('.image-container:after');

  const tl = new TimelineLite();
  useEffect(() => {
    tl.to(container, 1, {css: {visibility: 'visible'}})
    .to(imageReveal,
      1.4,
      {width:'0%', ease: Power2.easeInOut})
      .from(image, 1.4, {scale: 1.6, ease: Power2.easeInOut, delay: -1.6 })
  })
  return (
    <div className="main">
      <div ref={el => { container = el}} className="container">
        <>
          <div className="image-container">
            <img ref={el => { image = el}} src={cat} alt="Cat"/>
          </div>
        </>
      </div>
    </div>
  );
}

export default App;
