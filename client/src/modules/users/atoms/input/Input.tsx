import './Input.css';

interface InputProps {
    title: string,
    type: string
    value: string
    onPress: (value:any) => void 
}

function Input(prop: InputProps) {

    return (
        <div>
            <input type={prop.type} placeholder={prop.title} value={prop.value} onChange={prop.onPress}/>
        </div>
    );
}

export default Input;

