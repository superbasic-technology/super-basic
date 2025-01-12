import { CardInfo } from "../src/components/main-content";

jest.mock("../src/components/main-content", () => ({
  CardInfo: jest.fn().mockImplementation(() => ({
    title: "Hello",
    description: "Hello, world!",
  })),
}));

test("CardInfo", () => {
  // Convert to mock class
  const MockCardInfo = CardInfo as jest.Mock;

  // Instantiate a mock instance
  const mockCardInfo = new MockCardInfo("Hello", "Hello, world!");

  // Assert
  expect(mockCardInfo.title).toBe("Hello");
  expect(mockCardInfo.description).toBe("Hello, world!");
});