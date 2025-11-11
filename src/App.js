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


function App() {
  return (
    <div className="App">
      {/* <Intro />
      <Math />
      <Task />
      <Pro />
      <Amount />
      <Arr /> */}
      {/* <Daily /> */}

      <Parent />
    </div>
  );
}

export default App;
