import React, { FC, CSSProperties, ReactText } from 'react';
import { StandardLonghandProperties } from 'csstype';

interface TextProps {
  alt?: boolean;
  size?: number;
  tag?: string;
  center?: boolean;
  bold?: boolean;
  caps?: boolean;
  color?: string;
}
export const Text: FC<TextProps> = props => {
  const {
    alt,
    bold,
    caps,
    center,
    children,
    color,
    size = 16,
    tag: Tag = 'span',
    ...restProps
  } = props;

  const sx: CSSProperties = {
    fontFamily: !alt ? 'Fairplay Display' : 'Segoe UI',
    fontSize: size,
    fontWeight: bold ? 'bold' : 'normal',
    textAlign: center ? 'center' : 'left',
    textTransform: caps ? 'uppercase' : 'none',
    margin: 0,
    color
  };
  return (
    // @ts-ignore https://github.com/Microsoft/TypeScript/issues/28892
    <Tag {...restProps} style={sx}>
      {children}
    </Tag>
  );
};

export const Header: FC<TextProps> = props => <Text tag="h1" size={32} {...props}></Text>;
