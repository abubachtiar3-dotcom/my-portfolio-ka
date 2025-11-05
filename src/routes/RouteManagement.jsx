import { Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage/AboutPage';
import HomePage from '../pages/HomePage/HomePage'
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import Playground from '../pages/Playground/Playground';

const RouteManagement = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/project' element={<ProjectPage/>}/>
            <Route path='/playground' element={<Playground/>}/>
        </Routes>
    )
}

export default RouteManagement;