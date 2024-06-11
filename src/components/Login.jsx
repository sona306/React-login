import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const [login,setData]=useState(
        {
                "uname":'',
                "pwd":''
        }
    )
    const inputHandler=(event)=>{
        setData({...login,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(login)
        axios.post("http://localhost:8081/login",login).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status="success") {
                    alert("Successful Login")
                } else {
                    alert("Invalid login")
                }
            }
        ).catch()
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                    <label htmlFor="" className="form-label">UserName</label>
                    <input type="text" className="form-control" name='uname' value={login.uname} onChange={inputHandler}/>
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="text" className="form-control" name='pwd' value={login.pwd} onChange={inputHandler}/><br></br>
                    <button className="btn btn-info" onClick={readValue}>Login Now</button><br></br><br></br>
                    <a href="/add">No Account? Sign Up</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login