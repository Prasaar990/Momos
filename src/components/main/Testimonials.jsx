import { useState } from "react";
import styles from "../../styles/Testimonials.module.css";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  const [transform, setTransform] = useState(0);
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonialsBtns}>
        <button
          className={`btn `}
          onClick={() => {
            if (transform !== 0) setTransform((transform) => transform + 100);
            else setTransform(-200);
          }}
        >
          &larr;
        </button>
        <button
          className={`btn `}
          onClick={() => {
            if (transform !== -200)
              setTransform((transform) => transform - 100);
            else setTransform(0);
          }}
        >
          &rarr;
        </button>
      </div>
      <div className={styles.testimonialsList}>
        <Testimonial x={transform + 0} p={1} />
        <Testimonial x={transform + 100} p={2} />
        <Testimonial x={transform + 200} p={3} />
        <Testimonial x={transform + 300} p={4} />
      </div>
    </section>
  );
}
