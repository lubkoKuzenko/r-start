import{ useState } from 'react';

interface IModal {
  isOpen: boolean,
  setOpen: (par: boolean) => void,
  selectComponent: (type: string) => void
}

const Modal = ({isOpen, setOpen, selectComponent}: IModal) => {
  const [type, setType] = useState<string>('chart');
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
              <label>
                <input type="radio" value='chart' name="answer" onChange={(e) => setType(e.target.value)} />
                Chart
              </label><br/>
              <label>
                <input type="radio" value='calendar' name="answer" onChange={(e) => setType(e.target.value)} />
                Calendar
              </label><br/>
              <label>
                <input type="radio" value='static' name="answer" onChange={(e) => setType(e.target.value)} />
                Static blocks
              </label><br/>
              <label>
                <input type="radio" value='users' name="answer" onChange={(e) => setType(e.target.value)} />
                Users table
              </label><br/>
              <label>
                <input type="radio" value='social' name="answer" onChange={(e) => setType(e.target.value)} />
                Social Networks
              </label><br/>
            </div> 
          </section>
          <footer className="modal-card-foot">
            <button onClick={() => selectComponent(type)} className="button is-success">Submit</button>
            <button onClick={() => setOpen(false)} className="button">Cancel</button>
          </footer>
        </div>
    </div>
  );
}

export default Modal;
