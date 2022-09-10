import React from 'react';
import style from '../../styles/InfoPaciente.module.css';

function InfoPaciente(props) {
  const { dni } = props;
  return (
    <div className={style.container}>
      <span className={style.title}>Información de pacientes</span>
      <div className={style.infoContainer}>
        <div className={style.info}>
          <span className={style.infoHolder}>Nombre:</span>
          <span className={style.infoText}>Carlitos</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Apellido:</span>
          <span className={style.infoText}>Bala</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Edad:</span>
          <span className={style.infoText}>97</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>DNI:</span>
          <span className={style.infoText}>{dni}</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Domicilio:</span>
          <span className={style.infoText}>Tero Ahorcado 1334</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
        <div className={style.info}>
          <span className={style.infoHolder}>Mutual:</span>
          <span className={style.infoText}>Mutual Médica</span>
        </div>
      </div>
    </div>
  );
}

export default InfoPaciente;
