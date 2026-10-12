"use client";
import { useState } from "react";
import type { SyntheticEvent, SubmitEvent } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Textarea from "../../atoms/Textarea";
import Select from "../../atoms/Select";

interface ProductOptions {
  label: string;
  value: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  products: ProductOptions[];
  message: string;
}

const productOptions: ProductOptions[] = [
  { label: "Product 1", value: "Product 1" },
  { label: "Product 2", value: "Product 2" },
  { label: "Product 3", value: "Product 3" },
  { label: "Product 4", value: "Product 4" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    products: [],
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
    <section>
      <div className="contact_form sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>Your Journey to Timeless Elegance Begins Here</h2>
          </div>
          <form action="" className="form">
            <div className="form-grid">
              <Input
                type="text"
                label="Name *"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                label="Email *"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                label="Phone *"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Select
                label="Products *"
                name="products"
                id="products"
                options={productOptions}
              />
              <Textarea
                classname="full"
                label="Message *"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="btn_wrap">
              <Button buttonText="Enquire Now" classname="solid-primary" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
