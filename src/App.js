import './App.css';
import { Header } from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Header title='Изменение парсера' author='LevF' time='5 hours ago' branches={['main']} commits={['asdfgh']} parents={['zxcvbn', 'qwerty']}/>
    </div>
  );
}

export default App;
