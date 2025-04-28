
import IconButton from '../components/IconButton'
import Textbox from '../components/Textbox'
import UserImage from '../components/UserImage'
import Backend from './Backend'

import UserIcon from '../assets/user-icon.svg'
import ServicesIcon from '../assets/services-icon.svg'
import AppointsIcon from '../assets/appoints-icon.svg'
import PetsIcon from '../assets/pets-icon.svg'
import PenciIcon from '../assets/pencil-icon.svg'
import ExcludeIcon from '../assets/exclude-icon.svg'
import LeftIcon from '../assets/left-arrow.svg'

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'

import './System.css'
import HeaderScreen from './HeaderScreen'
import Service from '../components/Service'
import Subservice from '../components/Subservice'
import Card from '../components/Card'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function CalendarScreen() {

  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('selectedServices');
    if (stored) {
      setSelectedServices(JSON.parse(stored));
    }
  }, []);

  const [selectedSubservices, setSelectedSubservices] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem('selectedSubservices');
    if (stored) {
      setSelectedSubservices(JSON.parse(stored));
    }
  }, []);

  const navigate = useNavigate();

  const goToProfile = () => navigate("/");

  const goToServices = () => navigate("/services");

  const goToAppoints = () => navigate("/appointments");

  const goToPets = () => navigate("/pets");

  const goToProfilePet = () => navigate("/profile-pet");

  const goToCalendar = () => navigate("/calendar");

  return (
    <div>
      <HeaderScreen Titulo="Serviços - Calendário" />
      <div className="user-screen">
        <div className='total-content'>
          <div className="navigation-content">
            <div className="user-profile">
              <UserImage />
              <h2>Matheus</h2>
            </div>
            <div className="navigation-buttons">
              <IconButton action={goToProfile} link={UserIcon} text={'Perfil'} active={false} />
              <IconButton action={goToServices} link={ServicesIcon} text={'Serviços'} active={true} />
              <IconButton action={goToAppoints} link={AppointsIcon} text={'Agendamentos'} active={false} />
              <IconButton action={goToPets} link={PetsIcon} text={'Pets'} active={false} />
            </div>
          </div>

          <div className='content'>
            <button className='button-secondary-2' onClick={goToServices}><img src={LeftIcon} width={10} /> Voltar aos Serviços</button>
            <div className="row">
              <Calendar/>
            </div>

            {selectedServices.length > 0 && (
              <div className="row-button">
                {selectedServices.map((service, index) => (
                  <button key={index} className="button-none">{service}</button>
                ))}
              </div>
            )}

            {Object.keys(selectedSubservices).length > 0 && (
              <div className="row-button">
                {Object.entries(selectedSubservices).map(([subservice, isActive], index) => (
                  isActive && (
                    <button key={index} className="button-none-2">{subservice}</button>
                  )
                ))}
              </div>
            )}

            <div className="row">
              <button className='button-primary'> Agendar </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CalendarScreen
