// App.tsx
// #tutorial https://codesandbox.io/p/sandbox/react-context-typescript-vk41i7?file=%2Fsrc%2Fstyles.css%3A1%2C1-120%2C1
// https://blog.logrocket.com/how-to-use-react-context-typescript/  
import * as React from 'react'
import TodoProvider from './context/todoContext'
import Todos from './containers/Todos'

import './styles.css'
import AddTodo from './components/AddTodo'

export default function App() {
  return (
    <TodoProvider>
      <main className='App'>
        <h1>My Todos</h1>
        <AddTodo />
        <Todos />
      </main>
    </TodoProvider>
  )
}



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
