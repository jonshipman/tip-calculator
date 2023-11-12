import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jonshipman.tipcalc',
  appName: 'Tip Calculation Calculator',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
