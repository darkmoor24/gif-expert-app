import React from "react";
// import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GifGridItem } from "../../components/GifGridItem";
import { shallow } from "enzyme";


describe('Probando el componente < GifGridItem />', () => {
    const title = "Probando el componente";
    const url = "https://localhost/algo.jpg";
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);

    test('Debe mostrar el componente correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un <p></> con el title', () => {
        const p = wrapper.find("p");

        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener un <img /> con los props', () => {
        const img = wrapper.find("img");

        expect(img.prop('alt')).toBe(title);

        expect(img.prop('src')).toBe(url);
    });

    test('Debe de tener clase card', () => {
        const div = wrapper.find("div");

        expect(div.hasClass("card")).toBe(true);
    });
});