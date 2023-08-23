import BridgeConstants from './bridge-constants';

export default class BridgeRegtestConstants implements BridgeConstants {
  peginConfirmations = 3;
  pegoutConfirmations = 3;
  minimumPegoutValueInSatoshis = 250000;
  powpegActivationDelay = 10;
  powpegMigrationDelay = 15;
  powpegMigrationDuration = 150;
  pegoutEventInterval = 50;
}
