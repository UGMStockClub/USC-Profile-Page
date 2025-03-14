import {defineConfig} from '@junobuild/config';

export default defineConfig({
  satellite: {
    id: 'lfy34-yyaaa-aaaal-asara-cai',
    source: 'build',
    predeploy: ['npm run build']
  }
});
