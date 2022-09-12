import Loggito from '../utils/Loggito'
import withContext from '../utils/withContext'
import authenticateUser from '../logics/authenticateUser'
import updateUserPassword from '../logics/updateUserPassword'
import { useReducer } from 'react'


function Profile({ onLinkClick, context: { handleFeedback }}) {

    const logger = new Loggito('Settings')

    const handleFormSubmit = event => {
        event.preventDefault()

        const { target: form } = event
        const {oldPassword:{value:oldPassword}, newPassword:{value:newPassword}, newPasswordRepeat:{value:newPasswordRepeat}} = form

    try {
        updateUserPassword(
          sessionStorage.token,
          oldPassword,
          newPassword,
          newPasswordRepeat,
          error => {
            if (error) {
              handleFeedback({ message: error.message, level: 'warning'})

              logger.warn(error.message)
    
              return;
            }
            // alert("Password updated");
            
            handleFeedback({ message: 'Password Updated', level: 'success'})
            // onCloseClick ()
            // form.reset() //para limpiar el formulario luego del cambio de contraseña.//
          });
      } catch(error) {
        handleFeedback({message: error.message, level:'warning'})

        logger.warn(error.message)
      }
    }
    
    
    return <div className="update-profile container">
      
    <form className="update-password-form form" onSubmit={handleFormSubmit}>
        <div className="form__field">
          <h3 className="tittleProfile"> Your profile </h3>
            <label htmlFor="changeProfile">Change Name</label>
            <input className="input" type="text" name="changeProfile" placeholder="New Name" id="changeProfile" />
        </div>

        <div className="form__field">
            <label htmlFor="gender">Your Gender</label>
            <div className='GenderProfile'>
            <button>Male</button>
            <button>Female</button>
            <button>No Binary</button>
            </div>
        </div>

        <div className="form__field">
            <label htmlFor="city">City</label>
            <input className="input" type="text" name="city" placeholder="city" id="city" />
        </div>

        <div className="form__field">
            <label htmlFor="AboutYou">AboutYou</label>
            <input className="input" type="text" name="AboutYou" placeholder="About you..." id="AboutYou" />
        </div>

        <button className="button" type="submit">Change Profile</button>
    </form>
</div>

}

export default withContext(Profile)