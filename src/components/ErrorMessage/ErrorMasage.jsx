import css from './ErrorMasage.module.css';

export const ErrorMasage = ({ error }) => {
  return (
    <>
      <h2 className={css.ErrorMasage}>{error}</h2>
    </>
  );
};
