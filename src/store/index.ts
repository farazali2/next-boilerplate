//Exporting redux store
export { store } from '@app/store/store';

//Exporting next wrapper for redux store
export {
  wrapper,
  getAppInitialAppProps,
  getAppInitialPageProps,
  getAppServerSideProps,
  getAppStaticProps,
} from '@app/store/next.wrapper';

//Exporting redux store hooks for typescript
export { useAppDispatch } from '@app/store/hooks';
export { useAppSelector } from '@app/store/hooks';
