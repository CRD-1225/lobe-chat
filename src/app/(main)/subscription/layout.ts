import ServerLayout from '@/components/server/ServerLayout';

import Desktop from './_layout/Desktop';
import Mobile from './_layout/Mobile';
import { LayoutProps } from './_layout/type';

const SubscriptionLayout = ServerLayout<LayoutProps>({ Desktop, Mobile });

SubscriptionLayout.displayName = 'SubscriptionLayout';

export default SubscriptionLayout;
