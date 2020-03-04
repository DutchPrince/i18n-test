// #region Global Imports
import NextI18Next from "next-i18next";
import * as common from "@static/locales/en/common.json";
// #endregion Global Imports
const path = require("path");

const NextI18NextInstance = new NextI18Next({
    defaultLanguage: "en",
    otherLanguages: ["es", "tr"],
    resources: {
        en: { common },
    },
    localePath: path.join(__dirname, "static", "locales"),
});

export const { appWithTranslation, withTranslation } = NextI18NextInstance;

export default NextI18NextInstance;
