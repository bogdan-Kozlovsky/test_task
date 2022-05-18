import { useAppSelector } from 'common/hook/useAppSelectorHook';
import s from 'common/modalError/style.module.scss';
import { selectErrorValue } from 'store/selectors/selectors';

export const ModalError = () => {
  const error = useAppSelector(selectErrorValue);
  return (
    <div className={s.wrapper}>
      <div className={s.block}>{error}</div>
    </div>
  );
};
