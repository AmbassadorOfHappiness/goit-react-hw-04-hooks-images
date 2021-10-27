import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './modal.module.css';

export default function Modal({children, onClose}) {
  const  handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  });

  return (
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div className={styles.Modal}>{children}</div>
    </div>
  );
}


Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};