/**
 *
 * SupportUsCta
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './styles.scss';

function SupportUsCta() {
  return (
    <FormattedMessage id="ورود به وبسایت برند">
      {message => (
        <a
          href=""
          target="_blank"
          className={styles.supportUsCta}
          rel="noopener noreferrer"
        >
          {message}
        </a>
      )}
    </FormattedMessage>
  );
}

export default SupportUsCta;
