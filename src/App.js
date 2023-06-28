import './App.css';
import Greeting from './components/greeting'
import Logo from './components/Logo';
import Counter from './components/counter';
function App() {
  const Username = "Jonathan Blanks";
  return (
<div>
  <Greeting name={Username}/>
  <Logo />
  <Counter />
</div>
  );
}

export default App;
