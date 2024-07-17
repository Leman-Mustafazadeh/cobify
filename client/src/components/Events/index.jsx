import React from "react";
import styles from "./index.module.scss";
const Event = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.event}>
            <h1>Upcoming Events</h1>
          <div className={styles.event_left}>
                <div className={styles.events_left_item}>
                    
                </div>
          </div>

          <div className={styles.event_right}>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
