import { expect } from 'chai';
import isValid from './color-string-validator';

describe('color-string-validator', () => {
  describe('when allow alpha', () => {
    describe('returns true', () => {
      let value = '#ffffffff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(true);
      });
      value = '#ffffff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(true);
      });
      value = '#ffff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(true);
      });
      value = '#fff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(true);
      });
    });
    describe('returns false', () => {
      let value = null;
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = undefined;
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = '';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = '#';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = 'ffffffff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = '#f';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = '#ff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = '#fffff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = '#fffffff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = '#fffffffff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
    });
  });
  describe('when not allow alpha', () => {
    describe('returns true', () => {
      let value = '#ffffff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(true);
      });
      value = '#fff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(true);
      });
    });
    describe('returns false', () => {
      let value = null;
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = undefined;
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = '';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = '#';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = 'ffffff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = '#f';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = '#ff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = '#ffff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = '#fffff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
      value = '#fffffff';
      it(`for ${value}`, () => {
        expect(isValid(value)).to.equal(false);
      });
    });
  });
});
