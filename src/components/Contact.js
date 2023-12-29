import React, {useState} from 'react'
import axios from "axios"
import './contact.css'
const Contact = () => {
    const [Values,setValues] = useState({name:"",email:"",message:""})
    const change = (e)=>{
        const {name, value} = e.target;
        setValues({...Values, [name]:value})
    };
    const submit =async(e)=>{
        e.preventDefault();
        if(Values.name ==="" || Values.email ==="" || Values.message ==="" ){
            alert("all fields required")
        }
        else{
            await axios.post("http://localhost:9000/post",Values).then((res)=>{
                alert(res.data.message)
            })
            setValues({
                name:"",email:"",message:""
            })
        }
    }
  return (
    <section className="contact">

        <form >
            <h2>Contact Us</h2>

            <input type="text" placeholder="name" name="name" value={Values.name} onChange={change}/>
            <input type="text" placeholder="email" name="email" value={Values.email} onChange={change}/>

            <textarea placeholder="message" cols="30" rows="10" name="message" value={Values.message} onChange={change}></textarea>

            <button type="submit"  onClick={submit}>Submit</button>
        </form>

        
        
    </section>
  )
}

export default Contact