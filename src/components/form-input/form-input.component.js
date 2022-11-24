import './form-input.styles.scss';


const FormInput = ({label, ...otherProps}) => {

    // const floatingValue = (otherProps) => {
    //     return otherProps.value.length ? 'shrink' : null
    // }

    return  (

        <div className= 'group'>
            <input className='form-input' {...otherProps} />
            {label && (
                <label
                className={`${otherProps.value.length ? 'shrink' : null} 
                form-input-label`}>
                {label}
                </label>
            )}
        </div>
    )
};

export default FormInput;