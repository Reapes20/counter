import './App.css';
import Greeting from './components/greeting'
import Logo from './components/Logo';
function App() {
  const Username = "Tayshaun";
  return (
<div>
  <Greeting name={Username}/>
  <Logo />
</div>
  );
}

export default App;
