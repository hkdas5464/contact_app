import React from 'react';
import { useSelector } from 'react-redux';
import MYContact from './Contact'

function Table() {

    const contacts = useSelector(state => state.contacts.contacts)
    console.log(contacts)
    return (
        <div>
            <div className="container">
                <div className="py-3">
                    <table className="table shadow ">
                        <thead >
                            <tr >
                                <th  ><div className="custom-control custom-checkbox">
                                  Sl.No
                                </div></th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email_Id</th>
                                <th>Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map(contact => (
                                <MYContact name={contact.name} phone={contact.phone} email={contact.email} key={contact.id}  id={contact.id}/>
                            ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Table
