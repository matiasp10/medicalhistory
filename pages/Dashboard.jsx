import style from '../styles/Dashboard.module.css';

import ListaPacientes from './components/ListaPacientes';
import Nav from './components/Nav';
import Turnos from './components/Turnos';

function Dashboard() {
  return (
    <div className={style.main}>
      <Nav />
      <div className={style.container}>
        <div>
          <Turnos />
        </div>
        <div>
          <ListaPacientes />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
