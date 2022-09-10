import { useState } from 'react';
import style from '../../styles/ListaPacientes.module.css';
import Chevronleft from './Chevronleft';
import Chevronright from './Chevronright';
import Search from './Search';
function ListaPacientes() {
  const [newfilter, setFilter] = useState('');
  const pacientes = [
    {
      name: 'Jorge',
      mutual: 'Mutual Medica',
      link: '/pacientes/65874',
    },
    {
      name: 'Jose',
      mutual: 'Mutual Medica',
      link: '/pacientes/234235',
    },
    {
      name: 'Pepe',
      mutual: 'Mutual Medica',
      link: '/pacientes/6576745',
    },
    {
      name: 'Roman',
      mutual: 'Mutual Medica',
      link: '/pacientes/65874554',
    },
    {
      name: 'Gerardo',
      mutual: 'Mutual Medica',
      link: '/pacientes/999999',
    },
    {
      name: 'Luis',
      mutual: 'Mutual Medica',
      link: '/pacientes/11111',
    },
  ];
  const filtrado = pacientes.filter((paciente) => {
    return paciente.name.toLowerCase().includes(newfilter.toLowerCase());
  });

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Lista de pacientes</h2>
      <div className={style.search}>
        <Search />
        <input
          className={style.searchBar}
          type="text"
          value={newfilter}
          onChange={handleFilter}
          placeholder="Buscar paciente"
        />
      </div>

      <table className={style.table}>
        <thead>
          <tr className={style.thead}>
            <th className={style.paciente}>Paciente</th>
            <th className={style.mutual}>Mutual</th>
            <th className={style.historial}>Historial clinico</th>
          </tr>
        </thead>
        <tbody>
          {filtrado.map((paciente) => {
            return (
              <tr id={paciente.name} className={style.tbody}>
                <td>{paciente.name}</td>

                <td>{paciente.mutual}</td>
                <td>
                  <a href={paciente.link}>Historial clinico</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={style.listFooter}>
        <div className={style.lenght}>
          Mostrando {filtrado.length} de {pacientes.length} pacientes
        </div>
        <div className={style.pagination}>
          <div className={style.left}>
            <Chevronleft />
          </div>
          <div className={style.number}>1</div>
          <div className={style.right}>
            <Chevronright />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaPacientes;
