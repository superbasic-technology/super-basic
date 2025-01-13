"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_content_1 = require("../src/components/main-content");
jest.mock("../src/components/main-content", () => ({
    CardInfo: jest.fn().mockImplementation(() => ({
        title: "Hello",
        description: "Hello, world!",
    })),
    GenerateCard: jest.fn().mockImplementation(() => {
        return {
            generate: jest.fn((card) => {
                const div = document.createElement("div");
                const h3 = document.createElement("h3");
                h3.textContent = `${card.title}`;
                const p = document.createElement("p");
                p.textContent = `${card.description}`;
                div.appendChild(h3);
                div.appendChild(p);
                return div;
            }),
        };
    }),
}));
test("CardInfo", () => {
    // Convert to mock class
    const MockCardInfo = main_content_1.CardInfo;
    // Instantiate a mock instance
    const mockCardInfo = new MockCardInfo("Hello", "Hello, world!");
    // Assert
    expect(mockCardInfo.title).toBe("Hello");
    expect(mockCardInfo.description).toBe("Hello, world!");
});
test("generate() method of GenerateCard class", () => {
    // Mock input
    const mockCard = {
        title: "hello",
        description: "Hello, world!"
    };
    const generateCard = new main_content_1.GenerateCard();
    generateCard.generate(mockCard);
    expect(generateCard.generate).toHaveBeenCalledWith(mockCard);
});
