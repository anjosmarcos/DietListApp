import React from 'react';
import {Text as RNText, TextProps} from 'react-native';

export function Text({children}: TextProps) {
  return <RNText>{children}</RNText>;
}
