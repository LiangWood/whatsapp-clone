import { Button } from '@material-ui/core';
import styled from 'styled-components';
import Head from 'next/head';
import { auth, provider } from '../firebase';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo src="https://www.flaticon.com/svg/vstatic/svg/220/220236.svg?token=exp=1617024272~hmac=e1c1fbbfb117359aed24a6afa8824fd4"/>
                <Button onClick={signIn} variant="outlined">Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
    background-color: white;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7)
`;

const Logo = styled.img`
    height:200px;
    width: 200px;
    margin-bottom: 50px;    
`;
