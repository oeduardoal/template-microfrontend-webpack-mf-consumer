import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
import * as colors from "@radix-ui/colors";

export const { css, config, getCssText, globalCss, styled } = createStitches({
  theme: {
    fonts: {
      system: "system-ui",
    },
    colors: {
      ...colors.blackA,
      ...colors.whiteA,
      ...colors.orange,
      ...colors.blue,
      ...colors.blueDark,
      background: "#000000",
      text: "#FFFFFF",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
      7: "48px",
      8: "64px",
      9: "72px",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px",
      7: "256px",
      8: "512px",
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px",
      7: "256px",
      8: "512px",
    },
    lineHeights: {
      1: "18px",
      2: "21px",
      3: "24px",
      4: "30px",
      5: "36px",
      6: "48px",
      7: "72px",
      8: "96px",
      9: "108px",
    },
    radii: {
      1: "2px",
      2: "4px",
      3: "8px",
      round: "9999px",
    },
  },
  media: {
    xs: "(min-width: 575px)",
    sm: "(min-width: 750px)",
    md: "(min-width: 1000px)",
    lg: "(min-width: 1200px)",
  },
  utils: {
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    my: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

const _box = css({
  boxSizing: "border-box",
});

export const cx = (css: CSS) => _box({ css });
