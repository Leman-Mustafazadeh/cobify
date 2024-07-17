import React from 'react';
import styles from "./index.module.scss";

const Topic = () => {
  return (
    <section className={styles.cooks}>
      <div className="container">
        <div className={styles.cook}>
          <div className={styles.cook_left}>
            <h3>Lorem, ipsum.</h3>
            <h1>LOREM</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur excepturi et repellat!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea alias similique quod natus exercitationem a unde quos nemo distinctio assumenda quisquam praesentium qui illo, expedita odit maxime, consequatur, inventore itaque!</p>
            <button>Learn More aBOUT us</button>
          </div>
          <div className={styles.cook_right}>
            <img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topic;
