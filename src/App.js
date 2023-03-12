import './App.css';
import HomePage from './components/pages/Anasayfa/Homepage';
import Navbar from './components/Tools/Navbar/Navbar';
import RegisterForm from './components/pages/KayıtSayfası/RegisterForm';
import UserInterface from './components/pages/UserInterface/UserInterface';




function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <RegisterForm/>
      <UserInterface/>
    </div>
  );
}

export default App;
