import AuthTemp from "../../components/auth/AuthTemp";
import RegisterForm from "../../components/designs/forms/RegisterForm";
import Layout from "../../components/layout/Layout";

function Register() {
  return (
    <>
      <Layout>
        <AuthTemp
          title="Register"
          imgUrl="https://images.unsplash.com/photo-1546198632-9ef6368bef12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        >
          <RegisterForm />
        </AuthTemp>
      </Layout>
    </>
  );
}

export default Register;
