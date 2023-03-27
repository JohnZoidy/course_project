declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
  const svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}

declare const __IS_DEV__: boolean;
