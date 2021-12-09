import React from 'react';

const Modal = ({isOpen, setOpen}) => {
  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Choose type of widget</p>
            <button onClick={() => setOpen(false)} className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <div className="control left">
              <label className="radio">
                <input type="radio" name="answer" />
                Chart
                <img className='mt-4' src="chart.png" alt="" />
              </label>
              <label className="radio">
                <input type="radio" name="answer" />
                Map
                <img className='mt-4' src="map.jpg" alt="" />
              </label>
              <label className="radio">
                <input type="radio" name="answer" />
                Rate
                <img className='mt-4' src="rate.png" alt="" />
              </label>
            </div> 
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button onClick={() => setOpen(false)} className="button">Cancel</button>
          </footer>
        </div>
      {/* <button onClick={() => setOpen(false)} className="modal-close is-large" aria-label="close"></button> */}
    </div>
  );
}

export default Modal;
