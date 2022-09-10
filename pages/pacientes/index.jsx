import style from '../../styles/Pacientes.module.css';
import Nav from '../components/Nav';
import ListaPacientes from '../components/ListaPacientes';
function Pacientes() {
  return (
    <div className={style.main}>
      <Nav />
      <div className={style.container}>
        <div className={style.buttonContainer}>
          <button className={style.addPatient}>Agregar Paciente</button>
        </div>
        <ListaPacientes />
      </div>
    </div>
  );
}

export default Pacientes;
