import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './Components/Intro';
import Math from './Components/Math';
import Task from './Components/Task';
import Pro from './Components/Pro';
import Amount from'./Components/Amount';
import Arr from './Components/Arr';
import Daily from './Components/Daily';
import Parent from './Components/propss/Parent';
import One from './Components/practice/One';
import Pare from './Components/Project/Pare';
import Anagram from './Components/practice/Anagram';
import Basic from './Components/usestatecomp/Basic';
import Usecom from './Components/Project/Usecom';
import Main from './Components/Usestate/Main';
import Count from './Components/Usestate/Count';
import Product from './Components/Shopping/Product';
import Formdata from './Components/usestatecomp/Formdata';
import Form from './Components/Form';
import Game from './Components/Game';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navv from './Components/Navv';
import FromVal from './Components/practice/FromVal';


function App() {
  return (
    <div className="App">
      {/* <Intro />
      <Math />
      <Task />
      <Pro />
      <Amount />
      <Arr /> 
      <Daily />
      <Parent />
      <One />
      <Pare />
      <Anagram />
      <Basic />
      <Usecom />
      <Product />
      <Form /> */}
      <BrowserRouter>
      <Navv />
      <Routes>
        <Route path='/anagram' element={<Anagram />} />
        <Route path='/game' element={<Game/>}/>
        <Route path='/formdata'element={<Formdata/>}/>  
        <Route path='/mathpage/:id' element={<Math />} /> 
        <Route path='/project' element={ <Pare />}   />  
        <Route path='/formvalidation' element={<FromVal />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
