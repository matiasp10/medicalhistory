import style from '../../styles/Footer.module.css';
const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.content}>
        <span className={style.firstName}>Daniel</span>
        <span className={style.lastName}>San Martin</span>
      </div>
      <div>
        <span className={style.copyright}>
          © 2022 - 2022 Empresa X - All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
