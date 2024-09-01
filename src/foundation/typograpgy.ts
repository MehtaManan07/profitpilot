const GTMaruFont = {
  Regular: "GT-Maru-Regular",
  Medium: "GT-Maru-Medium",
  Bold: "GT-Maru-Bold",
  Black: "GT-Maru-Black",
  Italic: "GT-Maru-Medium-Oblique",
} as const;

type GTMaruFontWeight = keyof typeof GTMaruFont;

interface Typeface {
  fontSize: number;
  // fontFamily: (typeof GTMaruFont)[GTMaruFontWeight];
  letterSpacing: number;
  lineHeight: number;
}

const textVariants = {
  "h1-large": {
    fontSize: 32,
    // fontFamily: GTMaruFont.Bold,
    letterSpacing: 2,
    lineHeight: 42,
  },
  "h1-pro": {
    fontSize: 24,
    // fontFamily: GTMaruFont.Bold,
    letterSpacing: 0,
    lineHeight: 34,
  },
  h1: {
    fontSize: 17,
    // fontFamily: GTMaruFont.Bold,
    letterSpacing: 0,
    lineHeight: 24,
  },
  "b1-m": {
    fontSize: 14,
    // fontFamily: GTMaruFont.Medium,
    letterSpacing: 0,
    lineHeight: 19,
  },

  "b2-m": {
    fontSize: 12,
    // fontFamily: GTMaruFont.Regular,
    letterSpacing: 0,
    lineHeight: 17,
  },
} as const satisfies Record<string, Typeface>;

export { textVariants, GTMaruFont, GTMaruFontWeight, Typeface };
