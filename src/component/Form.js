import React, {useState} from 'react'

const Form = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [totalvalue, settotalvalue]=useState("");
    const sumbitform=(e)=>{
        const ntotal={ email: email,password: password};
        settotalvalue([...totalvalue,ntotal]);
        console.log(ntotal);
    }
  return (
    <>
    <form action='' onSubmit={sumbitform} className='gd'>
        <div className='bk'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' value={email} 
            onChange={(e)=> setemail(e.target.value)}
                />
        </div>
        <div className='lk'>
            <label htmlFor='password'>Password</label>
            <input type='text' name='email' id='password' value={password}
             onChange={(e)=> setpassword(e.target.value)}/>
        </div>
        <button type='sumbit' className='kk'>login</button>

    </form>
        

    </>
  )
}

export default Form
