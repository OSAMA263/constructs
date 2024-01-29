import React from "react";
import tw from "tailwind-styled-components";

const LayoutSection = (props) => {
  const { id, children, styles } = props;

  return (
    <section className={styles + " mx-auto"} id={id}>
      {children}
    </section>
  );
};

export default LayoutSection;
