import { Inject, Injectable } from "@angular/core";

// YOOO listen I have no idea if this is how you make a "service"
// I am have not learned about them in teh class, I just sort of copied your service (and googled a lot)


@Injectable({
  providedIn: 'root'
})
/**
 * @description Allows for random numbers to be generated from a seed. Input the seed at creation, (ideally the ban), and then call next() to get the next random number. Whenever you re-generate a page, call resetSeed so that it will start over from a "zeroed" seed
 */
export class SeedRng {

  private seed: number;
  private counter: number;

  private mult1: number = 15485863; //9293787934331213n; I tried these two primes originally but I was having trouble with BigInts
  private mult2: number = 2038074743; //14159265358979323846264338327950n;


  constructor(@Inject(Number) seed: number) {
    this.counter = 1;
    this.seed = seed;
  }

  /**
   * 
   * @returns A random number from 0 to 1
   */
  next(): number {
    this.counter++;
    let a = this.seed*this.counter*this.counter*this.mult1;
    return ( a * a * a % this.mult2 ) / this.mult2;
  }

  /**
   * @description Set the seed back to "zero" as if you were beginning to use it for the first time
   */
  resetSeed() {
    this.counter = 1;
  }

  /**
   * @description Essentailly the same as "new SeedRng(seed)"
   */
  setNewSeed(seed: number) {
    this.seed = seed;
    this.counter = 1;
  }

}