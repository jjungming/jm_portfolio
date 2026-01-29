import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { IoReturnDownBackOutline, IoReturnDownForwardOutline } from "react-icons/io5";

const Modal = ({ isOpen, title, images, index, onClose, onPrev, onNext }) => {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.body}>
          <img
            src={images[index]}
            alt={`${title} 확대 이미지`}
            className={styles.image}
          />
        </div>

        <div className={styles.footer}>
          {images.length > 1 && (
            <button className={styles.nav} onClick={onPrev}><IoReturnDownBackOutline /></button>
          )}
          <span className={styles.counter}>{index + 1} / {images.length}</span>
          {images.length > 1 && (
            <button className={styles.nav} onClick={onNext}><IoReturnDownForwardOutline /></button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;