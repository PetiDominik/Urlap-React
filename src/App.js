
import './App.css';

import Layout from './Layout';
import NoPage from './pages/NoPage';
import Adatok from './pages/Adatok';
import Kezdolap from './pages/Kezdolap';
import Urlap from './pages/Urlap';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Kezdolap />} />
                    <Route path="urlap" element={<Urlap />} />
                    <Route path="adatok" element={<Adatok />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
