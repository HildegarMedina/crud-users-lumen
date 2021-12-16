import './Button.css';

interface PropsButton {
    text: string
    onPress?: () => void
    color?: string
}

function Button(prop: PropsButton) {
    return (
        <button className={prop.color ? prop.color: ''} type='button' onClick={() => {
            if (prop.onPress) {
                prop.onPress();
            }
        }}>
            {prop.text}
        </button>
    );
  }
  
  export default Button;
  
  