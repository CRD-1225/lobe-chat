import { Icon } from '@lobehub/ui';
import { ChartPie, Dock, Handshake, SquareChartGantt } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import type { MenuProps } from '@/components/Menu';
import { SubscriptionTabs } from '@/store/global/initialState';

export const useCategory = () => {
  const { t } = useTranslation('subscription');

  const cateItems: MenuProps['items'] = useMemo(
    () =>
      [
        {
          icon: <Icon icon={Handshake} />,
          key: SubscriptionTabs.Plans,
          label: (
            <Link href={'/subscription/plans'} onClick={(e) => e.preventDefault()}>
              {t('tab.plans')}
            </Link>
          ),
        },
        {
          icon: <Icon icon={ChartPie} />,
          key: SubscriptionTabs.Usage,
          label: (
            <Link href={'/subscription/usage'} onClick={(e) => e.preventDefault()}>
              {t('tab.usage')}
            </Link>
          ),
        },
        {
          icon: <Icon icon={SquareChartGantt} />,
          key: SubscriptionTabs.Spend,
          label: (
            <Link href={'/subscription/spend'} onClick={(e) => e.preventDefault()}>
              {t('tab.spend')}
            </Link>
          ),
        },
        {
          icon: <Icon icon={Dock} />,
          key: SubscriptionTabs.Billing,
          label: (
            <Link href={'/subscription/billing'} onClick={(e) => e.preventDefault()}>
              {t('tab.billing')}
            </Link>
          ),
        },
      ].filter(Boolean) as MenuProps['items'],
    [t],
  );

  return cateItems;
};
