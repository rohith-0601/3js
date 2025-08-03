import React, { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Fox } from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();
  const [currentAnimation, setcuurentAnimation] = useState("idle");
  const {alert,showAlert,hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setcuurentAnimation("walk");
  const handleBlur = () => setcuurentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setcuurentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // alert("Message sent successfully!");
        
        setIsLoading(false);
        showAlert({show:true,text:"Message sent successfully",type:"success"})

        setTimeout(()=>{
          hideAlert();
          setcuurentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        },3000)
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        // alert("Failed to send message.");
        showAlert({show:true,text:"Message not sent",type:"danger"})
        setIsLoading(false);
        setcuurentAnimation("sad");
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container ">
      {alert.show && <Alert {...alert}/>}
      {/* <Alert {...alert}/> */}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Rohith"
              value={form.name}
              required
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="you@gmail.com"
              value={form.email}
              required
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}

            />
          </label>
          <label className="text-black-500 font-semibold">
            Message
            <textarea
              name="message"
              className="input"
              placeholder="Let's Talk"
              value={form.message}
              required
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Contact;
