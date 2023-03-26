// import React from "react";
// import Textra from 'react-textra'
// 


// function ContactMe() {
//  return (
//   <div className="main">
//    <div>
//     <div>
//      <Textra effect='flash' data={['Contact me']} />
//     </div>

//     <label>name:</label><br />
//     <input type='text' /><br />
//     <label>email adress:</label><br />
//     <input type='email' />
//     <div>
//      <label>
//       Write your post:<br />
//       <textarea name="postContent" rows={4} cols={40} />
//      </label>

//     </div>
//     <button className="submit">submit</button>
//    </div>
//   </div>

//  )
// }
// export default ContactMe

import { useForm } from "react-hook-form";
import './contact-me.css'

export default function ContactMe() {
 const { register, formState: { errors }, handleSubmit } = useForm();
 const onSubmit = (data) => console.log(data);

 return (
  <div className="main">
   <div>
    <form onSubmit={handleSubmit(onSubmit)}>
     <label>name:</label><br />
     <input className="name"
      {...register("firstName", { required: true })}
      aria-invalid={errors.firstName ? "true" : "false"}
     /><br />
     {errors.firstName?.type === 'required' && <p role="alert">name is required</p>}
     <label>email adress:</label><br />
     <input className="email"
      {...register("mail", { required: "Email Address is required" })}
      aria-invalid={errors.mail ? "true" : "false"}
     />
     {errors.mail && <p role="alert">{errors.mail?.message}</p>}<br />
     <label>Message:</label><br />
     <input className="massage"
      {...register("massage", { required: "message is required" })}
      aria-invalid={errors.massage ? "true" : "false"}
     /><br />
     {errors.massage && <p role="alert">{errors.massage?.message}</p>}<br />
     <input type="submit" className="submit" />
    </form>
   </div>
  </div>

 );
}
