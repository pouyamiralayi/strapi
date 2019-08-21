/**
 *
 * WelcomeContent
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import styles from './styles.scss';

/* eslint-disable jsx-a11y/accessible-emoji */
function WelcomeContent({ hasContent }) {
  return (
    <React.Fragment>
      <div className={styles.iconWave}>👋</div>
      {hasContent && (
        <FormattedMessage id="ورود شما را به داشبور اکسل خوش آمد میگویم. با استفاده از امکانات این داشبورد شما قادر خواهید بود به آسانی محتوای اکسل خود را بارگذاری و در معرض استفادۀ کاربران قرار دهید. در ادامۀ با امکاناتی از قبیل بارگذاری فایل، تعریف مشتری و ارتباط فایل ها با مشتری شما را آشنا خواهم کرد">
          {message => <p className={styles.welcomeContentP}>{message}</p>}
        </FormattedMessage>
      )}
    </React.Fragment>
  );
}

WelcomeContent.defaultProps = {
  hasContent: false,
};

WelcomeContent.propTypes = {
  hasContent: PropTypes.bool,
};

export default WelcomeContent;
