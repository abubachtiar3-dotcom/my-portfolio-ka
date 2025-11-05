import { Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage/AboutPage';
import HomePage from '../pages/HomePage/HomePage'
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import Playground from '../pages/Playground/Playground';
import LayoutComponent from '../components/layoutComponent';

const RouteManagement = () => {
    return (
        <LayoutComponent>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/project' element={<ProjectPage/>}/>
                <Route path='/playground' element={<Playground/>}/>
            </Routes>
        </LayoutComponent>
    )
}

export default RouteManagement;