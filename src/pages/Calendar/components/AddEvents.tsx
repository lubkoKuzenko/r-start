import * as dateFns from 'date-fns';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import useLocalStorage from '../../../utils/hooks/useLocalStorage';
import randomNumber from '../../../utils/randomNumber';

const AddEvents: React.FC<{ onClick: () => void; day: Date | string }> = ({ onClick, day }) => {
  const [events, setEvents] = useLocalStorage('event', {});
  const format = React.useMemo(() => 'd MMMM yyyy', []);

  return (
    <div className="box">
      {
        <Formik
          enableReinitialize
          initialValues={{ id: randomNumber(0, 9999999999), title: '', description: '', date: new Date(day) }}
          onSubmit={values => {
            setEvents(
              // @ts-ignore
              { ...events, [String(day)]: events[String(day)] ? [...events[String(day)], values] : [values] }
            );
            onClick();
          }}>
          {() => (
            <Form>
              <h2 className="box">{dateFns.format(new Date(day), format)}</h2>
              <div className="field">
                <label className="label" htmlFor="title">
                  Title
                </label>
                <Field placeholder="Title" className="input is-primary" type="input" name="title" />
              </div>
              <div className="field">
                <label className="label" htmlFor="description">
                  Description
                </label>
                <Field
                  placeholder="Description"
                  autoComplete="off"
                  className="textarea is-primary"
                  type="textarea"
                  name="description"
                />
              </div>
              <button type="submit" className="button is-success">
                ADD
              </button>
            </Form>
          )}
        </Formik>
      }
    </div>
  );
};

export default AddEvents;
