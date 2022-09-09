import style from '../../styles/Nav.module.css';
import Calendar from './Calendar';
import HomeIcon from './HomeIcon';
import Users from './Users';
export default function Nav() {
  return (
    <nav className={style.container}>
      <div className={style.logoDiv}>
        <span className={style.firstName}>DANIEL </span>
        <span className={style.lastName}>SAN MARTIN</span>
      </div>
      <div className={style.divisor}></div>
      <div className={style.linksContainer}>
        <div className={style.link}>
          <HomeIcon />
          <a href="" className={style.links}>
            Inicio
          </a>
        </div>
        <div className={style.link}>
          <Users />
          <a href="" className={style.links}>
            Pacientes
          </a>
        </div>
        <div className={style.link}>
          <Calendar />
          <a href="" className={style.links}>
            Turnos
          </a>
        </div>
      </div>
      <div>
        <button className={style.loginButton}>Ingresar</button>
      </div>
    </nav>
  );
}
