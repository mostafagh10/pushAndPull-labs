import { equals, isEmpty } from "validator";
import isEmail from "validator/lib/isEmail";
import { Errormessage, Successmessage } from "../helpers/message";
import { useState } from "react";

function Register() {
    const [formdata, setformdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        photo: null,
        successmsg: false,
        errormsg: false,
    });

    /*      destructuring the state       */
    const { name, email, password, confirmpassword, photo, successmsg, errormsg } = formdata;

    /*   event handler      */
    const handlechange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setformdata({
            ...formdata,
            photo: e.target.files[0],
        });
    };

    const handlesubmit = (e) => {
        e.preventDefault();

        if (
            isEmpty(name) ||
            isEmpty(email) ||
            isEmpty(password) ||
            isEmpty(confirmpassword) ||
            !photo
        ) {
            setformdata({
                ...formdata,
                successmsg: "",
                errormsg: "All fields are required",
            });
        } else if (!isEmail(email)) {
            setformdata({
                ...formdata,
                successmsg: "",
                errormsg: "The email format is invalid",
            });
        } else if (!equals(password, confirmpassword)) {
            setformdata({
                ...formdata,
                successmsg: "",
                errormsg: "The passwords don't match",
            });
        } else {
            setformdata({
                name: "",
                email: "",
                password: "",
                confirmpassword: "",
                photo: null,
                errormsg: "",
                successmsg: "Your data saved successfully",
            });
        }
    };

    return (
        <div className="container">
            {errormsg ? <Errormessage message={errormsg} /> : <></>}
            {successmsg ? <Successmessage message={successmsg} /> : <></>}
            <form onSubmit={handlesubmit}>
                <input
                    className="form-control mb-4"
                    name="name"
                    value={name}
                    placeholder="Enter your name"
                    onChange={handlechange} />
                <input
                    className="form-control mb-4"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={handlechange} />
                <input
                    className="form-control mb-4"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={handlechange} />
                <input
                    className="form-control mb-4"
                    name="confirmpassword"
                    value={confirmpassword}
                    placeholder="Confirm your password"
                    onChange={handlechange} />
                <input 
                    className="form-control mb-4"
                    type="file" 
                    onChange={handleFileChange} />
                <button type="submit" className="btn btn-dark">
                    Sign up
                </button>
            </form>
        </div>
    );
}
export default Register;
