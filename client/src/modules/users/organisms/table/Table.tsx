import { useContext } from 'react';
import { UserContexts } from '../../../../contexts/UserContext';
import Button from '../../atoms/button/Button';
import { User } from '../../types/User';
import './Table.css';

interface TableProps {
    rows: User[]
}

function Table(prop: TableProps) {

    const { deleteUser, updateUser } = useContext(UserContexts)

    return (
        prop.rows.length > 0 ? (
            <table>
                <thead>
                    <tr>
                        {Object.keys(prop.rows[0]).map((value, index) => (
                            index < 3 && (
                                <th key={index+1}>{value}</th>
                            )
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {prop.rows.map((value, index) => (
                        <tr key={index+1}>
                            <td key={index+1+'id'}>{value.id}</td>
                            <td key={index+1+'email'}>{value.email}</td>
                            <td key={index+1+'pass'}>{value.password}</td>
                            <td>
                                <Button text="Editar" color='info' onPress={() => updateUser(value.id, value.email, value.password)}/> 
                                <Button text="Eliminar" color='danger' onPress={() => deleteUser(value.id)}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ): (
            <>
                <h2>Empty</h2>
            </>
        )
    );
}

export default Table;

