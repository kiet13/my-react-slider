import React from 'react'
import styles from './Person.module.scss'

export default function Person(props) {
  const typeClasses = [styles.Person];
  if (props.type === 'prev') {
    typeClasses.push(styles.Prev)
  } else if (props.type === 'curr') {
    typeClasses.push(styles.Curr)
  } else if (props.type === 'next') {
    typeClasses.push(styles.Next)
  }

  return (
    <div className={typeClasses.join(' ')}>
      <img className={styles.PersonImage} src={props.image} alt="avatar" />
      <h2 className={styles.PersonName}>{props.name}</h2>
      <h3 className={styles.PersonTitle}>{props.title}</h3>
      <p className={styles.PersonQuote}>{props.quote}</p>
    
    </div>
  )
}
