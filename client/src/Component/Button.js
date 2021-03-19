import './button.css'

const Button = ({onClick,text,disabled,className,style}) => {
    return (  
        <>
            <button onClick={onClick} disabled={disabled} className={className} style={{style}}>{text}</button>
        </>
    );
}
 
export default Button;