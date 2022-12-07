import { ErpDetails } from './erp-details';

export class MainnetErpDetails implements ErpDetails {
  getErpPublicKeys(): Array<string> {
    return [
      '0257c293086c4d4fe8943deda5f890a37d11bebd140e220faa76258a41d077b4d4',
      '03c2660a46aa73078ee6016dee953488566426cf55fc8011edd0085634d75395f9',
      '03cd3e383ec6e12719a6c69515e5559bcbe037d0aa24c187e1e26ce932e22ad7b3',
      '02370a9838e4d15708ad14a104ee5606b36caaaaf739d833e67770ce9fd9b3ec80',
    ];
  }

  getCsvValue(): number {
    return 52560; // 50cd00 in signed LE
  }
}
