import style from '../../styles/Turnos.module.css';

function Turnos() {
  const turnos = [
    {
      name: 'Josesito',
      time: '15:45',
      mutual: 'Mutual Medica',
    },
    {
      name: 'Pedrito',
      time: '16:45',
      mutual: 'Mutual Medica',
    },
    {
      name: 'Patricia Sosa',
      time: '17:45',
      mutual: 'Mutual Medica',
    },
    {
      name: 'Don raul de los montes santa maria de la rosareda',
      time: '18:45',
      mutual: 'Mutual Medica',
    },
  ];

  return (
    <div className={style.container}>
      <h2 className={style.title}>Turnos de hoy</h2>
      <table className={style.table}>
        <thead>
          <tr className={style.thead}>
            <th className={style.paciente}>Paciente</th>
            <th className={style.turno}>Turno</th>
            <th className={style.mutual}>Mutual</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno) => {
            return (
              <tr id={turno.name} className={style.tbody}>
                <td>{turno.name}</td>
                <td>{turno.time}</td>
                <td>{turno.mutual}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Turnos;
