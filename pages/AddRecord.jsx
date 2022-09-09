import Nav from './components/Nav';
import style from '../styles/AddRecord.module.css';
function AddRecord() {
  return (
    <div>
      <Nav />
      <div className={style.container}>
        <input
          type="text"
          className={style.input}
          placeholder="Ingrese usuario"
        />
      </div>
    </div>
  );
}

export default AddRecord;
