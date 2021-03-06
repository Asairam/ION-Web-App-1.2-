import {Locker, LockerConfig } from './Locker';
import {LockerModule} from './Locker.module';

export * from './Driver';
export * from './PolyfillDriver';
export * from './IStorage';
export * from './Locker.module';
export * from './Locker';
export * from './DriverTypes';

// angular-cli
export default {
  ngModule: LockerModule,
  providers: [LockerConfig, Locker],
};
