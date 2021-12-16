import './Button.css';

interface PropsButton {
    text: string
}

function Button(prop: PropsButton) {
    return (
        <button>
            {prop.text}
        </button>
    );
  }
  
  export default Button;
  
  