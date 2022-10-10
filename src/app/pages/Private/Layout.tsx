import { useEffect } from 'react';
import {
  Outlet, useNavigate,
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { isLogged, userActions } from '../../store/modules/user';

export function Private() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const redirect = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        if (user.remember) {
          dispatch(userActions.login(user));
        } else {
          const { payload } = (await dispatch(isLogged()));
          const logged = payload;

          if (!logged) {
            redirect('/login');
          }
        }
      } catch (err) {
        redirect('/login');
      }
    })();
  }, []);

  return (
    <Outlet />
  );
}
