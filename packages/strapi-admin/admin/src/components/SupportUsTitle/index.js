/**
 *
 * SupportUsTitle
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './styles.scss';

function SupportUsTitle() {
  return (
    <FormattedMessage id="تبلیفات برند">
      {message => <span className={styles.supportUsTitle}>{message}</span>}
    </FormattedMessage>
  );
}

export default SupportUsTitle;
