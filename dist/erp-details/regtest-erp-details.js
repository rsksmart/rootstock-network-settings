"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegtestErpDetails = void 0;
class RegtestErpDetails {
    getErpPublicKeys() {
        return [
            '03b9fc46657cf72a1afa007ecf431de1cd27ff5cc8829fa625b66ca47b967e6b24',
            '029cecea902067992d52c38b28bf0bb2345bda9b21eca76b16a17c477a64e43301',
            '03284178e5fbcc63c54c3b38e3ef88adf2da6c526313650041b0ef955763634ebd',
            '03776b1fd8f86da3c1db3d69699e8250a15877d286734ea9a6da8e9d8ad25d16c1',
            '03ab0e2cd7ed158687fc13b88019990860cdb72b1f5777b58513312550ea1584bc',
        ];
    }
    getCsvValue() {
        return 'f401'; // 500 in hexa, serialized as signed LE
    }
}
exports.RegtestErpDetails = RegtestErpDetails;
//# sourceMappingURL=regtest-erp-details.js.map