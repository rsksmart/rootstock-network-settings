import BridgeConstants from './bridge-constants';

export default class BridgeTestnetConstants implements BridgeConstants {
  peginConfirmations = 10;
  pegoutConfirmations = 10;
  minimumPegoutValueInSatoshis = 250000;
  powpegActivationDelay = 60;
  powpegMigrationDelay = 60;
  powpegMigrationDuration = 900;
  pegoutEventInterval = 360;
}
