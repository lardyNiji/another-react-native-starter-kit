/**
 * App Styles
 */

import Colors from './colors';
import Fonts from './fonts';
import Sizes from './sizes';

export default {
  appContainer: {
    backgroundColor: '#000',
  },

  scrollView: {
    paddingBottom: 80,
  },

  // Default
  container: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.background,
  },
  containerCentered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseView: {
    position: 'relative',
    flexDirection: 'column',
    flex: 1,
  },
  innerView: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  windowSize: {
    height: Sizes.screen.height,
    width: Sizes.screen.width,
  },

  // Aligning items
  leftAligned: {
    alignItems: 'flex-start',
  },
  centerAligned: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightAligned: {
    alignItems: 'flex-end',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },

  // Text Styles
  baseText: {
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size,
    lineHeight: Fonts.base.lineHeight,
    color: Colors.textPrimary,
    fontWeight: '300',
  },
  dangerText: {
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size,
    lineHeight: Fonts.base.lineHeight,
    color: Colors.danger,
    fontWeight: '600',
  },
  cardDescriptionText: {
    fontSize: Fonts.t12.size,
    lineHeight: Fonts.t12.lineHeight,
    color: Colors.textPrimary,
    fontWeight: '300',
  },
  cardStatusText: {
    fontSize: Fonts.t12.size,
    lineHeight: Fonts.t12.lineHeight,
    color: Colors.blue300,
    marginBottom: 5,
    fontWeight: 'normal',
  },
  cardIcon: {
    width: Sizes.cardIcon,
    height: Sizes.cardIcon,
  },
  buttonText: {
    fontSize: Fonts.t14.size,
  },
  p: {
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size,
    lineHeight: Fonts.base.lineHeight,
    color: Colors.textPrimary,
    fontWeight: '300',
    marginBottom: 8,
  },
  h1: {
    fontFamily: Fonts.h1.family,
    fontSize: Fonts.h1.size,
    lineHeight: Fonts.h1.lineHeight,
    color: Colors.headingPrimary,
    fontWeight: '800',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h1Light: {
    fontFamily: Fonts.h1.family,
    fontSize: Fonts.h1.size,
    lineHeight: Fonts.h1.lineHeight,
    color: Colors.white,
    fontWeight: '400',
  },
  h1SubtitleLight: {
    fontFamily: Fonts.h1.family,
    fontSize: Fonts.h4.size,
    lineHeight: Fonts.h1.lineHeight,
    color: Colors.white,
    fontWeight: 'bold',
  },
  h2: {
    fontFamily: Fonts.h2.family,
    fontSize: Fonts.h2.size,
    lineHeight: Fonts.h2.lineHeight,
    color: Colors.headingPrimary,
    fontWeight: '500',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h3Dark: {
    fontFamily: Fonts.h3.family,
    fontSize: Fonts.h3.size,
    lineHeight: Fonts.h3.lineHeight,
    color: Colors.blue400,
    fontWeight: '400',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h3: {
    fontFamily: Fonts.h3.family,
    fontSize: Fonts.t18.size,
    lineHeight: Fonts.h3.lineHeight,
    color: Colors.headingPrimary,
    fontWeight: 'bold',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h4: {
    fontFamily: Fonts.h4.family,
    fontSize: Fonts.h4.size,
    lineHeight: Fonts.h4.lineHeight,
    color: Colors.headingPrimary,
    fontWeight: '800',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h4Light: {
    fontFamily: Fonts.h4.family,
    fontSize: Fonts.h4.size,
    lineHeight: Fonts.h4.lineHeight,
    color: Colors.blue100,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  h5: {
    fontFamily: Fonts.h5.family,
    fontSize: Fonts.t12.size,
    lineHeight: Fonts.h5.lineHeight,
    color: Colors.headingPrimary,
    fontWeight: '800',
    margin: 0,
    marginTop: 4,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  strong: {
    fontWeight: '900',
  },
  link: {
    textDecorationLine: 'underline',
    color: Colors.brand.primary,
  },
  subtext: {
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size * 0.8,
    lineHeight: parseInt(Fonts.base.lineHeight * 0.8, 10),
    color: Colors.textSecondary,
    fontWeight: '500',
  },

  // Helper Text Styles
  textCenterAligned: {
    textAlign: 'center',
  },
  textRightAligned: {
    textAlign: 'right',
  },

  // Give me padding
  padding: {
    paddingVertical: Sizes.padding,
    paddingHorizontal: Sizes.padding,
  },
  paddingHorizontal: {
    paddingHorizontal: Sizes.padding,
  },
  paddingLeft: {
    paddingLeft: Sizes.padding,
  },
  paddingRight: {
    paddingRight: Sizes.padding,
  },
  paddingVertical: {
    paddingVertical: Sizes.padding,
  },
  paddingTop: {
    paddingTop: Sizes.padding,
  },
  paddingBottom: {
    paddingBottom: Sizes.padding,
  },
  paddingSml: {
    paddingVertical: Sizes.paddingSml,
    paddingHorizontal: Sizes.paddingSml,
  },
  paddingHorizontalSml: {
    paddingHorizontal: Sizes.paddingSml,
  },
  paddingLeftSml: {
    paddingLeft: Sizes.paddingSml,
  },
  paddingRightSml: {
    paddingRight: Sizes.paddingSml,
  },
  paddingVerticalSml: {
    paddingVertical: Sizes.paddingSml,
  },
  paddingTopSml: {
    paddingTop: Sizes.paddingSml,
  },
  paddingBottomSml: {
    paddingBottom: Sizes.paddingSml,
  },

  // Give me margin
  margin: {
    marginVertical: Sizes.padding,
    marginHorizontal: Sizes.padding,
  },
  marginHorizontal: {
    marginHorizontal: Sizes.padding,
  },
  marginLeft: {
    marginLeft: Sizes.padding,
  },
  marginRight: {
    marginRight: Sizes.padding,
  },
  marginVertical: {
    marginVertical: Sizes.padding,
  },
  marginTop: {
    marginTop: Sizes.padding,
  },
  marginBottom: {
    marginBottom: Sizes.padding,
  },
  marginSml: {
    marginVertical: Sizes.paddingSml,
    marginHorizontal: Sizes.paddingSml,
  },
  marginHorizontalSml: {
    marginHorizontal: Sizes.paddingSml,
  },
  marginLeftSml: {
    marginLeft: Sizes.paddingSml,
  },
  marginRightSml: {
    marginRight: Sizes.paddingSml,
  },
  marginVerticalSml: {
    marginVertical: Sizes.paddingSml,
  },
  marginTopSml: {
    marginTop: Sizes.paddingSml,
  },
  marginBottomSml: {
    marginBottom: Sizes.paddingSml,
  },

  // General HTML-like Elements
  hr: {
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    height: 1,
    backgroundColor: 'transparent',
  },

  // Grid
  row: {
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },

  // Navbar
  navbar: {
    backgroundColor: Colors.brand.primary,
    borderBottomWidth: 0,
    height: 55,
  },
  navbarTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size,
  },
  navbarButton: {
    tintColor: '#ffffff',
  },

  // Helpers
  line: {
    display: 'flex',
    flexDirection: 'row',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
  },
  noPadding: {
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  pushRight: {
    marginLeft: 'auto',
  },
  hidden: {
    display: 'none',
  },
  backGray: {
    backgroundColor: Colors.gray100,
  },
  backYellow: {
    backgroundColor: 'yellow',
  },
  backOrange: {
    backgroundColor: 'orange',
  },
  backRed: {
    backgroundColor: 'red',
  },
  border: {
    borderColor: 'red',
    borderWidth: 3,
    borderStyle: 'solid',
  },
  borderGreen: {
    borderColor: 'green',
    borderWidth: 3,
    borderStyle: 'solid',
  },
  w30: {
    width: '30%',
  },
  w50: {
    width: '50%',
  },
  w70: {
    width: '70%',
  },
  w80: {
    width: '80%',
  },
  w90: {
    width: '90%',
  },
  w100: {
    width: '100%',
  },
  buttonTransparent: {

  },

  // Fab
  fab: {
    zIndex: 10,
    backgroundColor: Colors.blue200,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 80,
    right: 15,
  },

  // Menu
  menu: {
    position: 'absolute',
    bottom: 80,
    right: 15,
  },
  menuOptions: {
    optionsContainer: {
      backgroundColor: Colors.gray_lighter,
    },
    optionsWrapper: {

    },
    optionWrapper: {
      margin: 10,
    },
    optionTouchable: {
      activeOpacity: 70,
    },
    optionText: {
      fontFamily: Fonts.base.family,
      fontSize: Fonts.base.size,
      lineHeight: Fonts.base.lineHeight,
      color: Colors.blue400,
      fontWeight: '500',
      textAlign: 'center',
    },
  },
  buttons: {
    backgroundColor: Colors.blue100,
    color: Colors.white,
  },
  containerRadioButtons: {
    backgroundColor: 'transparent',
    width: '50%',
  },
  listItem: {
    backgroundColor: 'transparent',
  },
  chevronContainer: {
    padding: 5,
  },
  chevronButton: {
    flex: 1,
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
  },
  chevron: {
    fontSize: 30,
    color: Colors.blue200,
  },
  activityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Buttons
  containerButtonsValidate: {
    marginVertical: 10,
    display: 'flex',
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonDisabled: {
    backgroundColor: Colors.gray_light,
    padding: 10,
    marginLeft: 30,
    marginRight: 14,
    marginTop: 10,
    borderRadius: 3,
    opacity: 50,
  },
  button: {
    backgroundColor: Colors.blue100,
    padding: 10,
    marginLeft: 30,
    marginRight: 14,
    marginTop: 10,
    borderRadius: 3,
  },

  // Other
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.gray_light,
  },
};
