import styles from './styles.module.css'

export default function Map() {
  return (
    <div className={styles.mapWrapper}>
      <iframe src="https://www.google.com/maps/d/embed?mid=1vHp2W615drOwBjz0bV7B8uY3YoM" width="740" height="580"></iframe>
    </div>
  )
}

