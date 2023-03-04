import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Students } from './Students';

const root = ReactDOM.createRoot(document.getElementById('root'));
var studentList=[{FirstName:'alireza',LastName:'tavakol',Email:'a@a.c',PhonNumber:'1234567890'}
                ,{FirstName:'hasan',LastName:'bagheri',Email:'b@b.y',PhonNumber:'0987654321'}];
root.render(
  <>
    <Students List={studentList} />
  
  </>
);
reportWebVitals();
