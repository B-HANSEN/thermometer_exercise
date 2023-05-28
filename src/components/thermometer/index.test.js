import { render, screen } from '@testing-library/react';
import Thermometer from '.';

test('renders header text', () => {
	render(<Thermometer min={0} max={32} target={32} />);
	const header = screen.getByText(/Thermometer Component/i);
	expect(header).toBeInTheDocument();
});

test('renders out of range text when target temp is greater than max temp', () => {
	render(<Thermometer min={0} max={32} target={40} />);
	const outOfRange = screen.getByText(/not in range/i);
	expect(outOfRange).toBeInTheDocument();
});

test('renders target temp as text', () => {
	render(<Thermometer min={0} max={32} target={22} />);
	const target = screen.getByText(/22℃/i);
	expect(target).toBeInTheDocument();
});
