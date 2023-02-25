import { Raleway } from 'next/font/google'
import styles from '@/styles/layouts/top-image.module.scss'

const raleway = Raleway({
  weight: '700',
  subsets: ['latin'],
})

const Top = () => {
  return (
    <>
      <div className={raleway.className}>
        <div className={styles.container}>
            <div className={styles.blurFilter}>
              <h1>hello,world.<br/>hello,polskaa.</h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default Top;