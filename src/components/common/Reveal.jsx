import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0, y = 16, as = "div", className, ...rest }) => {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.6, 0.35, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export default Reveal;
