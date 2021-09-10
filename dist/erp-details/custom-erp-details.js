"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErpDetails = void 0;
class CustomErpDetails {
    constructor(_customDetails) {
        this.customDetails = _customDetails;
    }
    getErpPublicKeys() {
        return this.customDetails.erpPublicKeys;
    }
    getCsvValue() {
        return this.customDetails.csvValue;
    }
}
exports.CustomErpDetails = CustomErpDetails;
//# sourceMappingURL=custom-erp-details.js.map