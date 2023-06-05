import { render, waitFor, screen, findAllByTestId } from "@testing-library/react";
import Assets from '../src/pages/Assets';
import userEvent from '@testing-library/user-event'
import AddAsset from '../src/pages/AddAsset';
import '@testing-library/jest-dom'
import axios from "axios";
import {
  MemoryRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";
jest.mock("axios");

const dummyTodos = [
  {
    id: 1,
    Assets: 'mada laptop',
    AssetID: '1111',
    SerialNumber: '00oi89',
    Model: 'macbook 34',
    Brand: 'apple',
    Category: 'laptop',
    Os: 'mac',
    Description: 'test',
    Status: 'avaliable',
    date: '02-02-2022'
  },
];
//when inserting the data, the screen should render new asset row
test('should render the asset row', async () => {
  axios.get.mockResolvedValue({ data: dummyTodos });
  render(<MemoryRouter> <Assets /></MemoryRouter>);
  const asset = await waitFor(() => screen.findAllByTestId("asset"), { timeout: 9000 });
  expect(asset).not.toBeNull()

}, 10000);

//The name of the asset must display the same as entered by the user whether numbers, letters and spaces
test('type add asset name', async () => {
  axios.get.mockResolvedValue({ data: dummyTodos });
  render(<MemoryRouter><AddAsset /></MemoryRouter>)
  userEvent.click(screen.getByText('Add a New Asset'))
  userEvent.type(await screen.findByRole('Assets'), 'Rana{space}laptop{space}88')
  expect(screen.getByRole('Assets')).toHaveValue('Rana laptop 88')
})

//The description of the asset must display the same as entered by the user whether numbers, letters and escape characters
test('type in description field', () => {
  render(<textarea />)

  userEvent.type(screen.getByRole('textbox'), 'The computer is in new and good condition.{enter}It was used by the employee, Khaled.')
  expect(screen.getByRole('textbox')).toHaveValue('The computer is in new and good condition.\nIt was used by the employee, Khaled.')
})

//Test the Clear the description field equal to an empty value
test('clear description field', async () => {
  render(<textarea defaultValue="The computer is in new and good condition." />)
  await userEvent.clear(screen.getByRole('textbox'))
  expect(screen.getByRole('textbox')).toHaveValue('')
})



