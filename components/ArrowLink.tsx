import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { theme } from "stitches";
import NavLink from "./NavLink";

export default function Arrow({
  url,
  text,
}: {
  url: string;
  text: string;
}): ReactElement {
  const lineVariants = {
    hover: {
      x2: 15,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.2,
      },
    },
  };

  const transition = {
    type: "spring",
    delay: 0.2,
  };

  const iconElementStyle = {
    originX: "90%",
    originY: "55%",
  };

  return (
    <motion.div whileHover="hover" style={{ display: "inline" }}>
      <NavLink url={url} decoration="underline">
        {text}
      </NavLink>
      <svg
        width="17"
        height="10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginLeft: theme.space.$_5 }}
      >
        <motion.line
          y1="5"
          y2="5"
          x2="0"
          d="M0 5.35364H0V4.35364H1V5.35364Z"
          stroke={theme.colors.$primary}
          opacity="0"
          variants={lineVariants}
          transition={transition}
        />

        {[35, -35].map((rotation) => (
          <motion.path
            key={rotation}
            d="M15 5H9 8"
            stroke={theme.colors.$primary}
            opacity="0"
            variants={{
              hover: {
                opacity: 1,
                rotate: rotation,
              },
            }}
            transition={transition}
            style={iconElementStyle}
          />
        ))}
      </svg>
    </motion.div>
  );
}
