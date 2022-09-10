import Nav from '../components/Nav';
import style from '../../styles/Paciente.module.css';
import InfoPaciente from '../components/InfoPaciente';
import { useRouter } from 'next/router';

function Paciente() {
  const pacientes = useRouter();
  console.log(pacientes.query);

  return (
    <div className={style.main}>
      <Nav />
      <div className={style.container}>
        <InfoPaciente dni={pacientes.query.paciente} />
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
