import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

export const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_msa04jj',
    'template_s91j1mj',
    e.target,
    'QeF-ppcN0tRjumggG'
  )
  .then(() => {
       toast.success(" Message sent successfully!");
  })
  .catch(() => {
   
     toast.success("Failed to Send Message!");
  });
};