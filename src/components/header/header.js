import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Logo } from '../../Icons/Logo';
import { IconVk } from '../../Icons/IconVk';
import { IconTwitter } from '../../Icons/IconTwitter';
import { IconFacebook } from '../../Icons/IconFacebook';
import { IconYoutube } from '../../Icons/IconYoutube';
import styles from './header.module.css';

const navigations = [
  { href: 'https://vk.com/kznjs', title: 'Vkontakte', icon: <IconVk /> },
  { href: 'https://www.facebook.com/groups/kazanjs/', title: 'Facebook', icon: <IconFacebook /> },
  { href: 'https://twitter.com/kazan_js', title: 'Twitter', icon: <IconTwitter /> },
  { href: 'https://www.meetup.com/ru-RU/KazanJS/', title: 'Meetup', icon: <IconYoutube /> },
];

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <Link to="/" alt={siteTitle} className={styles.logo}>
      <Logo />
    </Link>
    <nav className={styles.nav}>
      {navigations.map((n, i) => (
        <a target="blank" key={i} href={n.href}>
          <span className={styles.title}>{n.title}</span>
          <span className={styles.icon}>{n.icon}</span>
        </a>
      ))}
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
