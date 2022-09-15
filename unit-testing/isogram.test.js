import {it, expect, describe} from 'vitest';
import { isIsogram } from './isogram';

it('should return true because there is no repeated letter', () => {
    const result = isIsogram("Dermatoglyphics");
    expect(result).toBe(true);
});

it('should return false because there are repeated letters', () => {
    const result = isIsogram("aba");
    expect(result).toBe(false);
});

it('should return false because ignore letter case', () => {
    const result = isIsogram("moOse");
    expect(result).toBe(false);
});