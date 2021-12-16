import axios from 'axios';
import { useContext, useState } from 'react';
import { UserContexts } from '../../../../contexts/UserContext';
import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';
import './Form.css';

function Form() {

  const { email, password, createUser, setEmail, setPassword } = useContext(UserContexts);

  return (
      <>
        <form>
            <h2>Create user</h2>

            <Input type='text' title='Email' value={email} onPress={(event) => {
              setEmail(event.target.value);
            }}/>
            <Input type='text' title='Password' value={password} onPress={(event) => {
              setPassword(event.target.value);
            }}/>

            <Button text='Create' onPress={createUser}/>
        </form>
      </>
  );
}

export default Form;

