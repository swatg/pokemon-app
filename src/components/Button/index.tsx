import React from 'react';
import styles from './style/button.module.css';

interface ButtonProps {
  btnType?: string,
  children: React.ReactNode,
  disabled?: boolean,
  handler?: Function,
  id?: string,
  label?: string,
}

const Button = ({
  btnType,
  children,
  disabled,
  handler,
  id,
  label,
}:ButtonProps) => {
  if (handler) {
    return (
      <button
        aria-label={label}
        className={`
          ${styles.button} 
          ${btnType ? styles[btnType] : ''}
        `}
        id={id}
        onClick={() => handler()}
        type="button"
        disabled={disabled}
      >
        { children }
      </button>
    );
  }
  return (
    <div
      aria-label={label}
      className={`
        ${styles.button} 
        ${btnType ? styles[btnType] : ''}
      `}
      id={id}
    >
      { children }
    </div>
  );
};

Button.defaultProps = {
  btnType: false,
  disabled: false,
  handler: null,
  id: '',
  label: null,
};

export default Button;
