import { forwardRef, Box, Button, Stack, Text } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import Image from 'next/image';

// 1. Create a custom motion component from Box
export const MotionBox = motion(Box);

// 1. Create a custom motion component from Box
export const MotionButton = motion(Button)

// 1. Create a custom motion component from Box
export const MotionStack = motion(Stack)

// 1. Create a custom motion component from Box
export const MotionText = motion(Text)

// 1. Create a custom motion component from Box
export const MotionImage = motion(Image)
