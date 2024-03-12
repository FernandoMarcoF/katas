import { fizzBuzz } from "../fizzBuzzKata";

describe('Fizz Buzz Kata', () => {
    it('devuelve "Fizz" cuándo le paso un 3', () => {
      const inputNumber = 3
  
      const result = fizzBuzz(inputNumber)
  
      expect(result).toBe('Fizz')
    })
  
    it('devuelve "Buzz" cuándo le paso un 5', () => {
      const inputNumber = 5
  
      const result = fizzBuzz(inputNumber)
  
      expect(result).toBe('Buzz')
    })
  
    it('devuelve 1 cuándo le paso un 1', () => {
      const inputNumber = 1
  
      const result = fizzBuzz(inputNumber)
  
      expect(result).toBe('1')
    })
  
    it('devuelve "Fizz" cuándo le paso un 6', () => {
      const inputNumber = 6
  
      const result = fizzBuzz(inputNumber)
  
      expect(result).toBe('Fizz')
    })
  
    it('devuelve "Fizz" cuándo le paso un 9', () => {
      const inputNumber = 9
  
      const result = fizzBuzz(inputNumber)
  
      expect(result).toBe('Fizz')
    })
  
    it('devuelve "Buzz" cuándo le paso un 10', () => {
      const inputNumber = 10
  
      const result = fizzBuzz(inputNumber)
  
      expect(result).toBe('Buzz')
    })
  
    it('devuelve "Fizz" cuándo le paso un 12', () => {
      const inputNumber = 12
  
      const result = fizzBuzz(inputNumber)
  
      expect(result).toBe('Fizz')
    })
  
    it('devuelve "13" cuándo le paso un 13', () => {
      const inputNumber = 13
  
      const result = fizzBuzz(inputNumber)
  
      expect(result).toBe('13')
    })
  
    it('devuelve "FizzBuzz" cuándo le paso un 15', () => {
      const inputNumber = 15
  
      const result = fizzBuzz(inputNumber)
  
      expect(result).toBe('FizzBuzz')
    })
  })
  