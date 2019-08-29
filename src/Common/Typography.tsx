import React, { FC, CSSProperties, ReactText } from "react";
import { DisplayProperty, TextOverflowProperty, TextDecorationProperty, WhiteSpaceProperty, MarginProperty } from "csstype";

interface TextProps {
  alt?: boolean;
  size?: number;
  tag?: string;
  center?: boolean;
  bold?: boolean;
  caps?: boolean;
  color?: string;
  textOverflow?: TextOverflowProperty;
  textDecoration?: TextDecorationProperty;
  lineClamp?: number;
  display?: DisplayProperty;
  whiteSpace?: WhiteSpaceProperty;
  margin?: MarginProperty<4>
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
    tag: Tag = "span",
    textOverflow = "none",
    textDecoration = "none currentcolor solid",
    lineClamp = 0,
    display,
    whiteSpace = '',
    margin = 0,
    ...restProps
  } = props;

  const sx: CSSProperties = {
    fontFamily: !alt ? "Fairplay Display" : "Segoe UI",
    fontSize: size,
    fontWeight: bold ? "bold" : "normal",
    textAlign: center ? "center" : "left",
    textTransform: caps ? "uppercase" : "none",
    textOverflow: textOverflow,
    textDecoration: textDecoration,
    WebkitLineClamp: lineClamp,
    margin: margin,
    caretColor: "transparent",
    display: display || lineClamp > 0 && '-webkit-box' || 'block',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color
  };
  return (
    // @ts-ignore https://github.com/Microsoft/TypeScript/issues/28892
    <Tag {...restProps} style={sx}>
      {children}
    </Tag>
  );
};

export const Header: FC<TextProps> = props => (
  <Text tag="h1" size={32} {...props}></Text>
);
