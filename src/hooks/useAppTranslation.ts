import { useTranslation } from 'next-i18next';

const useAppTranslation = (arrgs: Array<string>) => {
  const { t } = useTranslation(arrgs);
  return t;
};

export default useAppTranslation;
