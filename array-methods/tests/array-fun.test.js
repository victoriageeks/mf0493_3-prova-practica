import { describe, expect, it } from "vitest";

describe('filter method', () => {

    it('should return all the spiders that have at least 50 units of venominia', () => {
        const spiders = [{
            name: "Tarantula Goliat",
            venominia: 70
        }, {
            name: "Wolf Spider",
            venominia: 50
        }, {
            name: "Black Vidow",
            venominia: 44
        }];

        const result = filterByVenom(spiders, 50);

        expect(result).toEqual([{
            name: "Tarantula Goliat",
            venominia: 70
        }, {
            name: "Wolf Spider",
            venominia: 50
        }]);

    });

    it('should return an empty array when no spiders meet the venominia criteria', () => {
        const spiders = [{
            name: "Tarantula Goliat",
            venominia: 70
        }, {
            name: "Wolf Spider",
            venominia: 50
        }, {
            name: "Black Vidow",
            venominia: 44
        }];

        const result = filterByVenom(spiders, 100);

        expect(result).toEqual([]);

    })


})