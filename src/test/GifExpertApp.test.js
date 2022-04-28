import React from "react";
// import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import GifExpertApp  from "../GifExpertApp";
import { shallow } from "enzyme";

describe('Probando componente <GifExpertApp />', () => {
    test('Debe mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorías', () => {
        const categories = ["One Punch", "Goku"];

        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find("GifExpertApp").length).toBe(categories.length);
    });
});