import AuthTemp from "../../components/auth/AuthTemp";
import RegisterForm from "../../components/designs/forms/RegisterForm";
import Layout from "../../components/layout/Layout";

function Register() {
  return (
    <>
      <Layout>
        <AuthTemp title="Register">
          <RegisterForm />
        </AuthTemp>
      </Layout>
    </>
  );
}

export default Register;
