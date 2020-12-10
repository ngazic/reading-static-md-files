declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.md" {
  const value: string;
  export default value;
}

declare module "marked" {
  const value: (s: string)=>string;
  export default value;
}