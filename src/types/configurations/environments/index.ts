import { config as base } from '@/configurations/environments/default';

import type { config as production } from '@/configurations/environments/production';

export type DefaultConfig = typeof base;

export type ProductionConfig = typeof production;

export type EnvironmentConfig = DefaultConfig & ProductionConfig;
