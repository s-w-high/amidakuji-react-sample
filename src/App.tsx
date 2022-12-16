import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Top from './views/Top';
import Grouping from './views/Grouping';
import NoMatch from './views/NoMatch';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_PATH}> 
      <Header />
      <Routes>
        <Route path={"/"} element={<Top />} />
        <Route path={"/grouping"} element={<Grouping />} />
        <Route path="*" element={<NoMatch />} />
      </Routes> 
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
