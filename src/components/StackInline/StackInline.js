import React from "react";
import { Flex, useTheme } from "@chakra-ui/core";

export const StackInline = ({
  children,
  spacing = "2",
  childProps = {},
  ...rest
}) => {
  const theme = useTheme();
  const spacingCss = theme.space[spacing] ?? spacing;

  const _children = React.Children.map(children, (element) => {
    return React.cloneElement(element, {
      marginLeft: spacing,
      marginBottom: spacing,
      ...childProps,
    });
  });

  return (
    <Flex
      flexWrap="wrap"
      marginLeft={`calc(${spacingCss} * -1)`}
      marginBottom={`calc(${spacingCss} * -1)`}
      {...rest}
    >
      {_children}
    </Flex>
  );
};
