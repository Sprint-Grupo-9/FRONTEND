
import HeaderScreen from './HeaderScreen'
import ProfileScreen from './ProfileScreen'
import AppointsScreen from './AppointsScreen'
import PetsScreen from './PetsScreen'
import ServicesScreen from './ServicesScreen'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CalendarScreen from './CalendarScreen'
import ProfilePetScreen from './ProfilePetScreen'

function System() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProfileScreen />} />
                    <Route path="/services" element={<ServicesScreen />} />
                    <Route path="/appointments" element={<AppointsScreen />} />
                    <Route path="/pets" element={<PetsScreen />} />
                    <Route path="/calendar" element={<CalendarScreen />} />
                    <Route path="/profile-pet" element={<ProfilePetScreen />} />

                </Routes>
            </BrowserRouter>
                
        </>
    )
}

export default System