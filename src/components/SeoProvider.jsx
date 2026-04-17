import { HelmetProvider } from 'react-helmet-async';

export const SeoProvider = ({ children }) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
};

export default SeoProvider;
