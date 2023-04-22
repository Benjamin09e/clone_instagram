import React from 'react'
import { NavLink } from 'react-router-dom'
import "../authentification.css"
import "../../../components/footer/Footer.css"

const ForgetPass = () => {
  return (
    <div className="container">
      <div className='container-card'>
        <div className="card-content">
            <div className='block'>
                <h1>Instagram</h1>
                <p>Problèmes de connexion</p>
                
                
            </div>
            <div>
                  <p>Entrez votre adresse e-mail, votre numéro de téléphone 
                    ou votre nom d’utilisateur, et nous vous enverrons un 
                    lien pour récupérer votre compte.
                  </p>
            </div>
          <input type="text" id="name" placeholder="E-mail, telephone ou nom d'ulitisateur "></input>
          <div className="space-btn">
            <button className="btn-color">Envoyer un lien ou nom d'utilisateur</button>
          </div>
          <div className="space-btn">
            <NavLink to="/forgetpass"><p>Vous ne parvenez pas à reintiliser votre mot de passe ?</p></NavLink>
          </div>
          <div className="space-btn">
            <p>Créer un compte</p>
          </div>
        </div>
      </div>
      <div className='container-card-child'>
        <div className="card-content">
        <p>Vous n'avez pas de compte ?<NavLink className="sp-color" to="/register">Inscrivez-vous</NavLink> </p>
        </div>
      </div>  
    </div>
  )
}

export default ForgetPass