import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';
import './Form.css';

function Form() {

  return (
      <>
        <form>
            <h2>Create user</h2>

            <Input type='text' title='Email'/>
            <Input type='text' title='Password'/>

            <Button text='Create'/>
        </form>
      </>
  );
}

export default Form;

