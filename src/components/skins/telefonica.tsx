import {TELEFONICA_SKIN} from './constants';
import {applyAlpha} from '../utils/color';

// import type {GetKnownSkin, KnownSkin} from './types';




export const palette = {
  telefonicaBlue: '#0066FF',
  telefonicaBlue10: '#E5F0FF',
  telefonicaBlue20: '#B2D1FF',
  telefonicaBlue30: '#80B3FF',
  telefonicaBlue70: '#0356C9',
  ambar: '#EAC344',
  ambar10: '#FDF9EC',
  ambar40: '#F0D57C',
  ambar70: '#69581F',
  coral: '#E66C64',
  coral10: '#FDF0EF',
  coral40: '#E3A19A',
  coral70: '#D50000',
  coral80: '#912C31',
  orchid: '#C466EF',
  orchid10: '#F9F0FD',
  orchid40: '#D694F4',
  orchid70: '#8A1A93',
  turquoise: '#59C2C9',
  turquoise10: '#EEF9FA',
  turquoise40: '#8BD4D9',
  turquoise70: '#3E888D',
  grey1: '#F2F4FF',
  grey2: '#D1D5E4',
  grey3: '#B0B6CA',
  grey4: '#8F97AF',
  grey5: '#6E7894',
  grey6: '#58617A',
  grey7: '#414B61',
  grey8: '#2B3447',
  grey9: '#031A34',
  white: '#FFFFFF',
  darkModeBlack: '#191919',
  darkModeGrey: '#242424',
  darkModeGrey6: '#313235',
};

export const getTelefonicaSkin = () => {

  const skin = {
    name: TELEFONICA_SKIN,
    colors: {
      appBarBackground: palette.white,
      background: palette.white,
      backgroundContainer: palette.white,
      backgroundContainerHover: applyAlpha(palette.telefonicaBlue, 0.03),
      backgroundContainerPressed: applyAlpha(palette.telefonicaBlue, 0.05),
      backgroundContainerBrand: palette.telefonicaBlue,
      backgroundContainerBrandHover: applyAlpha(palette.darkModeBlack, 0.2),
      backgroundContainerBrandPressed: applyAlpha(palette.darkModeBlack, 0.4),
      backgroundContainerBrandOverInverse: palette.telefonicaBlue70,
      backgroundContainerAlternative: palette.grey1,
      backgroundBrand: palette.telefonicaBlue,
      backgroundBrandSecondary: palette.telefonicaBlue,
      backgroundOverlay: applyAlpha(palette.grey6, 0.8),
      backgroundSkeleton: palette.grey2,
      backgroundSkeletonInverse: palette.telefonicaBlue70,
      navigationBarBackground: palette.telefonicaBlue,
      backgroundAlternative: palette.grey1,
      backgroundFeedbackBottom: palette.telefonicaBlue,
      skeletonWave: palette.grey2,
      borderLow: palette.grey1,
      border: palette.grey2,
      borderHigh: palette.grey5,
      borderSelected: palette.telefonicaBlue,
      coverBackgroundHover: applyAlpha(palette.darkModeBlack, 0.25),
      coverBackgroundPressed: applyAlpha(palette.darkModeBlack, 0.35),
      buttonDangerBackground: palette.coral,
      buttonDangerBackgroundSelected: palette.coral80,
      buttonDangerBackgroundHover: palette.coral80,
      buttonLinkBackgroundSelected: palette.grey1,
      buttonLinkBackgroundInverseSelected: applyAlpha(palette.white, 0.08),
      buttonPrimaryBackground: palette.telefonicaBlue,
      buttonPrimaryBackgroundInverse: palette.white,
      buttonPrimaryBackgroundSelected: palette.telefonicaBlue70,
      buttonPrimaryBackgroundHover: palette.telefonicaBlue70,
      buttonPrimaryBackgroundInverseSelected: palette.telefonicaBlue30,
      buttonSecondaryBorder: palette.telefonicaBlue,
      buttonSecondaryBorderSelected: palette.telefonicaBlue70,
      buttonSecondaryBackgroundHover: palette.telefonicaBlue10,
      buttonSecondaryBackgroundSelected: palette.telefonicaBlue10,
      buttonSecondaryBorderInverse: palette.white,
      buttonSecondaryBorderInverseSelected: palette.white,
      buttonSecondaryBackgroundInverseHover: applyAlpha(palette.white, 0.1),
      buttonSecondaryBackgroundInverseSelected: applyAlpha(palette.white, 0.1),
      textButtonPrimary: palette.white,
      textButtonPrimaryInverse: palette.telefonicaBlue,
      textButtonPrimaryInverseSelected: palette.telefonicaBlue,
      textButtonSecondary: palette.telefonicaBlue,
      textButtonSecondarySelected: palette.telefonicaBlue70,
      textButtonSecondaryInverse: palette.white,
      textButtonSecondaryInverseSelected: palette.white,
      textLink: palette.telefonicaBlue,
      textLinkInverse: palette.white,
      textLinkDanger: palette.coral,
      textLinkSnackbar: palette.telefonicaBlue30,
      control: palette.grey3,
      controlActivated: palette.telefonicaBlue,
      controlError: palette.coral,
      loadingBar: palette.telefonicaBlue30,
      loadingBarBackground: palette.telefonicaBlue70,
      toggleAndroidInactive: palette.grey2,
      toggleAndroidBackgroundActive: palette.grey2,
      iosControlKnob: palette.white,
      divider: palette.grey2,
      dividerInverse: applyAlpha(palette.white, 0.2),
      navigationBarDivider: palette.telefonicaBlue,
      badge: palette.coral70,
      feedbackErrorBackground: palette.coral,
      feedbackInfoBackground: palette.grey9,
      brand: palette.telefonicaBlue,
      brandHigh: palette.telefonicaBlue70,
      inverse: palette.white,
      neutralHigh: palette.grey9,
      neutralMedium: palette.grey5,
      neutralMediumInverse: palette.grey5,
      neutralLow: palette.grey1,
      neutralLowAlternative: palette.grey2,
      textPrimary: palette.grey9,
      textPrimaryInverse: palette.white,
      textSecondary: palette.grey5,
      textSecondaryInverse: palette.telefonicaBlue10,
      error: palette.coral,
      success: palette.turquoise,
      warning: palette.ambar,
      promo: palette.orchid,
      highlight: palette.coral40,
      successLow: palette.turquoise10,
      warningLow: palette.ambar10,
      errorLow: palette.coral10,
      promoLow: palette.orchid10,
      brandLow: palette.grey1,
      successHigh: palette.turquoise70,
      warningHigh: palette.ambar70,
      errorHigh: palette.coral70,
      promoHigh: palette.orchid70,
      successHighInverse: palette.turquoise70,
      warningHighInverse: palette.ambar70,
      errorHighInverse: palette.coral70,
      promoHighInverse: palette.orchid70,
      textNavigationBarPrimary: palette.white,
      textNavigationBarSecondary: palette.grey1,
      textNavigationSearchBarHint: palette.grey1,
      textNavigationSearchBarText: palette.white,
      textAppBar: palette.grey4,
      textAppBarSelected: palette.telefonicaBlue,
      customTabsBackground: palette.telefonicaBlue,
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
      backgroundSkeleton: palette.grey6,
      backgroundSkeletonInverse: palette.grey6,
      backgroundFeedbackBottom: palette.darkModeBlack,
      appBarBackground: palette.darkModeGrey,
      navigationBarBackground: palette.darkModeBlack,
      skeletonWave: palette.grey5,
      borderLow: palette.darkModeBlack,
      border: palette.darkModeGrey,
      borderHigh: palette.grey5,
      borderSelected: palette.telefonicaBlue,
      coverBackgroundHover: applyAlpha(palette.darkModeBlack, 0.25),
      coverBackgroundPressed: applyAlpha(palette.darkModeBlack, 0.35),
      buttonDangerBackground: palette.coral,
      buttonDangerBackgroundSelected: palette.coral80,
      buttonDangerBackgroundHover: palette.coral80,
      buttonLinkBackgroundSelected: applyAlpha(palette.white, 0.08),
      buttonLinkBackgroundInverseSelected: applyAlpha(palette.white, 0.08),
      buttonPrimaryBackground: palette.telefonicaBlue,
      buttonPrimaryBackgroundInverse: palette.telefonicaBlue,
      buttonPrimaryBackgroundSelected: palette.telefonicaBlue70,
      buttonPrimaryBackgroundHover: palette.telefonicaBlue70,
      buttonPrimaryBackgroundInverseSelected: palette.telefonicaBlue70,
      buttonSecondaryBackgroundSelected: applyAlpha(palette.white, 0.15),
      buttonSecondaryBorder: palette.white,
      buttonSecondaryBackgroundHover: applyAlpha(palette.white, 0.15),
      buttonSecondaryBorderSelected: palette.white,
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
      textLink: palette.telefonicaBlue,
      textLinkInverse: palette.telefonicaBlue,
      textLinkDanger: palette.coral,
      textLinkSnackbar: palette.telefonicaBlue30,
      control: palette.darkModeGrey6,
      controlActivated: palette.telefonicaBlue,
      controlError: palette.coral,
      loadingBar: palette.telefonicaBlue,
      loadingBarBackground: palette.grey6,
      toggleAndroidInactive: palette.grey4,
      toggleAndroidBackgroundActive: palette.telefonicaBlue20,
      iosControlKnob: palette.grey2,
      divider: applyAlpha(palette.white, 0.05),
      dividerInverse: applyAlpha(palette.white, 0.05),
      navigationBarDivider: palette.darkModeBlack,
      badge: palette.coral70,
      feedbackErrorBackground: palette.coral,
      feedbackInfoBackground: palette.grey8,
      brand: palette.telefonicaBlue,
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
      error: palette.coral,
      success: palette.turquoise,
      warning: palette.ambar,
      promo: palette.orchid,
      highlight: palette.coral40,
      successLow: palette.darkModeGrey6,
      warningLow: palette.darkModeGrey6,
      errorLow: palette.darkModeGrey6,
      promoLow: palette.darkModeGrey6,
      brandLow: palette.darkModeGrey6,
      successHigh: palette.turquoise40,
      warningHigh: palette.ambar40,
      errorHigh: palette.coral40,
      promoHigh: palette.orchid40,
      successHighInverse: palette.turquoise70,
      warningHighInverse: palette.ambar70,
      errorHighInverse: palette.coral70,
      promoHighInverse: palette.orchid70,
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
      bar: '0px',
      button: '999px',
      checkbox: '0px',
      container: '0px',
      indicator: '999px',
      input: '0px',
      legacyDisplay: '0px',
      popup: '0px',
      sheet: '8px',
    },
    textPresets: {
      cardTitle: {weight: 'regular'},
      text5: {weight: 'regular'},
      text6: {weight: 'regular'},
      text7: {weight: 'regular'},
      text8: {weight: 'regular'},
      text9: {weight: 'regular'},
      text10: {weight: 'regular'},
    },
  };
  return skin;
};
