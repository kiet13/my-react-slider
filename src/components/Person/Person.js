import React from 'react'
import styles from './Person.module.scss'

export default function Person(props) {
  return (
    <div className={[styles.Person, "mt-4"].join(' ')}>
      <img className={styles.PersonImage} src={props.image} alt="avatar" />
      <h2 className={styles.PersonName}>{props.name}</h2>
      <h3 className={styles.PersonTitle}>{props.title}</h3>
      <p className={styles.PersonQuote}>{props.quote}</p>
    </div>
  )
}
