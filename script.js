let h1 = document.createElement('h1')
h1.innerHTML = "Hello from JS";
document.body.appendChild(h1);    // Appends on body 
// console.log(h1)

// Import & Export:

// Import named exports
// import {a, user} from "./app.js"
// console.log(a, user);
// console.log(user)

// Import default exports
// import chacha from "./app.js"
// console.log(chacha);

// Example1:
import name from './app.js';
import user2 from './test.js';
import {age, skills} from './app.js';
console.log(name, user2);
console.log(age, skills);