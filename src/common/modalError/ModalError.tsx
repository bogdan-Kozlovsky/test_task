import s from 'common/modalError/style.module.scss';
import { useAppSelector } from 'hooks/useAppSelectorHook';
import { selectErrorMessage } from 'store/selectors/selectors';

export const ModalError = () => {
  const errorMessage = useAppSelector(selectErrorMessage);

  return (
    <div className={s.wrapper}>
      <div className={s.block}>{errorMessage}</div>
    </div>
  );
};
