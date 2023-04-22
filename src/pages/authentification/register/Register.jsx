import React from 'react'
import { NavLink } from 'react-router-dom'
import "../authentification.css"
import "../../../components/footer/Footer.css"

const Register = () => {
  return (
    <div className="container">
      <div className='container-card'>
        <div className="card-content">
            <div className='block'>
                <h1>Instagram</h1>
                <p>Inscrivez-vous pour voir les photos 
                  et vidéos de vos amis.
                </p>
            </div>
          <div className="space-btn">
          <button className="btn-color">Se connecter avec Facebook</button>
          </div>
          <div className='dp-input'>
          <input type="text" id="name" placeholder="Numéro de mobile ou e-mail"></input>
          <input type="password" id="name" placeholder="Nom complet"></input>
          <input type="text" id="name" placeholder="Nom d'ulitisateur"></input>
          <input type="password" id="name" placeholder="Mot de passe"></input>
          </div>
         
          <div className="space-btn">
          <NavLink to="/forgetpass"><p>Mot de passe oublié ?</p></NavLink>
            <p>Les personnes qui utilisent notre service ont pu importer vos 
              coordonnées sur Instagram. En savoir plus
            </p>
            <p>En vous inscrivant, vous acceptez nos Conditions générales. 
              Découvrez comment nous recueillons, utilisons et partageons 
              vos données en lisant notre Politique de confidentialité et comment nous utilisons les cookies et autres technologies similaires en consultant notre Politique d’utilisation des cookies.
            </p>
            <button className="btn-color">Suivant</button>
          </div>
        </div>
      </div>

      <div className='container-card-child'>
        <div className="card-content">
        <p>Vous n'avez pas de compte ? <NavLink className="sp-color" to="/register">Connectez-vous</NavLink> </p>
        </div>
      </div>  
    </div>
  )
}

export default Register