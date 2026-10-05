"use client";
import Image from "next/image";
import { useState } from "react";
import type { SyntheticEvent, SubmitEvent } from "react";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";
import Button from "../atoms/Button";
import "@/uploads/sass/component/component.css";

interface ContactFormData {
  companyName: string;
  phone: string;
  email: string;
  message: string;
}

export default function DetailForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    companyName: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form className="contact_form form" onSubmit={handleSubmit}>
      <div className="icon">
        <Image
          src="/icon/logo-vector.svg"
          width="51"
          height="51"
          alt="Logo_vector"
        ></Image>
      </div>
      <div className="form-grid">
        <Input
          type="text"
          label="Company Name *"
          name="companyName"
          id="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          label="Phone *"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          label="Email *"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          label="Message *"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div className="btn_wrap">
        <Button
          classname="solid-secondary"
          buttonText="Enquire Now"
          type="submit"
        ></Button>
      </div>
    </form>
  );
}
