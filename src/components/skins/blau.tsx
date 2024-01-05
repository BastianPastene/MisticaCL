import {BLAU_SKIN} from './constants';
import {applyAlpha} from '../utils/color';

// import type {GetKnownSkin, KnownSkin} from './types';

export const palette = {
  blauBluePrimary: '#00B6F1',
  blauBluePrimary10: '#F7FDFF',
  blauBluePrimary20: '#E5F6FD',
  blauBluePrimary30: '#B3E9FB',
  blauBlueSecondary: '#0072BC',
  blauBlueSecondary10: '#E5F1F9',
  blauBlueSecondary20: '#B2D4EC',
  blauBlueSecondary30: '#80B7DF',
  blauBlueSecondary60: '#005A99',
  blauPurple: '#7814B3',
  blauPurple10: '#F1E7F7',
  blauPurple30: '#BB89D9',
  blauYellow: '#FFA922',
  blauYellow10: '#FFF6E9',
  blauYellow40: '#FFC364',
  blauYellow60: '#F09500',
  blauYellow70: '#996614',
  blauGreen: '#30D300',
  blauGreen10: '#EAFBE5',
  blauGreen30: '#97E980',
  blauGreen70: '#1D7F00',
  blauRed: '#F64417',
  blauRed10: '#FEECE8',
  blauRed20: '#FCC7B9',
  blauRed30: '#FA9E87',
  blauRed40: '#F97C5D',
  blauRed70: '#C93712',
  grey1: '#F5F9FA',
  grey2: '#E7E7E7',
  grey3: '#B8B8B8',
  grey4: '#A0A0A0',
  grey5: '#808285',
  grey6: '#000000',
  white: '#FFFFFF',
  darkModeBlack: '#191919',
  darkModeGrey: '#242424',
  darkModeGrey6: '#313235',
};

export const getBlauSkin: any = () => {
  const skin: any = {
    name: BLAU_SKIN,
    colors: {
      backgroundBrand: palette.blauBluePrimary,
      backgroundBrandSecondary: palette.blauBluePrimary,
      appBarBackground: palette.white,
      background: palette.white,
      backgroundContainer: palette.white,
      backgroundContainerHover: applyAlpha(palette.blauBluePrimary, 0.03),
      backgroundContainerPressed: applyAlpha(palette.blauBluePrimary, 0.05),
      backgroundContainerBrand: palette.blauBluePrimary,
      backgroundContainerBrandHover: applyAlpha(palette.darkModeBlack, 0.2),
      backgroundContainerBrandPressed: applyAlpha(palette.darkModeBlack, 0.4),
      backgroundContainerBrandOverInverse: palette.blauBlueSecondary,
      backgroundContainerAlternative: palette.blauBluePrimary20,
      backgroundOverlay: applyAlpha(palette.blauBlueSecondary, 0.75),
      backgroundSkeleton: palette.grey2,
      backgroundSkeletonInverse: palette.blauBlueSecondary,
      navigationBarBackground: palette.blauBluePrimary,
      backgroundAlternative: palette.blauBluePrimary20,
      backgroundFeedbackBottom: palette.blauBluePrimary,
      skeletonWave: palette.grey2,
      borderLow: palette.grey1,
      border: palette.grey2,
      borderHigh: palette.grey5,
      borderSelected: palette.blauBlueSecondary60,
      coverBackgroundHover: applyAlpha(palette.darkModeBlack, 0.25),
      coverBackgroundPressed: applyAlpha(palette.darkModeBlack, 0.35),
      buttonDangerBackground: palette.blauRed,
      buttonDangerBackgroundSelected: palette.blauRed70,
      buttonDangerBackgroundHover: palette.blauRed70,
      buttonLinkBackgroundSelected: palette.blauPurple10,
      buttonLinkBackgroundInverseSelected: applyAlpha(palette.white, 0.15),
      buttonPrimaryBackground: palette.blauBlueSecondary,
      buttonPrimaryBackgroundInverse: palette.white,
      buttonPrimaryBackgroundSelected: palette.blauBlueSecondary60,
      buttonPrimaryBackgroundHover: palette.blauBlueSecondary60,
      buttonPrimaryBackgroundInverseSelected: palette.blauBluePrimary30,
      buttonSecondaryBorder: palette.blauBlueSecondary,
      buttonSecondaryBorderSelected: palette.blauBlueSecondary60,
      buttonSecondaryBorderInverse: palette.white,
      buttonSecondaryBackgroundHover: palette.blauBlueSecondary10,
      buttonSecondaryBackgroundSelected: palette.blauBlueSecondary10,
      buttonSecondaryBorderInverseSelected: palette.white,
      buttonSecondaryBackgroundInverseHover: applyAlpha(palette.white, 0.2),
      buttonSecondaryBackgroundInverseSelected: applyAlpha(palette.white, 0.2),
      textButtonPrimary: palette.white,
      textButtonPrimaryInverse: palette.blauBlueSecondary,
      textButtonPrimaryInverseSelected: palette.blauBlueSecondary60,
      textButtonSecondary: palette.blauBlueSecondary,
      textButtonSecondarySelected: palette.blauBlueSecondary60,
      textButtonSecondaryInverse: palette.white,
      textButtonSecondaryInverseSelected: palette.white,
      textLink: palette.blauPurple,
      textLinkInverse: palette.white,
      textLinkDanger: palette.blauRed,
      textLinkSnackbar: palette.blauPurple30,
      control: palette.grey2,
      controlActivated: palette.blauBlueSecondary,
      controlError: palette.blauRed,
      loadingBar: palette.blauBlueSecondary,
      loadingBarBackground: palette.blauBlueSecondary10,
      toggleAndroidInactive: palette.grey2,
      toggleAndroidBackgroundActive: palette.blauBlueSecondary10,
      iosControlKnob: palette.white,
      divider: palette.grey2,
      dividerInverse: applyAlpha(palette.white, 0.2),
      navigationBarDivider: palette.blauBluePrimary,
      badge: palette.blauRed,
      feedbackErrorBackground: palette.blauRed,
      feedbackInfoBackground: palette.grey6,
      brand: palette.blauBluePrimary,
      brandHigh: palette.blauBlueSecondary,
      inverse: palette.white,
      neutralHigh: palette.grey6,
      neutralMedium: palette.grey5,
      neutralMediumInverse: palette.grey5,
      neutralLow: palette.grey2,
      neutralLowAlternative: palette.grey2,
      textPrimary: palette.grey6,
      textPrimaryInverse: palette.white,
      textSecondary: palette.grey5,
      textSecondaryInverse: palette.blauBluePrimary20,
      error: palette.blauRed,
      success: palette.blauGreen,
      warning: palette.blauYellow,
      promo: palette.blauPurple,
      highlight: palette.blauBluePrimary,
      successLow: palette.blauGreen10,
      warningLow: palette.blauYellow10,
      errorLow: palette.blauRed10,
      promoLow: palette.blauPurple10,
      brandLow: palette.blauBlueSecondary10,
      successHigh: palette.blauGreen70,
      warningHigh: palette.blauYellow70,
      errorHigh: palette.blauRed70,
      promoHigh: palette.blauPurple,
      successHighInverse: palette.blauGreen70,
      warningHighInverse: palette.blauYellow70,
      errorHighInverse: palette.blauRed70,
      promoHighInverse: palette.blauPurple,
      textNavigationBarPrimary: palette.white,
      textNavigationBarSecondary: palette.blauBlueSecondary20,
      textNavigationSearchBarHint: palette.blauBlueSecondary20,
      textNavigationSearchBarText: palette.white,
      textAppBar: palette.grey5,
      textAppBarSelected: palette.blauBlueSecondary60,
      customTabsBackground: palette.blauBluePrimary,
    },
    darkModeColors: {
      background: palette.darkModeBlack,
      backgroundAlternative: palette.darkModeBlack,
      backgroundBrand: palette.darkModeBlack,
      backgroundBrandSecondary: palette.darkModeBlack,
      backgroundContainer: palette.darkModeGrey,
      backgroundContainerHover: applyAlpha(palette.white, 0.03),
      backgroundContainerPressed: applyAlpha(palette.white, 0.05),
      backgroundContainerBrand: palette.darkModeGrey,
      backgroundContainerBrandHover: applyAlpha(palette.white, 0.03),
      backgroundContainerBrandPressed: applyAlpha(palette.white, 0.05),
      backgroundContainerBrandOverInverse: palette.darkModeGrey,
      backgroundContainerAlternative: palette.darkModeGrey,
      backgroundOverlay: applyAlpha(palette.darkModeGrey, 0.8),
      backgroundSkeleton: palette.darkModeGrey,
      backgroundSkeletonInverse: palette.darkModeGrey,
      backgroundFeedbackBottom: palette.darkModeBlack,
      appBarBackground: palette.darkModeGrey,
      navigationBarBackground: palette.darkModeBlack,
      skeletonWave: palette.grey5,
      borderLow: palette.darkModeBlack,
      border: palette.darkModeGrey,
      borderHigh: palette.grey5,
      borderSelected: palette.blauBlueSecondary60,
      coverBackgroundHover: applyAlpha(palette.darkModeBlack, 0.25),
      coverBackgroundPressed: applyAlpha(palette.darkModeBlack, 0.35),
      buttonDangerBackground: palette.blauRed,
      buttonDangerBackgroundSelected: palette.blauRed70,
      buttonDangerBackgroundHover: palette.blauRed70,
      buttonLinkBackgroundSelected: applyAlpha(palette.blauPurple, 0.3),
      buttonLinkBackgroundInverseSelected: applyAlpha(palette.blauPurple, 0.3),
      buttonPrimaryBackground: palette.blauBlueSecondary,
      buttonPrimaryBackgroundInverse: palette.blauBluePrimary,
      buttonPrimaryBackgroundSelected: palette.blauBlueSecondary60,
      buttonPrimaryBackgroundHover: palette.blauBlueSecondary60,
      buttonPrimaryBackgroundInverseSelected: palette.blauBlueSecondary60,
      buttonSecondaryBorder: palette.white,
      buttonSecondaryBorderSelected: palette.white,
      buttonSecondaryBackgroundHover: applyAlpha(palette.white, 0.15),
      buttonSecondaryBackgroundSelected: applyAlpha(palette.white, 0.15),
      buttonSecondaryBorderInverse: palette.white,
      buttonSecondaryBorderInverseSelected: palette.white,
      buttonSecondaryBackgroundInverseHover: applyAlpha(palette.white, 0.15),
      buttonSecondaryBackgroundInverseSelected: applyAlpha(palette.white, 0.15),
      textButtonPrimary: palette.grey2,
      textButtonPrimaryInverse: palette.grey2,
      textButtonPrimaryInverseSelected: palette.grey2,
      textButtonSecondary: palette.grey2,
      textButtonSecondarySelected: palette.grey2,
      textButtonSecondaryInverse: palette.grey2,
      textButtonSecondaryInverseSelected: palette.grey2,
      textLink: palette.blauPurple30,
      textLinkInverse: palette.blauPurple30,
      textLinkDanger: palette.blauRed,
      textLinkSnackbar: palette.blauPurple30,
      control: palette.darkModeGrey6,
      controlActivated: palette.blauBlueSecondary,
      controlError: palette.blauRed,
      loadingBar: palette.blauBluePrimary,
      loadingBarBackground: palette.darkModeGrey,
      toggleAndroidInactive: palette.grey5,
      toggleAndroidBackgroundActive: palette.blauBlueSecondary30,
      iosControlKnob: palette.grey2,
      divider: applyAlpha(palette.white, 0.05),
      dividerInverse: applyAlpha(palette.white, 0.05),
      navigationBarDivider: palette.darkModeBlack,
      badge: palette.blauRed,
      feedbackErrorBackground: palette.blauRed,
      feedbackInfoBackground: palette.darkModeGrey,
      brand: palette.blauBluePrimary,
      brandHigh: applyAlpha(palette.white, 0.05),
      inverse: palette.grey2,
      neutralHigh: palette.grey2,
      neutralMedium: palette.grey5,
      neutralMediumInverse: palette.grey5,
      neutralLow: palette.darkModeGrey6,
      neutralLowAlternative: palette.darkModeGrey6,
      textPrimary: palette.grey2,
      textPrimaryInverse: palette.grey2,
      textSecondary: palette.grey4,
      textSecondaryInverse: palette.grey4,
      error: palette.blauRed,
      success: palette.blauGreen,
      warning: palette.blauYellow,
      promo: palette.blauPurple,
      highlight: palette.blauBluePrimary,
      successLow: palette.darkModeGrey6,
      warningLow: palette.darkModeGrey6,
      errorLow: palette.darkModeGrey6,
      promoLow: palette.darkModeGrey6,
      brandLow: palette.darkModeGrey6,
      successHigh: palette.blauGreen30,
      warningHigh: palette.blauYellow40,
      errorHigh: palette.blauRed40,
      promoHigh: palette.blauPurple30,
      successHighInverse: palette.blauGreen70,
      warningHighInverse: palette.blauYellow70,
      errorHighInverse: palette.blauRed70,
      promoHighInverse: palette.blauPurple,
      textNavigationBarPrimary: palette.grey2,
      textNavigationBarSecondary: palette.grey4,
      textNavigationSearchBarHint: palette.grey4,
      textNavigationSearchBarText: palette.grey2,
      textAppBar: palette.grey5,
      textAppBarSelected: palette.grey2,
      customTabsBackground: palette.darkModeBlack,
    },
    borderRadii: {
      avatar: '50%',
      bar: '999px',
      button: '4px',
      checkbox: '2px',
      container: '8px',
      indicator: '999px',
      input: '8px',
      legacyDisplay: '16px',
      popup: '8px',
      sheet: '8px',
    },
    textPresets: {
      cardTitle: {weight: 'regular'},
      text5: {weight: 'light'},
      text6: {weight: 'light'},
      text7: {weight: 'light'},
      text8: {weight: 'light'},
      text9: {weight: 'light'},
      text10: {weight: 'light'},
    },
  };
  return skin;
};
