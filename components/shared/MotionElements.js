import { forwardRef, Box, Button, Stack } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import Image from 'next/image';

// 1. Create a custom motion component from Box
export const MotionBox = motion.custom(
     forwardRef((props, ref) => {
          const chakraProps = Object.fromEntries(
               // do not pass framer props to DOM element
               Object.entries(props).filter(([key]) => !isValidMotionProp(key))
          );
          return <Box ref={ref} {...chakraProps} />;
     })
);

// 1. Create a custom motion component from Box
export const MotionButton = motion.custom(
     forwardRef((props, ref) => {
          const chakraProps = Object.fromEntries(
               // do not pass framer props to DOM element
               Object.entries(props).filter(([key]) => !isValidMotionProp(key))
          );
          return <Button ref={ref} {...chakraProps} />;
     })
);

// 1. Create a custom motion component from Box
export const MotionStack = motion.custom(
     forwardRef((props, ref) => {
          const chakraProps = Object.fromEntries(
               // do not pass framer props to DOM element
               Object.entries(props).filter(([key]) => !isValidMotionProp(key))
          );
          return <Stack ref={ref} {...chakraProps} />;
     })
);
