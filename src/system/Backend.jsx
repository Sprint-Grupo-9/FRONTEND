import { useEffect, useState } from 'react'
import './System.css'
import { api } from '../providers/apiInstance'

function Backend() {
  useEffect(()=>{},[])

  function adicionarUsuario() {
    api.post("/usuarios", {
      nome: "Pedro",
      dataNascimento: "2001-08-19",
      profissao: "Professor"
    })
  }

  function buscarUsuario() {
    api.get("/usuarios")
    .then(response=>{
      console.log(response.data)
    })
  }

  function atualizarUsuario() {
    api.patch("/usuarios/e906", {
      nome: "Vamp",
      dataNascimento: "2003-05-10",
      profissao: "Vampiro"
    })
  }

  function removerUsuario() {
    api.delete("/usuarios/e906")
    .then(response=>{
      console.log("Usuario deletado")
    })
  }
  

  return (
    <>
      <button onClick={adicionarUsuario} className='button-primary'>Adicionar Usuario</button>
      <button onClick={buscarUsuario} className='button-primary'>Buscar Usuario</button>
      <button onClick={atualizarUsuario} className='button-primary'>Atualizar Usuario</button>
      <button onClick={removerUsuario} className='button-primary'>Remover Usuario</button>
    </>
  )
}

export default Backend
