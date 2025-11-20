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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navv from './Components/Navv';
import FromVal from './Components/practice/FromVal';
import Storage from './Components/practice/Storage';
import UseEff from './Components/UseEff';
import Todo from './Components/Todo';

function App() {

  let findtheme=localStorage.getItem('THEMEVIEW')
  return (
    <div className="App" style={{backgroundColor:findtheme=='dark'?'black':'white', color:findtheme=='dark'?'white':'black'}}>
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
        <Route path='/formdata'element={<Formdata/>}/>  
        <Route path='/mathpage/:id' element={<Math />} /> 
        <Route path='/project' element={ <Pare />}   />  
           <Route path='/theme' element={ <Storage />}   />  
                      <Route path='/useEffect' element={ <UseEff />}   />  
          <Route path='/todo' element={ <Todo />}   />  


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
