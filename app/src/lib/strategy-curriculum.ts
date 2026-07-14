export type StrategyAssetClass = "FOREX" | "CRYPTO" | "GOLD" | string;

export type StrategyModuleLink = {
  id: string;
  moduleNumber: string;
  level: number;
  title: string;
  completed?: boolean;
};

export type StrategyCurriculumModule = {
  id: string;
  moduleNumber: string;
  level: number;
  title: string;
  logicIds?: string[];
  strategyFamilies?: string[];
  completed?: boolean;
};

export type StrategyLike = {
  id?: string;
  logicId?: string;
  displayCode?: string;
  sequenceNumber?: number;
  assetClass?: StrategyAssetClass;
  track?: string;
  family?: string;
  parentFamily?: string;
  learningProfile?: any;
};

export function assetCode(assetClass?: StrategyAssetClass): "FX" | "CR" | "GD" {
  if (assetClass === "CRYPTO") return "CR";
  if (assetClass === "GOLD") return "GD";
  return "FX";
}

export function getVaultStrategyRef(id: string): string {
  return `SV-${id}`;
}

export function getLegacyStrategyCode(assetClass?: StrategyAssetClass, sequenceNumber?: number): string {
  return `${assetCode(assetClass)}-${String(sequenceNumber ?? 0).padStart(3, "0")}`;
}

export function getStrategyLevel(strategy: StrategyLike, fallback = 2): number {
  const level = strategy.learningProfile?.level ?? (strategy as any).level;
  return Number.isInteger(level) ? level : fallback;
}

export function getStrategyFamily(strategy: StrategyLike): string {
  return (
    strategy.learningProfile?.family ||
    strategy.parentFamily ||
    strategy.family ||
    "General Strategy"
  );
}

export function getStrategyRefs(strategy: StrategyLike): string[] {
  const refs = new Set<string>();
  if (strategy.id) {
    refs.add(strategy.id);
    refs.add(getVaultStrategyRef(strategy.id));
  }
  if (strategy.logicId) refs.add(strategy.logicId);
  if (strategy.displayCode) refs.add(strategy.displayCode);
  if (strategy.assetClass && strategy.sequenceNumber !== undefined) {
    refs.add(getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber));
  }
  return Array.from(refs);
}

export function strategyMatchesModule(strategy: StrategyLike, module: StrategyCurriculumModule): boolean {
  const refs = getStrategyRefs(strategy);
  const logicIds = module.logicIds || [];
  if (refs.some(ref => logicIds.includes(ref))) return true;

  const families = module.strategyFamilies || [];
  const family = getStrategyFamily(strategy);
  return families.includes(family);
}

export function getStrategyLinkedModules(
  strategy: StrategyLike,
  modules: StrategyCurriculumModule[] = []
): StrategyModuleLink[] {
  return modules
    .filter(module => strategyMatchesModule(strategy, module))
    .map(module => ({
      id: module.id,
      moduleNumber: module.moduleNumber,
      level: module.level,
      title: module.title,
      completed: module.completed,
    }));
}

export function getCompletedStrategyRefs(modules: StrategyCurriculumModule[] = []): string[] {
  const refs = new Set<string>();
  for (const module of modules) {
    if (!module.completed) continue;
    for (const ref of module.logicIds || []) refs.add(ref);
    for (const family of module.strategyFamilies || []) refs.add(`family:${family}`);
  }
  return Array.from(refs);
}

export function isStrategyUnlockedByCurriculum(
  strategy: StrategyLike,
  completedRefs: string[] = [],
  linkedModules: StrategyModuleLink[] = []
): boolean {
  const completed = new Set(completedRefs);
  if (getStrategyRefs(strategy).some(ref => completed.has(ref))) return true;
  const family = getStrategyFamily(strategy);
  if (completed.has(`family:${family}`)) return true;
  return linkedModules.length > 0 && linkedModules.some(module => module.completed);
}
