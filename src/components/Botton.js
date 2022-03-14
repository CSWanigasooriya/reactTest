
import './Button.css';

function Button(props) {
    return (
        <button className="button" style={{ width: props.width }}>{props.name}</button>
    );
}


export default Button;
