import { LessonContent } from "../LessonContent";
import arduinoImage from "@assets/stock_images/arduino_uno_microcon_1147a2f6.jpg";

const mockLesson = {
  id: "arduino",
  title: "Arduino Uno Board",
  category: "Getting Started",
  description: "The Arduino Uno is a microcontroller board based on the ATmega328P.",
  image: arduinoImage,
  specs: [
    { label: "Microcontroller", value: "ATmega328P" },
    { label: "Operating Voltage", value: "5V" },
  ],
  howItWorks: "The Arduino Uno is a programmable microcontroller that executes code.",
  codeExample: {
    title: "Basic Blink",
    code: "void setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n}",
    explanation: "This makes the LED blink.",
  },
};

export default function LessonContentExample() {
  return (
    <div className="bg-background">
      <LessonContent lesson={mockLesson} />
    </div>
  );
}