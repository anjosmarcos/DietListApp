import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

interface TextProps extends RNTextProps {
  preset?: TextVariants;
}

export function Text({
  children,
  preset = 'ParagraphMedium',
  style,
  ...rest
}: TextProps) {
  return (
    <RNText style={[$fontSize[preset], style]} {...rest}>
      {children}
    </RNText>
  );
}

type TextVariants =
  | 'HeadingLarge'
  | 'HeadingMedium'
  | 'HeadingSmall'
  | 'ParagraphLarge'
  | 'ParagraphMedium'
  | 'ParagraphSmall'
  | 'Caption'
  | 'CaptionSmall';

const $fontSize: Record<TextVariants, TextStyle> = {
  HeadingLarge: {fontSize: 32, lineHeight: 38.4},
  HeadingMedium: {fontSize: 22, lineHeight: 26.4},
  HeadingSmall: {fontSize: 18, lineHeight: 23.4},

  ParagraphLarge: {fontSize: 18, lineHeight: 25.2},
  ParagraphMedium: {fontSize: 16, lineHeight: 22},
  ParagraphSmall: {fontSize: 14, lineHeight: 19.6},

  Caption: {fontSize: 12, lineHeight: 16.8},
  CaptionSmall: {fontSize: 14, lineHeight: 10},
};
