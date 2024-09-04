import { metadataModule } from '@/server/metadata';
import { translation } from '@/server/translation';

export const generateMetadata = async () => {
  const { t } = await translation('subscription');
  return metadataModule.generate({
    description: t('header.desc'),
    title: t('tab.usage'),
    url: '/subscription/usage',
  });
};
export { default } from './index';
