import NavBar from "./components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import AdminPage from "./container/AdminPage/AdminPage";
import AllPages from "./container/AllPages/AllPages";
import HomePage from "./container/HomePage/HomePage";

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className='container-fluid'>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/pages/:pageName' element={<AllPages />} />
          <Route path="/pages/admin" element={<AdminPage />} />
          <Route path="/pages/admin/:id" element={<AdminPage />} />
          <Route path='*' element={<h1>This page is not found</h1>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
