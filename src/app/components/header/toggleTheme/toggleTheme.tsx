'use client'

import toggle from './toggleTheme.module.scss';
import { Icon } from '@iconify/react';

export default function ToggleTheme() {
  return(
    <label className={toggle.toggle}>
      <input id="theme" type="checkbox" className={`${toggle.input} theme`} />
      <div className={toggle.wrapper}>
        <div className={toggle.icon}>
          <Icon icon="eva:moon-fill" />
        </div>
        <div className={toggle.icon}>
          <Icon icon="eva:sun-fill" />
        </div>
      </div>
    </label>
  )
}