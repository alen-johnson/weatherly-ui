import React from 'react'
import styles from './VisibilityCard.module.scss'
import { getVisibilityCategory } from '@/utils/helpers/visibilityHelper'

export default function VisibilityCard({visibleDistance}) {

  const {category, message} = getVisibilityCategory(visibleDistance)
  return (
    <div className={styles.visibility}>
      <h2>VISIBILITY</h2>
      <div className={styles.visibilityDetails}>
        <div className={styles.imgWrapper}>
          <img src='/icons/road.png' alt='Road' />
        </div>
        <p className={styles.visibilityValue}>{visibleDistance} </p>
        <p>KM</p>
      </div>
      <p>{category}</p>

      <p>{message}</p>
    </div>
  )
}
