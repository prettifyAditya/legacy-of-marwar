"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { SyntheticEvent, SubmitEvent } from "react";
import Input from "../../atoms/Input";
import Textarea from "../../atoms/Textarea";
import FileInput from "../../atoms/FileInput";
import Button from "../../atoms/Button";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

export default function ProfileForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
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
    <div className="aside-right">
      <div className="aside-right-wrap">
        <h4 className="form-title">My Profile</h4>
        <div className="form form-grid">
          <Input
            type="text"
            label="First Name *"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            label="Last Name"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
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
          <Input
            type="text"
            label="Email *"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            classname="full"
            label="Message *"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
          />
          <div className="profile_pic">
            <p>Profile Picture</p>
            <FileInput classname="file-group" name="file" id="file" />
          </div>
          <div className="submit-grp full text-left">
            <Button classname="solid-secondary" buttonText="update profile" />
          </div>
        </div>
        <div className="delivery_add">
          <div className="title">
            <h6 className="form-title">Delivery Address</h6>
            <button type="button" className="btn secondary-border">
              <span className="sm-none">Add New Address</span>
              <span className="sm-block">Add Address</span>
            </button>
          </div>
          <div className="add_wrapper">
            <div className="address">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#000"
                    d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"
                  ></path>
                  <path
                    fill="#000"
                    d="m16 30l-8.436-9.949a35 35 0 0 1-.348-.451A10.9 10.9 0 0 1 5 13a11 11 0 0 1 22 0a10.9 10.9 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 1 0-18 0a8.9 8.9 0 0 0 1.813 5.395"
                  ></path>
                </svg>
              </div>
              <div className="content">
                <p className="title">Billing Address</p>
                <p>
                  Unit No. 804, Tower -B, Unitech Business Zone, Golf Course Ext
                  Rd, Sector 50, Gurugram, Haryana
                </p>
                <div className="btn_wrap">
                  <button type="button" className="remove">
                    remove
                  </button>
                  <button type="button" className="edit">
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="address">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#000"
                    d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"
                  ></path>
                  <path
                    fill="#000"
                    d="m16 30l-8.436-9.949a35 35 0 0 1-.348-.451A10.9 10.9 0 0 1 5 13a11 11 0 0 1 22 0a10.9 10.9 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 1 0-18 0a8.9 8.9 0 0 0 1.813 5.395"
                  ></path>
                </svg>
              </div>
              <div className="content">
                <p className="title">Billing Address</p>
                <p>
                  Unit No. 804, Tower -B, Unitech Business Zone, Golf Course Ext
                  Rd, Sector 50, Gurugram, Haryana
                </p>
                <div className="btn_wrap">
                  <button type="button" className="remove">
                    remove
                  </button>
                  <button type="button" className="edit">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
