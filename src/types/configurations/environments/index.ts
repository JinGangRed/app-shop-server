import type { config as production } from '@/configurations/environments/production';

import { config as base } from '@/configurations/environments/default';

export type DefaultConfig = typeof base;

export type ProductionConfig = typeof production;

export type EnvironmentConfig = DefaultConfig & ProductionConfig;
