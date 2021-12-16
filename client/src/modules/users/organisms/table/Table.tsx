import Button from '../../atoms/button/Button';
import { User } from '../../types/User';
import './Table.css';

interface TableProps {
    rows: User[]
}

function Table(prop: TableProps) {
    console.log(prop.rows);
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(prop.rows[0]).map((value, index) => (
                        <th key={index}>{value}</th>
                    ))}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {prop.rows.map((value, index) => (
                    <tr>
                        <td key={index}>{value.email}</td>
                        <td key={index}>{value.password}</td>
                        <td><Button text="Editar"/> <Button text="Eliminar"/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;

