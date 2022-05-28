import s from 'common/modalErrorMessage/style.module.scss';
import { useAppSelector } from 'hooks/useAppSelectorHook';
import { selectErrorMessage } from 'store/selectors/error/selectorsError';

export const ModalErrorMessage = () => {
  const errorMessage = useAppSelector(selectErrorMessage);

  return (
    <div className={s.wrapper}>
      <div className={s.block}>{errorMessage}</div>
    </div>
  );
};
