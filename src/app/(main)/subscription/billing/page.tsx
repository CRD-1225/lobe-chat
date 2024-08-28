import { metadataModule } from '@/server/metadata';
import { translation } from '@/server/translation';

import Page from './index';

export const generateMetadata = async () => {
  const { t } = await translation('subscription');
  return metadataModule.generate({
    description: t('header.desc'),
    title: t('tab.about'),
    url: '/subscription/billing',
  });
};

export default () => {
  return <Page />;
};
