

import React from "react";

class ClassBase extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      formData: [],
    };
  }
  clearForm = () => {
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  }

  ClearTable = () => {
    this.setState({
      formData: [],
    });
  }
  
  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    const { name, email, password, formData } = this.state;

    // if (name.trim() === "") {
     
    //   document.getElementById('name-error').textContent = "Please enter a name";
    //   return;
    // } else {
    //   document.getElementById('name-error').textContent = "";
    // }
    // let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // if (email === "") {
    //   document.getElementById('emailError').textContent =
    //     "Email is required";
    //   return;
    // } else if (!email.match(emailPattern)) {
    //   document.getElementById('emailError').textContent =
    //     "Please enter a valid email address";
    //   return;
    // }
    // document.getElementById("emailError").textContent = "";

    // //password
    // const password = document.getElementById('Password').value;

    // if (password === "") {
    //   document.getElementById('password-error').textContent =
    //     "Password is required";

    // } else if (!password.length < 8) {
    //   document.getElementById('password-error').textContent =
    //     "Password must be at least 8 characters";

    // }
    // document.getElementById('password-error').textContent = "";

    // function Validate() {
    //   //console
    //   console.log('Email:', email, 'Password:', password);
    // }
    // if(this.SubmitHandler){

    //   Validate();
    // }
    //  if(name===""){
    //   document.getElementById('name-error').textContent="please enter the name";
    //   return;
    //  }

    //  if(email===""){
    //   document.getElementById('email-error').textContent="please enter the email";
    //   return;
    //  }

    //  if(password===""){
    //   document.getElementById('password-error').textContent="please enter the password";
    //  }
    const newData = {
      name: name,
      email: email,
      password: password,
    };

    const updatedData = [...formData, newData];
 
    this.setState({
      formData: updatedData,
        
    });
    
  };
   
  render() {
    return (
      <div>
        <p className="text-center">Just for testing Form</p>
        <div className="form ">
          <h1 className="text-center">Form</h1>
          <form onSubmit={this.submitHandler}>

            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" id="name" required value={this.state.name} onChange={this.inputChangeHandler} />
            <div id="name-error" className="error"></div>

            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="email" id="email" required value={this.state.email} onChange={this.inputChangeHandler} />

            <div id="emailError" className="error"></div>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control" id="password" required value={this.state.password} onChange={this.inputChangeHandler} />
            <div id="password-error" className="error"></div>
            <br />
            <button type="submit">Submit</button>

            <button type="reset" id="clearForm" className="mx-4" onClick={this.clearForm} >Clear</button>

          </form>
        </div>

     
        <div className="ResultDiv">
          <h2>Result</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>

              </tr>
            </thead>
            <tbody>
              {this.state.formData.map((value, index) => (
                <tr key={index}>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button id="cleartable" className="mt-3 " onClick={this.ClearTable}>Clear data </button>
        </div>
      </div>
    );
  }
}

export default ClassBase;

