import BridgeConstants from './bridge-constants';

export default class BridgeMainnetConstants implements BridgeConstants {
  peginConfirmations = 100;
  pegoutConfirmations = 4000;
  minimumPegoutValueInSatoshis = 400000;
  powpegActivationDelay = 18500;
  powpegMigrationDelay = 0;
  powpegMigrationDuration = 10585;
  pegoutEventInterval = 360;
}
