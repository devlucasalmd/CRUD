import {React, useState} from 'react'

function InputField({type, placeholder, icon}) {
  
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    return (
    <div className='input-wrapper'>
        <input type={type} placeholder={placeholder} className="input-field" required/>
        <i className="material-symbols-outlined ">{icon}</i> 
        {/* // rounded */}

        {type === 'password' && (
            <i onClick={() => setIsPasswordShown(prevState => !prevState)} className="material-symbols-outlined eye-icon">{isPasswordShown ? 'visibility' : 'visibility_off'}
            </i>
        )}
                
    </div>

    // <div className='input-wrapper'>
    // <input type="password"placeholder='Password' className="input-field" required/>
    // <i className="material-symbols-outlined">lock</i>
    // </div>
  )
}

export default InputField