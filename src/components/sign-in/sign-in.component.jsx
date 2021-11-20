import React from "react";

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.util';
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value});
    }
     handleSubmit=event=>   {
        event.preventDefault();
        this.setState({email:'',password:''});
    }    
    
    render(){return(
        <div className="signin">
            <h1>already have an account</h1>
            <span className="">Sign in with email and password</span>
            <form onSubmit={this.handleSubmit}> 
                <FormInput type="email"  name="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>
               
                <FormInput  type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required/>
               <div className="button">
                   <CustomButton type="submit" > SING IN </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                        {' '}SING IN WITH GOOGLE {' '}
                    </CustomButton>
   
               </div>
                         </form>

        </div>
    )
    }
}
export default SignIn;