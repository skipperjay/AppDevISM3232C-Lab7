import { PopulationServiceImpl } from "./population-service";

describe('population service', () => {
    let sut: PopulationServiceImpl;

    beforeEach(() => {
       sut = new PopulationServiceImpl('https://foo'); // fixed
    });

    it('should succeed if the URL is provided and valid', () => {
        expect(new PopulationServiceImpl('https://foo')).toBeInstanceOf(PopulationServiceImpl);
        expect(new PopulationServiceImpl('https://foo/')).toBeInstanceOf(PopulationServiceImpl);
        expect(new PopulationServiceImpl('http://foo')).toBeInstanceOf(PopulationServiceImpl);
        expect(new PopulationServiceImpl('http://foo/')).toBeInstanceOf(PopulationServiceImpl);
        expect(new PopulationServiceImpl('HTTP://foo/')).toBeInstanceOf(PopulationServiceImpl);
        expect(new PopulationServiceImpl('HTTPS://foo/')).toBeInstanceOf(PopulationServiceImpl);
    });

    test('should not accept empty input', () => {
        expect(() => new PopulationServiceImpl('')).toThrow();
        expect(() => new PopulationServiceImpl('')).toThrow();
    });

    test('should not accept wrong prefix', () => {
        expect(() => new PopulationServiceImpl('foo://')).toThrow();
        expect(() => new PopulationServiceImpl('bar')).toThrow();
    });

    test('should not accept null input', () => {
        expect(() => new PopulationServiceImpl(null as unknown as string)).toThrow();
        expect(() => new PopulationServiceImpl(undefined as unknown as string)).toThrow();
    });
});
