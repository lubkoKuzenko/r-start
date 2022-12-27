import { Formik, Form, Field, ErrorMessage, FormikProps, FieldArray } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { IDynamicFormValues, IFriend } from '../interfaces';
import { DisplayFormikState } from '../../../utils/displayFormikState';
import Error from './Error';

const DynamicForm = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    friends: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required(t('GLOBAL.VALIDATION.required') as string)
        })
      )
      .required(t('GLOBAL.VALIDATION.required') as string)
  });

  const initialValues = {
    friends: [
      {
        name: ''
      }
    ]
  };

  const onSubmit = (values: IDynamicFormValues) => {
    console.log(values);
  };

  return (
    <>
      <h4 className="title is-4">Dynamic form</h4>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(props: FormikProps<IDynamicFormValues>) => {
          const { dirty, isValid, values } = props;

          return (
            <Form>
              <div className="container my-3">
                <FieldArray name="friends">
                  {({ remove, push }) => (
                    <div>
                      {values.friends.length > 0 &&
                        values.friends.map((_: IFriend, index) => (
                          <div className="columns" key={index}>
                            <div className="column is-four-fifths">
                              <label className="label" htmlFor={`friends.${index}.name`}>
                                Name
                              </label>
                              <Field
                                name={`friends.${index}.name`}
                                placeholder="Jane Doe"
                                type="text"
                                className="input"
                              />
                              <ErrorMessage name={`friends.${index}.name`} render={Error} />
                            </div>
                            <div className="column">
                              <button type="button" className="button is-link is-light" onClick={() => remove(index)}>
                                X
                              </button>
                            </div>
                          </div>
                        ))}
                      <button type="button" className="button is-link is-light" onClick={() => push({ name: '' })}>
                        Add Friend
                      </button>
                    </div>
                  )}
                </FieldArray>
              </div>

              <button type="submit" className="button is-primary" disabled={!(isValid && dirty)}>
                Submit
              </button>

              <DisplayFormikState {...values} />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default DynamicForm;
