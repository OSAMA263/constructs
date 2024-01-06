import {motion} from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function NavigateAnimation(props) {
  const { children, title, description, href } = props;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={href} />
      </Helmet>
      <motion.div>{children}</motion.div>
    </>
  );
}
