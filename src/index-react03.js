import React from 'react';
import ReactDom from 'react-dom';

const Helloworld=({first, last})=>{
  return (
    <p>Hello World {first + ' '+ last}</p>
  )
}

ReactDom.render(
  <Helloworld first='yeojin' last='kim' />,
  document.getElementById('root')
)
