import React from "react";
// import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GifGrid } from "../../components/GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Probando componente <GifGrid />', () => {
    const category = "Goku";
    
    test('El componente debe mostrarse correctamente', () => { 
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category }/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargar imagenes useFetchGifs', () => {
        const gifs = [{
            id: "ABC",
            url: "http://example.com/algo.jpg",
            title: "Anything"
        }]; 

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category }/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false);
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
    });
});