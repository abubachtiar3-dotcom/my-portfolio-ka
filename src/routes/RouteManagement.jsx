import HomePage from '../pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom';

const RouteManagement = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    )
}

export default RouteManagement;