/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SANITY_STUDIO_PROJECT_ID: string
  readonly SANITY_STUDIO_SITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
