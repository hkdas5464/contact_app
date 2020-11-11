import React, { createContext, useState ,useEffect} from 'react'
import shortid from 'shortid';
import {useDispatch, useSelector} from 'react-redux';
import {getContact, updateContact} from '../../actions/contactaction'
import {useHistory} from 'react-router-dom';
import {Link,useParams} from 'react-router-dom'
function EditContact() {
    let history= useHistory();
    const dispatch =useDispatch();
    const contact = useSelector((state) => state.contacts.contact);
    const [name, setName]=useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const {id} = useParams()

  

console.log(name,email,phone)


useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setphone(contact.phone);
      setemail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact]);
  const onUpdateContact =(e)=> {e.preventDefault();
    const update_contact = Object.assign(contact,{name:name ,email:email,phone:phone})

    dispatch(updateContact(update_contact))
    history.push("/")


   
    console.log(update_contact)
}
  
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={(e)=> onUpdateContact(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your name" value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
    
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Phone"
                            defaultValue={phone}
                            onChange={(e)=>setphone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Your Email"
                            defaultValue={email}
                            onChange={(e)=>setemail(e.target.value)} />
                    </div>
                    <button className="btn btn-danger" type="submit">
                        Update Contact
           
                    </button>
                </form>
            </div>
        </div>

    )
}

export default EditContact
