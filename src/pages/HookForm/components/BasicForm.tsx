import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

interface IFormInputs {
  fullName: string;
  email: string;
  password: string;
  confirm_password: string;
  agreeWithTermsAndConditions: boolean;
}

const BasicFormHook: React.FC = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    fullName: Yup.string().required(t('GLOBAL.VALIDATION.required') as string),
    email: Yup.string()
      .email(t('GLOBAL.VALIDATION.incorrectEmail') as string)
      .required(t('GLOBAL.VALIDATION.required') as string),
    password: Yup.string()
      .required(t('GLOBAL.VALIDATION.required') as string)
      .min(8, 'Minimum 8 characters'),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password')], 'Password is not match!')
      .required(t('GLOBAL.VALIDATION.required') as string),
    agreeWithTermsAndConditions: Yup.boolean().oneOf([true], 'Must Accept Terms and Conditions')
  });

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
    reset
  } = useForm<IFormInputs>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullName: 'test',
      email: 'test@un.com',
      password: '123',
      confirm_password: '123',
      agreeWithTermsAndConditions: false
    }
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="field">
          <label className="label" htmlFor="fullName">
            Full name
          </label>
          <div className="control">
            <input type="text" className="input" placeholder="Full name" {...register('fullName')} />
            <span className="help is-danger">{errors.fullName?.message as string}</span>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="email">
            Email address
          </label>
          <div className="control">
            <input type="text" className="input" placeholder="Email address" {...register('email')} />
            <span className="help is-danger">{errors.email?.message as string}</span>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="password">
            Password
          </label>
          <div className="control">
            <input type="text" className="input" placeholder="Password" {...register('password')} />
            <span className="help is-danger">{errors.password?.message as string}</span>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="password">
            Confirm Password
          </label>
          <div className="control">
            <input type="text" className="input" placeholder="Password" {...register('confirm_password')} />
            <span className="help is-danger">{errors.confirm_password?.message as string}</span>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox" htmlFor="agreeWithTermsAndConditions">
              <input type="checkbox" className="mr-2 checkbox" {...register('agreeWithTermsAndConditions')} />I agree to
              the terms and conditions
            </label>
            <span className="help is-danger">{errors.agreeWithTermsAndConditions?.message as string}</span>
          </div>
        </div>

        <button type="submit" className="button is-primary" disabled={!formState.isValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicFormHook;
