import React from "react";
// import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddCategory  from "../../components/AddCategory";
import { shallow } from "enzyme";

describe('Probando <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

    beforeEach(() => {
        jest.clearAllMocks();

        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    });

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Probando cambios en el <input />', () => {
        const input = wrapper.find('input');
        const value = "Hola mundo";

        input.simulate("change", { target: { value } });
    });

    test('Probando onSubmit del formulario - No debe postear la información', () => {
        wrapper.find("form").simulate("submit", { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = "Hola mundo";

        input.simulate("change", { target: { value } });

        wrapper.find("form").simulate("submit", { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

        expect(input.text().trim()).toBe("");
    });
});