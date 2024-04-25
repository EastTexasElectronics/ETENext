'use client';

import { ThemeProvider } from 'next-themes';
import { ThemeProvidersProps} from '~/shared/types';

const ThemeProviders = ({ children }: ThemeProvidersProps) => (
  <ThemeProvider attribute="class" disableTransitionOnChange>
    {children}
  </ThemeProvider>
);

export default ThemeProviders;
