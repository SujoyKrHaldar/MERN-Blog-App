import AuthTemp from "../../components/auth/AuthTemp";
import LoginForm from "../../components/designs/forms/LoginForm";
import Layout from "../../components/layout/Layout";

function Login() {
  return (
    <>
      <Layout>
        <AuthTemp
          title="Log in"
          imgUrl="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        >
          <LoginForm />
        </AuthTemp>
      </Layout>
    </>
  );
}

export default Login;
