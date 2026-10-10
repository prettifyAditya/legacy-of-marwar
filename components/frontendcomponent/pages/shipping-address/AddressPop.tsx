"use client";
import { useModal } from "@/hooks/useModal";
import { useAppSelector } from "@/store/hooks";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

export default function AddressPop() {
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
            <Input placeholder="Name" type="text" name="name" id="name" />
            <Input placeholder="Phone" type="text" name="phone" id="phone" />
          </div>
          <h6>Address</h6>
          <div className="form-grid">
            <Input
              classname="full"
              placeholder="Pin Code"
              type="text"
              name="pincode"
              id="pincode"
            />
            <Input
              classname="full"
              placeholder="Address ( House No, Building, Street, Area)"
              type="text"
              name="address"
              id="address"
            />
            <Input
              classname="full"
              placeholder="Locality/ Town"
              type="text"
              name="locality"
              id="locality"
            />
            <Input
              placeholder="City/ District"
              type="text"
              name="city"
              id="city"
            />
            <Input placeholder="State" type="text" name="state" id="state" />
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
