
import { useState } from 'react';
import {    RouterProvider } from 'react-router';
import './App.css';
import router from './Routes/Routes/Route';
 
function App() {
      
  return (
    <div  >
           
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
