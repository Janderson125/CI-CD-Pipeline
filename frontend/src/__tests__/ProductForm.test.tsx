import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductForm from "../ProductForm";

describe("ProductForm", () => {
  const onSaveMock = jest.fn();
  const onCancelMock = jest.fn();

  beforeEach(() => {
    onSaveMock.mockClear();
    onCancelMock.mockClear();
  });

  test("renders form inputs", () => {
    render(<ProductForm product={null} onSave={onSaveMock} onCancel={onCancelMock} />);
    expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/description/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/price/i)).toBeInTheDocument();
  });

  test("calls onSave when submitting valid form", () => {
    render(<ProductForm product={null} onSave={onSaveMock} onCancel={onCancelMock} />);

    fireEvent.change(screen.getByPlaceholderText(/title/i), { target: { value: "Test Product" } });
    fireEvent.change(screen.getByPlaceholderText(/description/i), { target: { value: "Test Desc" } });
    fireEvent.change(screen.getByPlaceholderText(/price/i), { target: { value: "10" } });

    fireEvent.click(screen.getByText(/save/i));

    expect(onSaveMock).toHaveBeenCalled();
  });

  test("calls onCancel when cancel button clicked", () => {
    render(<ProductForm product={null} onSave={onSaveMock} onCancel={onCancelMock} />);
    fireEvent.click(screen.getByText(/cancel/i));
    expect(onCancelMock).toHaveBeenCalled();
  });
});
