import 'dotenv/config';
import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Holis AI',
  slug: 'holis-ai',
  scheme: 'holis',
  version: '1.0.0',
  orientation: 'portrait',
  extra: {
    eas: {
      projectId: '00000000-0000-0000-0000-000000000000',
    },
  },
});
