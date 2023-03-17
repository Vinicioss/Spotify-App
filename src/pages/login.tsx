import { getProviders , signIn } from 'next-auth/react'
import { LoginContainer } from '../styles/pagestyle';
import 'remixicon/fonts/remixicon.css'
import Head from 'next/head';

const Login = ({providers}) => {

  return (
    <LoginContainer>

      <Head>
          <title>Login | App</title>
          <meta
          name="description"
          content="Faça Login para acessar os seus dados"
          />
      </Head>

      <i className="ri-spotify-fill"></i>
      
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className='login_button'
          onClick={() => signIn(provider.id, {callbackUrl: "/"})}>Entrar com {provider.name}</button>
        </div>
      ))}
    </LoginContainer>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}