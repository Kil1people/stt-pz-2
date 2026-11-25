const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('sum', () => {
    it('should return sum of two numbers', () => {
      expect(lib.sum(1, 2)).toEqual(3);
      expect(lib.sum(-10, 5)).toEqual(-5);
    });
    it('should convert strings to numbers', () => {
      expect(lib.sum('5', '1')).toEqual(6);
      expect(lib.sum(10, '1')).toEqual(11);
    });
    it('should handle floating point numbers', () => {
      expect(lib.sum(0.1, 0.2)).toEqual(0.3);
    });
    it('should return NaN if parameter is skipped', () => {
      expect(lib.sum(1)).toBeNaN();
    });
  });

  describe('subtraction', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
      expect(lib.subtraction(1, 5)).toEqual(-4);
    });
    it('should convert strings to numbers', () => {
      expect(lib.subtraction('10', '3')).toEqual(7);
    });
    it('should handle floating point numbers', () => {
      expect(lib.subtraction(0.3, 0.1)).toEqual(0.2);
    });
  });

  describe('division', () => {
    it('should return division of two numbers', () => {
      expect(lib.division(10, 2)).toEqual(5);
      expect(lib.division(-9, 3)).toEqual(-3);
      expect(lib.division(1, 4)).toEqual(0.25);
    });
    it('should convert strings to numbers', () => {
      expect(lib.division('8', '2')).toEqual(4);
    });
    it('should return 0 when dividing zero', () => {
      expect(lib.division(0, 5)).toEqual(0);
    });
    it('should throw error on division by zero', () => {
      expect(() => lib.division(1, 0)).toThrow('Division by zero');
      expect(() => lib.division(1, '0')).toThrow();
    });
  });

  describe('multiplication', () => {
    it('should return multiplication of two numbers', () => {
      expect(lib.multiplication(3, 4)).toEqual(12);
      expect(lib.multiplication(-3, 4)).toEqual(-12);
      expect(lib.multiplication(-3, -4)).toEqual(12);
    });
    it('should return 0 when multiplying by zero', () => {
      expect(lib.multiplication(5, 0)).toEqual(0);
    });
    it('should handle floating point numbers', () => {
      expect(lib.multiplication(0.1, 3)).toEqual(0.3);
    });
    it('should convert strings to numbers', () => {
      expect(lib.multiplication('2', '5')).toEqual(10);
    });
  });

  describe('percentage', () => {
    it('should calculate percent from number', () => {
      expect(lib.percentage(200, 10)).toEqual(20);
      expect(lib.percentage(50, 50)).toEqual(25);
      expect(lib.percentage(80, 0)).toEqual(0);
      expect(lib.percentage(80, 100)).toEqual(80);
    });
    it('should convert strings to numbers', () => {
      expect(lib.percentage('200', '15')).toEqual(30);
    });
    it('should handle floating point numbers', () => {
      expect(lib.percentage(19.99, 10)).toEqual(1.999);
    });
  });

  describe('getWholeNumberPart', () => {
    it('should return whole part of number', () => {
      expect(lib.getWholeNumberPart(5.7)).toEqual(5);
      expect(lib.getWholeNumberPart(-5.7)).toEqual(-5);
      expect(lib.getWholeNumberPart(7)).toEqual(7);
    });
    it('should convert string to number', () => {
      expect(lib.getWholeNumberPart('12.34')).toEqual(12);
    });
  });

  describe('getEvenNumbers', () => {
    it('should return only even numbers', () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });
    it('should return empty array if there are no even numbers', () => {
      expect(lib.getEvenNumbers([1, 3, 5])).toEqual([]);
      expect(lib.getEvenNumbers([])).toEqual([]);
    });
  });

  describe('getMaxNumber', () => {
    it('should return max number', () => {
      expect(lib.getMaxNumber([1, 9, 3])).toEqual(9);
      expect(lib.getMaxNumber([-5, -2, -9])).toEqual(-2);
      expect(lib.getMaxNumber([4])).toEqual(4);
    });
  });

  describe('getMinAndMaxNumbers', () => {
    it('should return min and max numbers', () => {
      expect(lib.getMinAndMaxNumbers([3, 1, 9, -2])).toEqual({min: -2, max: 9});
    });
    it('should work with one element', () => {
      expect(lib.getMinAndMaxNumbers([7])).toEqual({min: 7, max: 7});
    });
  });

  describe('arithmeticMeans', () => {
    it('should calculate arithmetic means', () => {
      expect(lib.arithmeticMeans([1, 2, 3, 4])).toEqual(2.5);
      expect(lib.arithmeticMeans([5])).toEqual(5);
      expect(lib.arithmeticMeans([-1, 1])).toEqual(0);
    });
    it('should handle floating point numbers', () => {
      expect(lib.arithmeticMeans([0.1, 0.2])).toEqual(0.15);
    });
    it('should return NaN for empty array', () => {
      expect(lib.arithmeticMeans([])).toBeNaN();
    });
  });

  describe('getVowels', () => {
    it('should return vowels from latin string', () => {
      expect(lib.getVowels('Hello World')).toEqual(['e', 'o', 'o']);
    });
    it('should return vowels from ukrainian string', () => {
      expect(lib.getVowels('Привіт')).toEqual(['и', 'і']);
    });
    it('should return empty array if there are no vowels', () => {
      expect(lib.getVowels('rhythm')).toEqual([]);
      expect(lib.getVowels('')).toEqual([]);
    });
  });

  describe('cancatString', () => {
    it('should concat strings into one', () => {
      expect(lib.cancatString(['a', 'b', 'c'])).toEqual('abc');
      expect(lib.cancatString(['Hello, ', 'world'])).toEqual('Hello, world');
    });
    it('should return empty string for empty array', () => {
      expect(lib.cancatString([])).toEqual('');
    });
  });

  describe('splitString', () => {
    it('should split string by divider', () => {
      expect(lib.splitString('a,b,c', ',')).toEqual(['a', 'b', 'c']);
      expect(lib.splitString('a b', ' ')).toEqual(['a', 'b']);
    });
    it('should return whole string if divider is not found', () => {
      expect(lib.splitString('abc', ',')).toEqual(['abc']);
    });
  });

  describe('hasSubString', () => {
    it('should return true if string contains substring', () => {
      expect(lib.hasSubString('Hello world', 'world')).toBe(true);
      expect(lib.hasSubString('Hello', '')).toBe(true);
    });
    it('should return false if string does not contain substring', () => {
      expect(lib.hasSubString('Hello world', 'bye')).toBe(false);
      expect(lib.hasSubString('Hello', 'hello')).toBe(false);
    });
  });

  describe('isLowerCase', () => {
    it('should return true for lower case letter', () => {
      expect(lib.isLowerCase('a')).toBe(true);
      expect(lib.isLowerCase('я')).toBe(true);
    });
    it('should return false for upper case letter', () => {
      expect(lib.isLowerCase('A')).toBe(false);
      expect(lib.isLowerCase('Я')).toBe(false);
    });
    it('should return false for not a letter', () => {
      expect(lib.isLowerCase('1')).toBe(false);
      expect(lib.isLowerCase('!')).toBe(false);
    });
  });
});
