'use client';

import { Statistic } from 'antd';
import { memo } from 'react';

const Summary = memo(() => {
  return <Statistic prefix={'$'} title={'Summary'} value={0} />;
});

export default Summary;
