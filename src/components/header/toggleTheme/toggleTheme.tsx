'use client'

import toggle from './toggleTheme.module.scss';
import { Icon } from '@iconify/react';
import { ChangeEvent, LabelHTMLAttributes } from 'react';

const handleToggle = (e: ChangeEvent): void => {
  const $el = e.target as HTMLInputElement;
  
  if ($el.checked) {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
  } else {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }
};

export default function ToggleTheme() {
  return(
    <label className={toggle.toggle}>
      <input onChange={(e) => handleToggle(e)} id="theme" type="checkbox" className={`${toggle.input} theme`} />
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