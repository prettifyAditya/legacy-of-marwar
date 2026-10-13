"use client";
import Link from "next/link";
import { useState } from "react";
import type { SyntheticEvent, SubmitEvent } from "react";
import Select from "../../atoms/Select";
import DateRangeFilter from "./DateRangeFilter";

interface StatusOptions {
  label: string;
  value: string;
}

interface FormData {
  status: StatusOptions[];
}

const statusOptions: StatusOptions[] = [
  { label: "Pending", value: "Pending" },
  { label: "Fulfilled", value: "Fulfilled" },
  { label: "Reject", value: "Reject" },
];

export default function OrderList() {
  const [formData, setFormData] = useState<FormData>({
    status: [],
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
    <div className="aside-right order-right">
      <div className="aside-right-wrap">
        <div className="title order_title">
          <h3 className="form-title">My Orders</h3>
          <div className="filter_options">
            <p>Filter by</p>
            <div className="form flex">
              <Select
                classname="status_list"
                label="Status"
                name="status"
                id="status"
                options={statusOptions}
              />
              <DateRangeFilter />
            </div>
          </div>
        </div>
        <div className="order_list">
          <div className="order_item">
            <div className="order_id">
              <p className="id">1252562859</p>
              <p>Deliver on 25, June 2025</p>
            </div>
            <div className="order_content">
              <div className="upper_content">
                <div className="order_name">
                  <p className="name">Women flexible bangle bracelet</p>
                  <p className="price">INR 15000</p>
                </div>
                <div className="btn_wrap">
                  <Link href="" className="btn secondary-border">
                    <span className="sm-none">Download Invoice</span>
                    <span className="sm-block">Invoice</span>
                  </Link>
                  <Link href="/order-detail" className="btn secondary-border">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="trans_details">
                <p>
                  Txn ID : <span>22525222</span>
                </p>
                <p>
                  Status : <span>Pending</span>
                </p>
                <p>
                  Order Date : <span>24, June 2025</span>
                </p>
                <p className="total_price">
                  Total Price : <span>INR 15000</span>
                </p>
              </div>
            </div>
          </div>
          <div className="order_item">
            <div className="order_id">
              <p className="light-green id">Delivered</p>
              <p>Deliver on 25, June 2025</p>
            </div>
            <div className="order_content">
              <div className="upper_content">
                <div className="order_name">
                  <p className="name">Women flexible bangle bracelet</p>
                  <p className="price">INR 15000</p>
                </div>
                <div className="btn_wrap">
                  <Link href="" className="btn secondary-border">
                    <span className="sm-none">Download Invoice</span>
                    <span className="sm-block">Invoice</span>
                  </Link>
                  <Link href="" className="btn secondary-border">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="trans_details">
                <p>
                  Txn ID : <span>22525222</span>
                </p>
                <p>
                  Status : <span>Pending</span>
                </p>
                <p>
                  Order Date : <span>24, June 2025</span>
                </p>
                <p className="total_price">
                  Total Price : <span>INR 15000</span>
                </p>
              </div>
            </div>
          </div>
          <div className="order_item">
            <div className="order_id">
              <p className="light-green id">Delivered</p>
              <p>Deliver on 25, June 2025</p>
            </div>
            <div className="order_content">
              <div className="upper_content">
                <div className="order_name">
                  <p className="name">Women flexible bangle bracelet</p>
                  <p className="price">INR 15000</p>
                </div>
                <div className="btn_wrap">
                  <Link href="" className="btn secondary-border">
                    <span className="sm-none">Download Invoice</span>
                    <span className="sm-block">Invoice</span>
                  </Link>
                  <Link href="" className="btn secondary-border">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="trans_details">
                <p>
                  Txn ID : <span>22525222</span>
                </p>
                <p>
                  Status : <span>Pending</span>
                </p>
                <p>
                  Order Date : <span>24, June 2025</span>
                </p>
                <p className="total_price">
                  Total Price : <span>INR 15000</span>
                </p>
              </div>
            </div>
          </div>
          <div className="order_item">
            <div className="order_id">
              <p className="light-green id">Delivered</p>
              <p>Deliver on 25, June 2025</p>
            </div>
            <div className="order_content">
              <div className="upper_content">
                <div className="order_name">
                  <p className="name">Women flexible bangle bracelet</p>
                  <p className="price">INR 15000</p>
                </div>
                <div className="btn_wrap">
                  <Link href="" className="btn secondary-border">
                    <span className="sm-none">Download Invoice</span>
                    <span className="sm-block">Invoice</span>
                  </Link>
                  <Link href="" className="btn secondary-border">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="trans_details">
                <p>
                  Txn ID : <span>22525222</span>
                </p>
                <p>
                  Status : <span>Pending</span>
                </p>
                <p>
                  Order Date : <span>24, June 2025</span>
                </p>
                <p className="total_price">
                  Total Price : <span>INR 15000</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
