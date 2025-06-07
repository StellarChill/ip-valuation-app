import { useState } from "react";
import InputField from "./InputField";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { name, email, company, phone };
    console.log(formData);
    // ส่งข้อมูลไปหลังบ้านได้ที่นี่
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField label="ชื่อ-สกุล" value={name} onChange={(e) => setName(e.target.value)} />
      <InputField label="อีเมล" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField label="บริษัท/หน่วยงาน" value={company} onChange={(e) => setCompany(e.target.value)} />
      <InputField label="เบอร์โทร" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button type="submit">ยืนยัน</button>
    </form>
  );
}
