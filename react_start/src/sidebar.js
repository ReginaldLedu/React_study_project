import styles from "./sidebar.module.css"

function SideBar() {
  return (
    <div className={styles["main__sidebar"]}>
      <div className={styles["sidebar__personal"]}>
        <p className={styles["sidebar__personal-name"]}>Sergey.Ivanov</p>
        <div className={styles["sidebar__avatar"]}></div>
      </div>
      <div className={styles["sidebar__block"]}>
        <div className={styles["sidebar__list"]}>
          <div className={styles["sidebar__item"]}>
            <a className={styles["sidebar__link"]} href="#">
              <img
                className={styles["sidebar__img"]}
                src="img/playlist01.png"
                alt="day's playlist"
              ></img>
            </a>
          </div>
          <div className={styles["sidebar__item"]}>
            <a className={styles["sidebar__link"]} href="#">
              <img
                className={styles["sidebar__img"]}
                src="img/playlist02.png"
                alt="day's playlist"
              ></img>
            </a>
          </div>
          <div className={styles["sidebar__item"]}>
            <a className={styles["sidebar__link"]} href="#">
              <img
                className={styles["sidebar__img"]}
                src="img/playlist03.png"
                alt="day's playlist"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SideBar
