import React, {useRef, useState} from 'react';
import { FormGroup, InputGroup, Card, Button} from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    //const {signup, currentUser} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function submitHandler(e) {
        e.preventDefault()

        try {
           setError('');
           setLoading(true);
           //await signup(emailRef.current.value, passwordRef.current.value)
        } 
        
        catch(err) {
            setError('Failed to create an account');
            console.log(err);
        }

        setLoading(false);
        
    }

    return (
        <Wrapper>
            <h1>Store Admin Dashboard</h1>
            <Card className="card">
                <h2>Sign Up</h2>
                {/*currentUser && currentUser.email*/}
                {error && <p className="error">{error}</p> }
                <form onSubmit={submitHandler}>
                    <FormGroup className="form" label="Email" labelFor="text-input" labelInfo="(required)">
                        <InputGroup type="email" id="email" placeholder="Email" ref={emailRef} />
                    </FormGroup>
                    <FormGroup className="form" label="Password" intent="white" labelFor="text-input" labelInfo="(required)">
                        <InputGroup type="password" id="password" placeholder="Password" ref={passwordRef}  />
                    </FormGroup>
                
                    <Button disabled={loading} className="signUpBtn" type="submit">Login</Button>
                </form>
            </Card>
           <div className="login-box">
           <h3>Already have an account?</h3>
            <Link>Log in</Link>
           </div>
        </Wrapper>

    );
}

const Wrapper = styled.div `
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px auto;
    padding: 0px 10px;
    min-height:100vh;
    color:white;
    .card {
        max-width: 400px;
        margin: 20px auto;
        width: 100%;
  
        background: var(--header-bg);
        .bp3-text-muted {
            color: #ffffffd1;
        }
        .error {
            color:#ff8484;
            font-style:italic;
        }
       
    }
    form {
        max-width:100%;
        display:flex;
        flex-direction: column;
    }
    h2 {
        text-align:center;
        font-size: 1.6rem;
        color: white;
    }
    h3 {
        color:black;
    }
    .signUpBtn {
        align-self: flex-end;
        color: var(--header-bg);
        font-weight: 500;
    }
    .login-box {
        text-align: center;
    }
    a{
        color: var(--header-bg);
        font-weight:500;
    }
`

export default Login;

