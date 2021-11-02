import React from 'react'
import ReactDom from 'react-dom'

let App = () => {
  return(
    <div className="mx-auto my-52">
      <h1 className="text-indigo-500 font-thin antialiased text-8xl">TRON</h1>
    </div>
  )
}
let container = document.querySelector('#root')
ReactDom.render(<App />, container)