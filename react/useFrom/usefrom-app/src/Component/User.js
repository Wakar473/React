import * as React from "react";
import { useForm } from "react-hook-form";

export default function User() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      fullname: "",
      emailid: "",
      Address: "",
      // checkbox: [],
    },
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
     <br /> <br />{" "}
      <input
        {...register("firstName", { required: true })}
        placeholder="First name"
      />
    <br />  <br />{" "}
      <input
        {...register("lastName", { minLength: 2 })}
        placeholder="Last name"
      />
    <br />  <br />{" "}
      <input
        {...register("fullname", { minLength: 2 })}
        placeholder="full name"
      />
    <br />  <br />{" "}
      <input
        {...register("emailid", { minLength: 2 })}
        placeholder="email id"
      />
      <br />{" "}
      <br />  <input {...register("Address", { minLength: 2 })} placeholder="Address" />
      {/* <option value="">Select</option> */}
      <br /> <br />{" "}
      <select {...register("category")}>
        <option value="">Select college</option>
        <option value="A">CGC</option>
        <option value="A">CU</option>
        <option value="A">PU</option>
        <option value="A">DU</option>
        <option value="A">Chitkra</option>
      </select>

      <br /> <br />{" "}
      <select {...register("category")}>
        <option value="">Select Branch</option>
        <option value="A">B.tech</option>
        <option value="A">MBA</option>
        <option value="A">BCA</option>
        <option value="A">BBA</option>
        <option value="A">MCA</option>
        <option value="A">other</option>
      </select>
      <br /> <br />{" "}
      <select {...register("category")}>
        <option value="">Select country</option>
        <option value="A">India</option>
        <option value="A">Rush</option>
        <option value="A">America</option>
        <option value="A">Pakistan</option>
        <option value="A">other</option>
      </select>
      <br /> <br />{" "}
      <select {...register("category")}>
        <option value="">Select State</option>
        <option value="A">Bihar</option>
        <option value="A">UP</option>
        <option value="A">Punjab</option>
        <option value="A">HP</option>
        <option value="A">Hariyan</option>
      </select>
      <br /> <br />{" "}
      <select {...register("category")}>
        <option value="">Select Language</option>
        <option value="A">Hindi</option>
        <option value="A">English</option>
        <option value="A">Punjabi</option>
        <option value="A">other</option>
       
      </select>
      <br /> <br />{" "}
      <select {...register("category")}>
        <option value="">Select Technology</option>
        <option value="A">React.JS</option>
        <option value="A">Node.js</option>
        <option value="A">PHP</option>
        <option value="A">BlockChain</option>
        <option value="A">Digital Marketing</option>
      </select>
      <br />  <br /> <input type="submit" />
    </form>
  );
}
