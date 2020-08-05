// import _ from "loadsh";
// import printMe from './print.js';
// function component() {
//   var element = document.createElement("div");

//   // Lodash, currently included via a script, is required for this line to work
//   // Lodash, now imported by this script
//   // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   // element.classList.add('hello');
//   // 将图像添加到我们现有的 div。

//   var btn = document.createElement('button');
  
//   btn.innerHTML = 'Click me and check the console!';
//    btn.onclick = printMe;
//    element.appendChild(btn);
//   return element;
// }

// document.body.appendChild(component());

// if (module.hot) {
//       module.hot.accept('./print.js', function() {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//       })
// }


// import { cube } from './math.js';
// function component() {
// var element = document.createElement('pre');
//    element.innerHTML = [
//      'Hello webpack!',
//      '5 cubed is equal to ' + cube(5)
//       ].join('\n\n');
//       return element;
//     }
    
//     console.log(process.env.NODE_ENV,'1111111111111111')
//     document.body.appendChild(component());


// async function getrComponent(){
//   return await import(/*webpackChunckName:"lodash"*/'lodash')
// }

// getrComponent().then(_=>{
//   console.log(_,'1111111111111111111111111111qqqqqqqqqqqqqqqqq')
//   document.body.innerHTML=_.join(['hellow',"webpack"]);
// })

// import _ from 'lodash'
import { file, parse } from './global.js'
function component() {
  var element = document.createElement('div')
  var button  = document.createElement('button')
  var br = document.createElement('br')
  button.innerHTML = 'click me  and look at the console!'
  element.innerHTML = _.join(['hello','webpack'],'');
  element.appendChild(br);
  element.appendChild(button);

  button.onclick = e => import('./print').then(module => {
    var print = module.default;
    print()
    parse()
    cosnole.log(file)
  }) 

  return element
}

console.log(component())
document.body.appendChild(component());