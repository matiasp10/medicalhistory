import style from '../styles/Login.module.css';
import Nav from './components/Nav';
function Login() {
  return (
    <div className={style.container}>
      <Nav />
      <div className={style.contentContainer}>
        <div className={style.loginContainer}>
          <div className={style.leftContainer}>
            <div className={style.logoLogin}>
              <span className={style.firstName}>Daniel</span>
              <span className={style.lastName}>San Martin</span>
            </div>
            <div className={style.loginTitle}>
              <h2>Iniciar Sesión</h2>
            </div>
            <form className={style.loginForm}>
              <span className={style.loginUsername}>Nombre de usuario</span>
              <input className={style.input} type="text" />

              <span className={style.loginPassword}>Contraseña</span>
              <input className={style.input} type="password" name="" id="" />

              <button className={style.loginButton} type="submit">
                Log In
              </button>
            </form>
            <div className={style.boxCopyright}>
              <p className={style.loginCopyright}>
                © 2022 - 2022 Empresa X - All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
        <div className={style.imgContainer}>
          <img
            className={style.img}
            src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="doctorGuantes"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
