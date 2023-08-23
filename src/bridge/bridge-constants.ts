export default interface BridgeConstants {
  peginConfirmations: number;
  pegoutConfirmations: number;
  minimumPegoutValueInSatoshis: number;
  powpegActivationDelay: number;
  powpegMigrationDelay: number;
  powpegMigrationDuration: number;
  pegoutEventInterval: number;
}
