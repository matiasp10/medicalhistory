import Nav from './Nav';
import style from '../../styles/Paciente.module.css';
import InfoPaciente from './InfoPaciente';

function Paciente() {
  return (
    <div className={style.main}>
      <Nav />
      <div className={style.container}>
        <InfoPaciente />
      </div>
    </div>
  );
}

// TODO: Informacion del paciente
//
//
//
//
//
//
//
//

export default Paciente;
