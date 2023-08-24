import { PositiveArray } from "./PositiveArray";

let arr : PositiveArray; 

describe("Teste números no array", () => {
    beforeAll(() => {
        arr = new PositiveArray();
    });
    it("Usuário adiciona número positivo", () => {
        const valor = 20;
        arr.add(valor);
        let i = arr.values[0];
        expect(i).toBe(valor);
    });
    it("Usuário remove número positivo", () => {
        const valor = 10;
        arr.add(valor);
        arr.remove(valor);
        expect(arr.length).toBe(2);
    });
    it("Usuário adiciona dois valores no array e remove um valor", () => {
        arr.add(90);
        arr.add(12);
        arr.remove(1);
        expect(arr.length).toBe(3);
    });
});