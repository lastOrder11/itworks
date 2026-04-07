import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ LOGIQUE EMAILJS (A COMPLÉTER AVEC TES INFOS PLUS TARD)
    emailjs
      .send(
        'service_2hebza4', // Remplace par ton SERVICE ID d'EmailJS
        'template_2td8cym', // Remplace par ton TEMPLATE ID d'EmailJS
        {
          from_name: form.name,
          to_name: "Vannel",
          from_email: form.email,
          to_email: "contact@jsmastery.pro", // Ton email
          message: form.message,
        },
        'H3xwiMyL4A6OyDgq3' // Remplace par ta PUBLIC KEY d'EmailJS
      )
      .then(
        () => {
          setLoading(false);
          alert("Merci ! Je reviens vers toi dès que possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Désolé, quelque chose s'est mal passé. Reessaie s'il te plaît.");
        }
      );
  };

  return (
    <section id="contact" className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 mt-20 border-t border-[#1e293b]">
      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        
        {/* LE FORMULAIRE DE CONTACT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          className='flex-[0.75] bg-tertiary p-8 rounded-2xl border border-[#1e293b]'
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Contact</p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Get in touch.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Ton Nom</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Vannel"
                className='bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-[#1e293b] font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Ton Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="ton.email@gmail.com"
                className='bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-[#1e293b] font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Ton Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Que veux-tu construire ?'
                className='bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-[#1e293b] font-medium'
              />
            </label>

            <button
              type='submit'
              className='gold-gradient py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:scale-105 transition-transform'
            >
              {loading ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </motion.div>

        {/* CÔTÉ IA / DÉCORATIF (🔮 Boule de cristal d'IA) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex items-center justify-center'
        >
          <motion.div
            className="text-[200px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🔮
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;