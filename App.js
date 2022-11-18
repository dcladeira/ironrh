import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import PeopleList from './components/PeopleList/PeopleList';
import AddPeople from './components/AddPeople/AddPeople';
import PaginaInicial from './paginas/PaginaInicial';
import PaginaErro from './paginas/PaginaErro';
// import HomePage from './pages/HomePage';
// import ErrorPage from './pages/ErrorPage';

function App() {
  const urlAPI = "https://ironrest.cyclic.app/ironrh-91";

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/funcionarios" element={<PeopleList />} />
        <Route path="/cadastrar" element={<AddPeople />} />
        <Route path="*" element={<PaginaErro />} />
      </Routes>
    </div>
  );
}

export default App;
