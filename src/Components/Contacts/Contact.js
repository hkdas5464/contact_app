import React from 'react';
import Avatar  from 'react-avatar';
import {Link} from 'react-router-dom';
import {deleteteContact} from '../../actions/contactaction';
import {useDispatch} from 'react-redux'

function Contact(props) {
    const dispatch = useDispatch()
    const {name,phone,email,id} =props;
    return (
 
            <tr>
                <td ><div className="custom-control custom-checkbox">
                    
                    {id}
                </div></td>
                <td key={name}><Avatar className="mr-2" name={name} size='45' round={true}/>{name}</td>
                <td key={phone}>{phone}</td>
                <td key={email}>{email}</td>
                <td className="actions">
                    <Link to={`/contacts/edit/${id}`}>
                        <span className="material-icons mr-2 ">edit</span></Link>
                        <Link>
                        <span onClick={()=>dispatch(deleteteContact(id))} className="material-icons text-danger">remove_circle</span>
                        </Link>
                </td>
            </tr>
    
    )
}

export default Contact
