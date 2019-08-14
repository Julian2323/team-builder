import React, { useState } from "react";
import teamMembers from "../Data";

const Form = props => {
    const [member, setMember] = useState({ name: "", email: "", role: "" });

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        const newMember ={
            ...member,
            id: Date.now()
        };
        props.addNewMember(newMember);
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={member.name}
                onChange={changeHandler}
            />

            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                placeholder="Enter Email"
                value={member.email}
                onChange={changeHandler}
            />

            <label htmlFor="role">Role</label>
            <input
                type="text"
                name="role"
                placeholder="Enter Role"
                value={member.role}
                onChange={changeHandler}
            />

            <button type="submit">Enter</button>
        </form>


    );
};

export default Form;