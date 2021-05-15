import React,{useState} from 'react'
import './signup.css'
import axios from 'axios'

export const TalentSignup = () => {
    const [favButtoncolor,favsetButtoncolor] = useState(true)
    const [talentButtoncolor,talentsetButtoncolor] = useState()
    const [first_name,setFname] = useState('')
    const [ferr,setFerr] = useState('')
    const [last_name,setLname] = useState('')
    const [lerr,setLerr] = useState('')
    const [username,setUsername] = useState('')
    const [uerr,setUerr] = useState('')
    const [email,setEmail] = useState('')
    const [eerr,setEerr] = useState('')
    const [timezone,setTimezone] = useState('')
    const [terr,setTerr] = useState('')
    const [password,setPassword] = useState('')
    const [perr,setPerr] = useState('')

    const buttonhandler=()=>{
        favsetButtoncolor(true)
        talentsetButtoncolor(false)
    }
    const buttonhandlertalent=()=>{
        favsetButtoncolor(false)
        talentsetButtoncolor(true)
    }
    const Signupsubmit=(data)=>{
        if(first_name.length === 0){
            setFerr('Please enter valid name')
        }else if(last_name.length === 0){
            setLerr('Please enter valid name')
        }
        else if(username.length === 0){
            setUerr('Please enter valid name')
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            setEerr('Please enter valid email')
        }
        else if(timezone.length === 0){
            setTerr('Please enter Timezone')
        }
        else if(password.length < 6){
            setPerr('Please enter minimum 6 charecter')
        }
        else if(data === 'fav'){
            setFerr('')
             setLerr('')
             setUerr('')
             setEerr('')
             setTerr('')
             setPerr('')
            axios.post('https://apidev.fanconvo.com/api/v3/sign-up/fan',{
                first_name:first_name,
                last_name:last_name,
                username:username,
                email:email,
               password:password,
               timezone:timezone,
               captcha: true
            })
        }
        else if(data === 'talent'){
            setFerr('')
            setLerr('')
            setUerr('')
            setEerr('')
            setTerr('')
            setPerr('')
            axios.post('https://apidev.fanconvo.com/api/v3/sign-up/talent',{
                first_name:first_name,
                last_name:last_name,
                username:username,
                email:email,
               password:password,
               timezone:timezone,
               captcha: true
            })
        }

    }
  

    // console.log(fname)

    return (

        <div className='container text-white content mt-5 p-5'>
            
            
            <div className='textalign topbtn mb-2'><button className={favButtoncolor?'btncolor1':"topbtn1"} onClick={buttonhandler}>FAV SIGNUP</button> 
            <button className={talentButtoncolor?'btncolor1':"topbtn1"} onClick={buttonhandlertalent}> TALENT SIGNUP</button></div>
            <h3 className='textalign'>Create Your Fan Account</h3>
            <div className='mt-3'>
                <label >First Name*</label>
                
                <input className='d-block mt-2 text-white' type='name' placeholder='First name' onChange={(e)=>setFname(e.target.value)}></input>
                <p className='err'>{ferr}</p>
            </div>
           
            <div className='mt-3 '>
                <label>Last Name*</label>
                
                <input className='d-block mt-2 text-white' type='name' placeholder='Last name' onChange={(e)=>setLname(e.target.value)}></input>
                <p className='err'>{lerr}</p>
            </div>
            <div className='mt-3 '>
                <label>Username*</label>
                
                <input className='d-block mt-2 text-white' type='name' placeholder='Username' onChange={(e)=>setUsername(e.target.value)}></input>
                <p className='err'>{uerr}</p>
            </div>
            <div className='mt-3 '>
                <label>Email*</label>
                
                <input className='d-block mt-2 text-white' type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}></input>
                <p className='err'>{eerr}</p>
            </div>
            <div className='mt-3 '>
                <label>Timezone*</label>
                
                <input className='d-block mt-2 text-white' placeholder='PST8PDT - 06:20 AM' onChange={(e)=>setTimezone(e.target.value)}></input>
                <p className='err'>{terr}</p>
            </div>
            <div className='mt-3 '>
                <label>Password*</label>
                
                <input className='d-block mt-2 text-white' type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
                <p className='err'>{perr}</p>
            </div>

            <p className='textalign checkbox mt-3' > <input className='checkbox' checked type='checkbox'></input>I agree to the <span>Terms and Conditions.</span></p>
            <button className=' btn signupbtn' onClick={favButtoncolor?()=>Signupsubmit("fav"):()=>Signupsubmit("talent")}>SIGN UP</button>
            <div className='textalign mt-2'>Already have a account? <span className='color'> Log-in</span></div>
        </div>
    )
}

export default TalentSignup