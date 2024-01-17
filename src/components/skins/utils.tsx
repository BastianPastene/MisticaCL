import { tokenfigma } from '../utils/tokenfigma';
import {TELEFONICA_SKIN,} from './constants';
import {getTelefonicaSkin} from './telefonica';
import type {SkinVariant, KnownSkin, KnownSkinName} from './types';

export const getSkinByName = (
  name: KnownSkinName,
  variant?: SkinVariant,
  token?: any
): KnownSkin => {
  switch (name) {
    case TELEFONICA_SKIN:
      return getTelefonicaSkin(variant);
    default: {
      return getTelefonicaSkin(variant);
    }
  }
};
