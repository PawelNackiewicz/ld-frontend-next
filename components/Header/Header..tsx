import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/routes';
import './Header.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { User } from '../../store/session/types';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/session/sessionSlice';

const Header = () => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const user = useSelector<RootState, User>((state) => state.session.user as User);
  const logout = (): void => {
    dispatch(removeUser());
  };

  return (
    <header data-testid="header">
      <nav className="nav">
        <ul className="nav__list">
          <div className="align-left">
            <li className="nav__item">
              <NavLink to={routes.home} className="nav__item-link">
                <span>{t('header.map')}</span>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to={routes.aboutProject} className="nav__item-link">
                <span>{t('header.aboutProject')}</span>
              </NavLink>
            </li>
          </div>
          {user ? (
            <div className="align-right">
              <li className="nav__item">
                <NavLink to={routes.settings} className="nav__item-link">
                  <span className="nav__item-link">{t('header.settings')}</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to={routes.myFacilities} className="nav__item-link">
                  <span className="nav__item-link">{t('header.myFacilities')}</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to={routes.login} className="nav__item-link" onClick={logout}>
                  <span className="nav__item-link">{t('header.logout')}</span>
                </NavLink>
              </li>
            </div>
          ) : (
            <div className="align-right">
              <li className="nav__item">
                <NavLink to={routes.registration} className="nav__item-link">
                  <span>{t('header.registration')}</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to={routes.login} className="nav__item-link">
                  <span>{t('header.login')}</span>
                </NavLink>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
