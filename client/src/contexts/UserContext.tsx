import axios from "axios";
import { createContext, useState } from "react";
import { User } from "../modules/users/types/User";

//Interface
interface UserContextsData {
    users: User[],
    setUsers: (user:User[]) => void,
    email: string,
    setEmail: (emaiL:string) => void,
    password: string,
    setPassword: (password:string) => void,
    resetInput: () => void,
    saveUser: () => void,
    getAllUsers: () => void,
    deleteUser: (id:number) => void
    updateUser: (id:number, email:string, password:string) => void
}

//Export context
export const UserContexts = createContext({} as UserContextsData);

//Export provider
export function UserContextsProvider({children}:any) {

    const [users, setUsers] = useState<User[]>([]);

    const getAllUsers = async () => {
        const users = await axios('http://localhost:8000/api/v1/users');
        setUsers(users.data.items);
    }

    const [id, setId] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const resetInput = () => {
        setEmail("");
        setPassword("");
        setId(0);
    }

    const saveUser = async () => {

        if (id !== 0) {
            try {
                const response = await axios.put("http://localhost:8000/api/v1/users/"+id, {
                    email: email,
                    password: password
                });

                if(response.status === 200) {
                    alert("User updated");
                }
                
                resetInput();
                getAllUsers();
            } catch (error:any) {
                if (error.response.data.email) {
                    alert(error.response.data.email)
                }else if (error.response.data.password) {
                    alert(error.response.data.password)
                }
            }
        }else {
            try {
                const response = await axios.post("http://localhost:8000/api/v1/users", {
                    email: email,
                    password: password
                });
            
                if(response.status === 201) {
                    alert("User created");
                }
                
                resetInput();
                getAllUsers();
                
            } catch (error:any) {
                if (error.response.data.email) {
                    alert(error.response.data.email)
                }else if (error.response.data.password) {
                    alert(error.response.data.password)
                }
            }
        }
    }

    const deleteUser = async (id:number) => {
        try {
            const response = await axios.delete("http://localhost:8000/api/v1/users/"+id);
        
            if(response.status === 200) {
                alert("User deleted");
            }
            
            getAllUsers();
            
        } catch (error:any) {
            if (error.response.data.message) {
                alert(error.response.data.message)
            }
        }
    }

    const updateUser = async (id:number, email:string, password:string) => {
        setEmail(email);
        setPassword(password);
        setId(id);
    }

    return (
        <UserContexts.Provider value={{
            users,
            setUsers,
            email,
            setEmail,
            password,
            setPassword,
            resetInput,
            saveUser,
            getAllUsers,
            deleteUser,
            updateUser
        }}>
            {children}
        </UserContexts.Provider>
    )
}