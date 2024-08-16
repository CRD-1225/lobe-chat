import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · TsuiChat` : 'TsuiChat';
  }, [title]);

  return null;
});

export default PageTitle;
