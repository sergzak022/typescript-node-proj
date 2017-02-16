import { expect } from 'chai';

describe('Hello function', () => {
  it('should test hello world', () => {
    expect('Hello World!').to.equal('Hello World!');
  });
});

describe('Hello function', () => {
  describe('Hello function', () => {
    it('should test hello world', () => {
      expect('Hello World!').to.equal('Hello World!');
    });
  });
});

