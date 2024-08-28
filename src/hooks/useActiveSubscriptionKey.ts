import { usePathname } from 'next/navigation';

import { SubscriptionTabs } from '@/store/global/initialState';

/**
 * Returns the active tab key (subscription/plans/...)
 */
export const useActiveSubscriptionKey = () => {
  const pathname = usePathname();
  const tabs = pathname.split('/').at(-1);
  if (tabs === 'subscription') return SubscriptionTabs.Plans;
  return tabs as SubscriptionTabs;
};
