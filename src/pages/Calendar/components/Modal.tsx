import React from 'react';

const styles = {
  modal: {
    width: '600px',
    height: 'max-content',
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    zIndex: 5
  },
  modalContent: {
    maxHeight: '600px',
    overflow: 'auto'
  }
};

const Modal: React.FC<{ isOpen: boolean; children: any; handleClose: () => void }> = ({
  isOpen,
  children,
  handleClose
}) => {
  return (
    <>
      {isOpen && (
        <div style={{ ...styles.modal, position: 'fixed' }}>
          <header>
            <button className="button is-info" onClick={handleClose}>
              Close
            </button>
          </header>
          <main style={styles.modalContent}>{children}</main>
        </div>
      )}
    </>
  );
};

export default Modal;
