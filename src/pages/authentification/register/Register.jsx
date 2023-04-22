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
            <div className="field btn">
                <input className="btn-layer" type="submit" value="Se connecter avec Facebook" />
            </div>
          
            <form action="#" className="signup">
                    <div className="field">
                      <input type="text" placeholder="E-mail, telephone ou nom d'ulitisateur" required />
                    </div>
                    <div className="field">
                      <input type="text" placeholder="E-mail, telephone ou nom d'ulitisateur" required />
                    </div>
                    <div className="field">
                      <input type="text" placeholder="E-mail, telephone ou nom d'ulitisateur" required />
                    </div>
                    <div className="field">
                      <input type="text" placeholder="E-mail, telephone ou nom d'ulitisateur" required />
                    </div>
              </form>
         
              <div className="space-btn">
                  <NavLink to="/forgetpass"><p>Mot de passe oublié ?</p></NavLink>
                    <p>Les personnes qui utilisent notre service ont pu importer vos 
                      coordonnées sur Instagram. En savoir plus
                    </p>
                    <p>En vous inscrivant, vous acceptez nos Conditions générales. 
                      Découvrez comment nous recueillons, utilisons et partageons 
                      vos données en lisant notre Politique de confidentialité et comment nous utilisons les cookies et autres technologies similaires en consultant notre Politique d’utilisation des cookies.
                    </p>
                    <div className="field btn">
                        <input className="btn-layer" type="submit" value="Suivant" />
                    </div>
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