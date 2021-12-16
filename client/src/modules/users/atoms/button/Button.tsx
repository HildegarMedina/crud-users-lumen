import './Button.css';

interface PropsButton {
    text: string
    onPress?: () => void
}

function Button(prop: PropsButton) {
    return (
        <button type='button' onClick={() => {
            if (prop.onPress) {
                prop.onPress();
            }
        }}>
            {prop.text}
        </button>
    );
  }
  
  export default Button;
  
  