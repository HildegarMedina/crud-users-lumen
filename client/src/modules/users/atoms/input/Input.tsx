import './Input.css';

interface InputProps {
    title: string,
    type: string
}

function Input(prop: InputProps) {

  return (
      <div>
          <input type={prop.type} placeholder={prop.title} />
      </div>
  );
}

export default Input;

