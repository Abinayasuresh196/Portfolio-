import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "@/components/ContactForm";

vi.mock("@emailjs/browser", () => ({
  default: {
    send: vi.fn(() => Promise.resolve({ status: 200, text: "OK" })),
  },
}));

vi.mock("@/hooks/use-toast", () => ({
  useToast: () => ({ toast: vi.fn() }),
}));

describe("ContactForm", () => {
  it("renders all form fields and submit button", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/you@example.com/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/share details/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("accepts user input in form fields", () => {
    render(<ContactForm />);
    const nameInput = screen.getByPlaceholderText(/your name/i);
    const emailInput = screen.getByPlaceholderText(/you@example.com/i);
    const messageInput = screen.getByPlaceholderText(/share details/i);

    fireEvent.change(nameInput, { target: { value: "Test User" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello there" } });

    expect(nameInput).toHaveValue("Test User");
    expect(emailInput).toHaveValue("test@example.com");
    expect(messageInput).toHaveValue("Hello there");
  });
});
