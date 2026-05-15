/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVICE_ID: string;
  readonly VITE_TEMPLATE_ID: string;
  readonly VITE_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "emailjs-com";
declare module "eslint-plugin-react";
declare module "eslint-plugin-react-hooks";
declare module "eslint-plugin-react-refresh";
declare module "@eslint/js";
