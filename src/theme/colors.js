/**
 * App Theme - Colors
*/

const colors = {
  primary: '#12859b',
  secondary: '#17233d',
  warning: '#deac00',
  danger: '#a90015',
  white: '#ffffff',
  black: '#000000',
  dark: '#222222',
  gray_dark: '#9B9B9B',
  gray: '#777777',
  gray_light: '#bfc7c7',
  gray_lighter: '#eaeaea',
  gray100: '#f4f3f3',
  blue100: '#5eafbd',
  blue200: '#12859b',
  blue300: '#14738a',
  blue400: '#103e54',
  blue500: '#0f2e42',
};

const app = {
  background: '#E9EBEE',
  cardBackground: colors.white,
  listItemBackground: colors.white,
};

const brand = {
  brand: {
    primary: colors.primary,
    secondary: colors.secondary,
  },
};

const text = {
  textPrimary: colors.blue400,
  textSecondary: colors.gray,
  headingPrimary: colors.primary,
  headingSecondary: colors.primary,
};

const borders = {
  border: '#D0D1D5',
};

export default {
  ...colors,
  ...app,
  ...brand,
  ...text,
  ...borders,
};
