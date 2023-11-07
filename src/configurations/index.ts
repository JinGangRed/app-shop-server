import { EnvironmentConfig } from '@/types/configurations/environments';

export const configuration = async (): Promise<EnvironmentConfig> => {
  const defaultConfig = await import(`${__dirname}/environments/default`);

  const envConfig = await import(
    `${__dirname}/environments/${process.env.NODE_ENV || 'development'}`
  );

  return { ...defaultConfig, ...envConfig };
};
