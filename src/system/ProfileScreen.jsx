
import IconButton from '../components/IconButton'
import Textbox from '../components/Textbox'
import UserImage from '../components/UserImage'
import Backend from './Backend'

import UserIcon from '../assets/user-icon.svg'
import ServicesIcon from '../assets/services-icon.svg'
import AppointsIcon from '../assets/appoints-icon.svg'
import PetsIcon from '../assets/pets-icon.svg'
import PenciIcon from '../assets/pencil-icon.svg'
import SaveIcon from '../assets/save-icon.svg'
import ExcludeIcon from '../assets/exclude-icon.svg'

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useRef } from 'react';

import './System.css'
import HeaderScreen from './HeaderScreen'

function ProfileScreen() {

  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/");
  };

  const goToServices = () => {
    navigate("/services");
  };

  const goToAppoints = () => {
    navigate("/appointments");
  };

  const goToPets = () => {
    navigate("/pets");
  };

  const [editable, setEditable] = useState(false);

  const initialData = {
    nome: 'Matheus',
    cpf: '440.824.488-02',
    email: 'matheus@gmail.com',
    telefone: '(11) 94023-4507',
    cep: '01504-000',
    numero: '266',
    complemento: 'Ap. 51',
    logradouro: 'Rua Vergueiro',
    bairro: 'Liberdade',
    senha: '***********',
    confirmarSenha: '***********',
  };

  const [userData, setUserData] = useState(initialData);

  const originalData = useRef(initialData);

  const toggleEdit = () => {
    if (!editable) {
      originalData.current = { ...userData };
      setEditable(true);
    } else {
      setUserData(originalData.current);
      setEditable(false);
    }
  };

  const saveData = () => {
    console.log("Dados salvos:", userData);
    setEditable(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <HeaderScreen Titulo="Perfil do Usuário" />
      <div className="user-screen">
        <div className='total-content'>
          <div className="navigation-content">
            <div className="user-profile">
              <UserImage />
              <h2>Matheus</h2>
            </div>
            <div className="navigation-buttons">
              <IconButton link={UserIcon} text={'Perfil'} active={true} />
              <IconButton action={goToServices} link={ServicesIcon} text={'Serviços'} active={false} />
              <IconButton action={goToAppoints} link={AppointsIcon} text={'Agendamentos'} active={false} />
              <IconButton action={goToPets} link={PetsIcon} text={'Pets'} active={false} />
            </div>
          </div>

          <div className='content'>

            <div className="row-button">
              {editable && (
                <button className='button-secondary-2' onClick={saveData}>
                  <img src={SaveIcon} width={20} /> Salvar Dados
                </button>
              )}
              <button className='button-primary' onClick={toggleEdit}> 
                {editable ? <img src={ExcludeIcon} width={20} /> : <img src={PenciIcon} width={20} />} 
                {editable ? "Cancelar" : "Editar Dados"} 
              </button>
            </div>

            <div className="row">
              <Textbox
                label='Nome'
                placeholder='Matheus'
                value={userData.nome}
                name="nome"
                onChange={handleChange}
                disabled={!editable}
              />
              <Textbox
                label='CPF'
                placeholder='440.824.488-02'
                value={userData.cpf}
                name="cpf"
                onChange={handleChange}
                disabled={!editable}
              />
            </div>

            <div className="row">
              <Textbox
                label='Email'
                placeholder='matheus@gmail.com'
                value={userData.email}
                name="email"
                onChange={handleChange}
                disabled={!editable}
              />
              <Textbox
                label='Telefone'
                placeholder='(11) 94023-4507'
                value={userData.telefone}
                name="telefone"
                onChange={handleChange}
                disabled={!editable}
              />
            </div>

            <div className="row">
              <Textbox
                label='CEP'
                placeholder='01504-000'
                value={userData.cep}
                name="cep"
                onChange={handleChange}
                disabled={!editable}
                size="2"
              />
              <Textbox
                label='Número'
                placeholder='266'
                value={userData.numero}
                name="numero"
                onChange={handleChange}
                disabled={!editable}
                size="3"
              />
              <Textbox
                label='Complemento'
                placeholder='Ap. 51'
                value={userData.complemento}
                name="complemento"
                onChange={handleChange}
                disabled={!editable}
              />
            </div>

            <div className="row">
              <Textbox
                label='Logradouro'
                placeholder='Rua Vergueiro'
                value={userData.logradouro}
                name="logradouro"
                onChange={handleChange}
                disabled={!editable}
              />
              <Textbox
                label='Bairro'
                placeholder='Liberdade'
                value={userData.bairro}
                name="bairro"
                onChange={handleChange}
                disabled={!editable}
              />
            </div>

            <div className="row">
              <Textbox
                label='Senha'
                placeholder='***********'
                value={userData.senha}
                name="senha"
                onChange={handleChange}
                disabled={!editable}
              />
              <Textbox
                label='Confirmar Senha'
                placeholder='***********'
                value={userData.confirmarSenha}
                name="confirmarSenha"
                onChange={handleChange}
                disabled={!editable}
              />
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default ProfileScreen
