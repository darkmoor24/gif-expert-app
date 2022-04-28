import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Probando custom hook useFetchGifs', () => {
    test('Debe de retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("One punch"));
        const { data, loading } = result.current;
        
        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe de retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("One punch"));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});