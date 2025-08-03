import React, { useState } from 'react'
import emailjs from "@emailjs/browser";

function Contact() {
  const [form,setform] = useState({name:"",email:"",message:""});
  const [isloading,setisloading] = useState(false)
  const fromRef = useRef(null)
  const handleChange = (e)=>{
    setform({...form},{[e.target.name]:e.target.value})

  };
  const handleFocus = ()=>{

  };
  const handleBlur = () =>{

  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setisloading(true);

    emailjs.sendForm(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name:form.name,
        to_name:"Rohith",
        from_email:form.email,
        to_email:"rohithperugu3@gmail.com",
        message:form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      
    )


  }
  return (
    <section className='relative flex lg:flex-row flex-col max-container '>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch </h1>
      </div>
      <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
        <label className='text-black-500 font-semibold'>
          Name
          <input type='text' name='name' className='input' placeholder='Rohith' value={form.name} required onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
       
        </label>
        <label className='text-black-500 font-semibold'>
          Email
          <input type='email' name='email' className='input' placeholder='You@gmail.com' value={form.email} required onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
       
        </label>
        <label className='text-black-500 font-semibold'>
          Message
          <textarea type='text' name='Message' className='input' placeholder='Lets Talk' value={form.message} required onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
       
        </label>
        <button type='submit' className='btn' onFocus={handleFocus} onBlur={handleBlur} disabled={isloading}>
          {isloading ? "sending...":"send"}


        </button>

      </form>
    </section>
  )
}

export default Contact