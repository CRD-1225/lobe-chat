'use client';

import { memo } from 'react';
import urlJoin from 'url-join';

import Menu from '@/components/Menu';
import { useActiveSubscriptionKey } from '@/hooks/useActiveSubscriptionKey';
import { useQueryRoute } from '@/hooks/useQueryRoute';

import { useCategory } from '../../hooks/useCategory';

const CategoryContent = memo(() => {
  const activeTab = useActiveSubscriptionKey();
  const cateItems = useCategory();
  const router = useQueryRoute();

  return (
    <Menu
      items={cateItems}
      onClick={({ key }) => {
        router.push(urlJoin('/subscription', key));
      }}
      selectable
      selectedKeys={[activeTab as any]}
      variant={'compact'}
    />
  );
});

export default CategoryContent;
