// 'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {

//   }

//   render() {

//   }
// }

// const domContainer = document.querySelector('#top_header_file');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));

// class TopHeaderFile extends React.Component {
//     constructor(props) {
//         super(props);
        
//     }

//     render() {
//         return (
//             <button></button>
//         )
//     }
// }

import React from 'react'
import ReactDOM from 'react-dom'

const TopHeaderFile = () => (
    <h1>You have rendered this</h1>
)

ReactDOM.render(<TopHeaderFile/>, document.getElementById('top_header_file'))
