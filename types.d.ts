import type { CSS } from "@grupoboticario/flora-react";

declare module "*.png";

export type ReactComponent = {
  children?: React.ReactNode;
  css?: CSS;
};
