import React from 'react'
import { IconTelegram } from '../../Icons/IconTelegram'
import { IconEmail } from '../../Icons/IconEmail'
import styles from "./welcomeBlock.module.css"

export const WelcomeBlock = () => {
  return (
    <>
    <section>
      <h1>KazanJS</h1>
      <h2>Сообщество казанских JS разработчиков</h2>
      <div className={styles.text}>
        <p>
          Мы проводим регулярные митапы и встречи в формате BeerJS. <br />
          Новости и анонсы публикуются в канале <a target="blank" href="https://tlg.name/kazanjs">t.me/kazanjs.</a>
        </p>
        <p>На всех мероприятиях сообщества действует <a target="blank" href="https://berlincodeofconduct.org/ru/">Berlin code of conduct.</a></p>
        <p>Видео с мероприятий на <a target="blank" href="https://www.youtube.com/channel/UCX0DiupvdnHzKEyZsQS4C-A">Youtube канале.</a></p>
      </div>
    </section>
    <section className={styles.row}>
      <div>
        <h3>Связаться с нами:</h3>
        <div className={styles.linkContainer}>
          <a href="mailto:igor.z@gmail.com">
            <IconEmail />
            <span>igor.z@gmail.com</span>
          </a>
          <a href="https://tlg.name/ZIggy">
            <IconTelegram />
            <span>@ZIggy</span>
          </a>
        </div>
      </div>
      <a className={styles.btn} href="">Хочу стать докладчиком</a>
    </section>
    </>
  )
}
