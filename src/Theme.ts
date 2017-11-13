export interface Theme {
  overrides?: ComponentThemes;
  content?: Partial<CSSStyleDeclaration>;
  h1?: Partial<CSSStyleDeclaration>;
  h2?: Partial<CSSStyleDeclaration>;
  h3?: Partial<CSSStyleDeclaration>;
  h4?: Partial<CSSStyleDeclaration>;
  h5?: Partial<CSSStyleDeclaration>;
  h6?: Partial<CSSStyleDeclaration>;
  ul?: Partial<CSSStyleDeclaration>;
  ol?: Partial<CSSStyleDeclaration>;
  p?: Partial<CSSStyleDeclaration>;
  table?: Partial<CSSStyleDeclaration>;
  fieldset?: Partial<CSSStyleDeclaration>;
  blockquote?: Partial<CSSStyleDeclaration>;
  form?: Partial<CSSStyleDeclaration>;
  img?: Partial<CSSStyleDeclaration>;
}

export interface ComponentTheme {
  dangerouslyOverrideCss?: CSSStyleDeclaration;
  [prop: string]: any;
}

export interface ComponentThemes {
  [key: string]: ComponentTheme;
}
