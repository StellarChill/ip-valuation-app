// Component นี้จะใช้ซ้ำได้กับทุกช่องกรอก
type InputFieldProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({ label, value, onChange }: InputFieldProps) {
  return (
    <div>
      <label>{label}</label><br />
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}
