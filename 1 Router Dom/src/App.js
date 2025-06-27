import {
  BrowserRouter, 
  Routes, 
  Route
} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import Home from './components/Home'
import Teachers from './components/Teachers'
import Holidays from './components/Holidays'
import ContactUs from './components/ContactUs'
import NotFound from './components/NotFound'

const App = ()=>{ 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
// import React, { useState } from 'react';

//     function Counter() {
//       const [count, setCount] = useState(0);

//       const increment = () => {
//         setCount(count + 1);
//       };

//       const decrement = () => {
//         setCount(count - 1);
//       };

//       const reset = () => { 
//         setCount(0);
//       };    

//       return (
//         <div>
//           <h2>Counter: {count}</h2>
//           <button onClick={increment}>Increment</button>
//           <button onClick={decrement}>Decrement</button>
//           <button onClick={reset}>Reset</button>
//         </div>
//       );
//     }

//     export default Counter;
// import { useState } from 'react';

// export default function Form() {
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     email: '  ',
//   });

//   return (
//     <>
//       <label>
//         First name:
//         <input
//           value={form.firstName}
//           onChange={e => {
//             setForm({
//               ...form,
//               firstName: e.target.value
//             });
//           }}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           value={form.lastName}
//           onChange={e => {
//             setForm({
//               ...form,
//               lastName: e.target.value
//             });
//           }}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           value={form.email}
//           onChange={e => {
//             setForm({
//               ...form,
//               email: e.target.value
//             });
//           }}
//         />
//       </label>
//       <p>
//         {form.firstName}{' '}
//         {form.lastName}{' '}
//         ({form.email})
//       </p>
//     </>
//   );
// }
// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021, 
//   color: 'red'
// }

// myVehicle(vehicleOne);

// function myVehicle({type, color, brand, model}) {
//   const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
//   {message}
// }
// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021, 
//   color: 'red'
// }

// myVehicle(vehicleOne);

// function myVehicle({type, color, brand, model}) {
//   const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
//   console.log(message);
// }
