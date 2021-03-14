import './button.css'

const Button = ({onClick,text,disabled,className}) => {
    return (  
        <>
            <button onClick={onClick} disabled={disabled} className={className}>{text}</button>
        </>
    );
}
 
export default Button;