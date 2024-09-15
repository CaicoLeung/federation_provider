import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3000
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: true
  },
  tools: {
    rspack: {
      output: {
        uniqueName: 'federation_provider'
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'federation_provider',
          exposes: {
            './button': './src/Button.tsx',
            './export-app': './src/export-app.tsx',
          },
          shared: ['react', 'react-dom'],
        })
      ]
    }
  }
});
