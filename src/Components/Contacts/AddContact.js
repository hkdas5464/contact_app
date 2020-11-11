import React, { createContext, useState } from 'react'
import shortid from 'shortid';
import {useDispatch} from 'react-redux';
import {addContact} from '../../actions/contactaction'
import {useHistory} from 'react-router-dom';
function AddContact() {
    let history= useHistory();
    const dispatch =useDispatch();
    const [name, setName]=useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")

    const createContact=(e)=>{
        e.preventDefault();
        const new_contact={
            id:shortid.generate(),
            name:name,
            phone:phone,
            email:email
        }
      dispatch(addContact(new_contact));
      history.push("/")
    }

console.log(name,email,phone)
  
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={(e)=> createContact(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your name" onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Your Phone"
                            onChange={(e)=>setphone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Your Email"
                            onChange={(e)=>setemail(e.target.value)} />
                    </div>
                    <button className="btn btn-primary">
                        Add Contact
           
                    </button>
                </form>
            </div>
        </div>

    )
}

export default AddContact
