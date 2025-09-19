// sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk'
import { schemaTypes } from "./schemaTypes"
import { RocketIcon } from '@sanity/icons'; // Or any icon you like
import { deskStructure } from './deskStructure'

// Import your custom tool component
import BackupTool from './components/BackupTool';

export default defineConfig({
  name: 'default',
  title: 'Local Loop FL',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: 'production',

 plugins: [
    deskTool({
      structure: deskStructure, // ✅ custom structure
    }),
  ],
 // Your other plugins

  schema: {
    types: schemaTypes,
  },

  // Add the tool to the Studio navbarx
tools: (prev) => [
  ...prev,
  {
    title: "Backup",
    name: "backup-tool",
    icon: RocketIcon,
    component: BackupTool,
  },
],
});