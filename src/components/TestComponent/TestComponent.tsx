import React from 'react';
import styles from './TestComponent.module.scss';

export default function TestComponent() {
  return (
    <>
      <h1>This is project template with:</h1>
      <ul className={styles.list}>
        <li>Typescript;</li>
        <li>SCSS & CSS modules;</li>
        <li>Jest;</li>
        <li>ESlint;</li>
        <li>husky;</li>
        <li>Github actions.</li>
      </ul>
      <h1>Happy coding!</h1>
      <p>
        contact with me: <a href="mailto:st.kirilius@mail.ru">st.kirilius@mail.ru</a>
      </p>
    </>
  );
}
