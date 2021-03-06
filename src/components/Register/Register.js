import React from 'react';


class Register extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        name: ''
      }
    }
    onNameChange = (event) => {
      this.setState({name: event.target.value})
    }
    onEmailChange = (event) => {
      this.setState({email: event.target.value})
    }
  
    onPasswordChange = (event) => {
      this.setState({password: event.target.value})
    }
    onSubmit = () => {
      fetch('http://localhost:3000/register' ,{
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name
        })
      })
      .then(response => response.json())
      .then(user => {
        if(user){
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })

    }

  render(){
    
    return (
        <article className="mw6 center v-mid  br3 pa3 pa4-ns mv3 ba dark-gray shadow-5 b--black-10">
        <main className="pa4 black-80  ">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0 white">Register</legend>
            <div className="mt3">
              <label className="db white fw6 lh-copy f6" htmlFor="name">Name</label>
              <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" onChange={this.onNameChange} />
            </div>
            <div className="mt3">
              <label className="db white fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange} />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
              <input className="ba pa2 input-reset b--black bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
            </div>
          
          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent white grow pointer f6 dib pointer" type="submit" value="Register" onClick={this.onSubmit} />
          </div>
         
         
        </div>
        </main>
        </article>
 
      
    );
  }
}

export default Register;