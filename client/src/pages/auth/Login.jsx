import AuthTemp from "../../components/auth/AuthTemp";
import LoginForm from "../../components/designs/forms/LoginForm";
import Layout from "../../components/layout/Layout";

function Login() {
  return (
    <>
      <Layout>
        <AuthTemp title="Log in">
          <LoginForm />
        </AuthTemp>
      </Layout>
    </>
  );
}

export default Login;
