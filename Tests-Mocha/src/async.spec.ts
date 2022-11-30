import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import { MyClass, timeoutCallback, timeoutPromise } from './async';

chai.use(sinonChai);

describe('async cases', () => {
  describe('timeoutCallback function', () => {
    // it('should call callback with value', (done) => {
    //   timeoutCallback(Math.random() * 3000, 'ABC', (val) => {
    //     expect(val).to.equals('ABC');
    //     done();
    //   });
    // });
    // dans le cas spécifique des timers, on peut raccourcir le temps avec sinon
    // it('should call callback with value (with fake timers)', () => {
    //   const fakeTimers = sinon.useFakeTimers(); // remplace setTimeout, setInterval...
    //   const callback = (val: string) => {
    //     expect(val).to.equals('ABC');
    //   }
    //   timeoutCallback(Math.random() * 3000, 'ABC', callback);
    //   fakeTimers.tick(3000);

    //   fakeTimers.restore(); // restore setTimeout, setInterval...
    // });
    it('should call callback with value (with fake timers)', () => {
      const fakeTimers = sinon.useFakeTimers(); // remplace setTimeout, setInterval...
      const callback = sinon.spy();
      timeoutCallback(Math.random() * 3000, 'ABC', callback);
      fakeTimers.tick(3000);

      expect(callback).to.have.been.calledOnceWith('ABC');

      fakeTimers.restore(); // restore setTimeout, setInterval...
    });
  });

  describe('timeoutPromise', () => {
    // it('should resolve promise', async () => {
    //   const val = await timeoutPromise(1000, 'ABC');
    //   expect(val).to.equal('ABC');
    // });

    it('should resolve promise (with fake timers)', async () => {
      const fakeTimers = sinon.useFakeTimers();
      const promise = timeoutPromise(Math.random() * 4000, 'ABC')
      
      fakeTimers.tick(4000);

      const val = await promise;

      expect(val).to.equal('ABC');

      fakeTimers.restore();
    });
  });

  describe('MyClass', () => {
    // it('should call all callbacks', () => {
    //   const myObject = new MyClass();

    //   myObject.doubleTimeout();

    //   // faisable d'intercepter les callback avec des libs
    //   // - Zone.js
    //   // - async hooks de Node.js (experimentale)

    //   // sinon ce test échoue
    //   expect(myObject.a).to.equals('A');
    //   expect(myObject.b).to.equals('B');
    // });

    it('should call all callbacks (with fake timers)', () => {
      const fakeTimers = sinon.useFakeTimers();

      const myObject = new MyClass();

      myObject.doubleTimeout();

      fakeTimers.tick(1000);
      
      expect(myObject.a).to.equals('A');
      expect(myObject.b).to.equals('B');
      fakeTimers.restore();
    });
  });
});
