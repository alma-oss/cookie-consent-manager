import { CookieTableCategories, ExtraMessages } from '../types';
import { Translation } from 'vanilla-cookieconsent';
/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export declare const config: (extraMessages: ExtraMessages, cookieTable: CookieTableCategories) => Translation;
export default config;
