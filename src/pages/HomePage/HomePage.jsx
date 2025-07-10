import css from "./HomePage.module.css";
import { FaAddressBook, FaReact } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        <FaAddressBook /> Книга контактів
      </h1>
      <p className={css.text}>
        Вітаю! Це невеликий додаток для зберігання ваших контактів. Ви можете
        додавати, видаляти та шукати контакти. Аутентифікація гарантує безпеку
        ваших даних.
      </p>
      <h2 className={css.subtitle}>
        <MdContactPhone /> Про розробника
      </h2>
      <p className={css.text}>
        Мене звати Інна Марченко. Я вивчаю <FaReact /> React та створюю
        практичні проєкти, щоб стати професійним Frontend-розробником.
      </p>
      <p className={css.text}>
        Цей проєкт створений у межах навчального курсу як практичне завдання з
        використанням React, Redux Toolkit, Formik, Yup, та бібліотеки
        маршрутизації React Router.
      </p>
    </div>
  );
}
