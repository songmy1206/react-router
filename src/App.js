import './App.css';
import Profile from './components/Profile';
import Board from './components/Board';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';
import TestRedux from './components/TestRedux';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <div className="App">
      {/* <TestRedux />
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/test' element={<TestRedux />}/>
        <Route path='/board' element={<Board/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='board/:boardID' element={<BoardDetail/>}/>
      </Routes> */}
      <ListContainer />
    </div>
  );
}

export default App;
