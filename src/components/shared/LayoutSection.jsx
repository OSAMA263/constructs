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
xl:w-[65%] 
lg:w-[75%] 
md:w:[80%]
w-[90%]
lg:py-28
pb-20
pt-28
`;
