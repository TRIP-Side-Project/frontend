import { ChangeEvent } from "react";

export interface signupInputProps {
  title: string;
  type: string;
  value: string;
  name: string;
  placeholder: string;
  changeValue: (event: ChangeEvent<HTMLInputElement>) => void;

}
const SignupInfo = ({title, type, value, name, placeholder, changeValue }:signupInputProps) => {
  const signupInfoStyle = "border w-full rounded-md h-12 pl-3 border-BASIC_BLACK";
  return (
    <div>
      <h2 className="pb-2">{title}<span className="text-ETC_COLOR"> *</span></h2>
      <input type={type} value={value} name={name} onChange={changeValue} placeholder={placeholder} className={signupInfoStyle}></input>
    </div>
  )
}
export default SignupInfo;