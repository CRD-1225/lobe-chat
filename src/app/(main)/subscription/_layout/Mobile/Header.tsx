'use client';

import { MobileNavBar, MobileNavBarTitle } from '@lobehub/ui';
import { useRouter, useSearchParams } from 'next/navigation';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { useActiveSubscriptionKey } from '@/hooks/useActiveSubscriptionKey';
import { useUserStore } from '@/store/user';
import { authSelectors } from '@/store/user/selectors';
import { mobileHeaderSticky } from '@/styles/mobileHeader';

const Header = memo(() => {
  const { t } = useTranslation('subscription');

  const router = useRouter();
  const searchParams = useSearchParams();
  const activeSubscriptionKey = useActiveSubscriptionKey();

  const enableAuth = useUserStore(authSelectors.enabledAuth);
  const handleBackClick = () => {
    if (searchParams.has('session') && searchParams.has('showMobileWorkspace')) {
      router.push(`/chat?${searchParams.toString()}`);
    } else {
      router.push(enableAuth ? '/me/settings' : '/me');
    }
  };
  return (
    <MobileNavBar
      center={
        <MobileNavBarTitle
          title={
            <Flexbox align={'center'} gap={8} horizontal>
              <span style={{ lineHeight: 1.2 }}> {t(`tab.${activeSubscriptionKey}`)}</span>
            </Flexbox>
          }
        />
      }
      onBackClick={handleBackClick}
      showBackButton
      style={mobileHeaderSticky}
    />
  );
});

export default Header;
