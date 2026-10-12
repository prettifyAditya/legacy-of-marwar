"use client";
import { useState } from "react";
import type { SyntheticEvent, SubmitEvent } from "react";
import { useModal } from "@/hooks/useModal";
import { useAppSelector } from "@/store/hooks";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

interface AddressFormData {
  name: string;
  phone: string;
  pincode: string;
  address: string;
  locality: string;
  city: string;
  state: string;
}

export default function AddressPop() {
  const [formData, setFormData] = useState<AddressFormData>({
    name: "",
    phone: "",
    pincode: "",
    address: "",
    locality: "",
    city: "",
    state: "",
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
  const { closeModal } = useModal();
  const { isModal } = useAppSelector((state) => state.modal);
  return (
    <div
      className={`model address-pop ${isModal === "addressPop" ? "is-open" : ""}`}
    >
      <button
        type="button"
        className="close"
        aria-label="Close menu"
        onClick={closeModal}
      >
        <svg
          width={26}
          height={26}
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="model-body">
        <div className="title">
          <h4>Add New Address</h4>
        </div>
        <div className="form">
          <h6>Contact Details</h6>
          <div className="form-grid">
            <Input
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              placeholder="Phone"
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <h6>Address</h6>
          <div className="form-grid">
            <Input
              classname="full"
              placeholder="Pin Code"
              type="text"
              name="pincode"
              id="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
            <Input
              classname="full"
              placeholder="Address ( House No, Building, Street, Area)"
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
            />
            <Input
              classname="full"
              placeholder="Locality/ Town"
              type="text"
              name="locality"
              id="locality"
              value={formData.locality}
              onChange={handleChange}
            />
            <Input
              placeholder="City/ District"
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
            />
            <Input
              placeholder="State"
              type="text"
              name="state"
              id="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div className="disclaimer">
            <div className="check-box">
              <input type="checkbox" name="default" />
              <div className="in-bx"></div>
            </div>
            <p>Make this my default address</p>
          </div>
          <Button classname="solid-primary" buttonText="add address" />
        </div>
      </div>
    </div>
  );
}
