import { CreditCardFormatPipe } from '../../shared/pipes/credit-card-format.pipe';

describe('CreditCardFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
