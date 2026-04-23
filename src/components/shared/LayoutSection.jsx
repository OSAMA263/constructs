import tw from "tailwind-styled-components";

export default function LayoutSection(props) {
  const { id, children, styles } = props;
  return (
    <Section className={styles} id={id}>
      {children}
    </Section>
  );
}

const Section = tw.section`
mx-auto 
2xl:w-[65%]
xl:w-[75%] 
lg:w-[85%] 
w-[95%]
pb-10
pt-24
`;
