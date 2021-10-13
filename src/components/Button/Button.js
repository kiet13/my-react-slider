import React from 'react'
import styles from './Button.module.scss';

export default function Button(props) {
  return (
    <button className={[styles.Button, props.classes].join(' ')} onClick={props.clicked}>
      {props.children}
    </button>
  )
}
