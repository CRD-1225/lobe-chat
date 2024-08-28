'use client';

import { useResponsive } from 'antd-style';
import { memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import Footer from '@/features/Subscription/Footer';
import SubscriptionContainer from '@/features/Subscription/SubscriptionContainer';
import { useActiveSubscriptionKey } from '@/hooks/useActiveSubscriptionKey';

import { LayoutProps } from '../type';
import Header from './Header';
import SideBar from './SideBar';

const Layout = memo<LayoutProps>(({ children, category }) => {
  const ref = useRef<any>(null);
  const { md = true } = useResponsive();
  const { t } = useTranslation('subscription');
  const activeKey = useActiveSubscriptionKey();

  return (
    <Flexbox
      height={'100%'}
      horizontal={md}
      ref={ref}
      style={{ position: 'relative' }}
      width={'100%'}
    >
      {md ? (
        <SideBar>{category}</SideBar>
      ) : (
        <Header getContainer={() => ref.current} title={<>{t(`tab.${activeKey}`)}</>}>
          {category}
        </Header>
      )}
      <SubscriptionContainer addonAfter={<Footer />}>{children}</SubscriptionContainer>
    </Flexbox>
  );
});

Layout.displayName = 'DesktopSubscriptionLayout';

export default Layout;
