// Arduino Microprocessors Starter Kit - 8 comprehensive lessons
// Beginner-friendly with code examples, wiring diagrams, and interactive visuals

import arduinoBoardImg from "@assets/generated_images/Cute_Arduino_board_cartoon_illustration_e7d8f8d5.png";
import ledWiringImg from "@assets/generated_images/Arduino_LED_wiring_diagram_cartoon_f4ff2aa3.png";
import componentsImg from "@assets/generated_images/Friendly_Arduino_components_cartoon_collection_80e14b22.png";

export const ARDUINO_LESSONS = [
  { 
    id: 1, 
    title: "Getting Started with Arduino Uno", 
    completed: false,
    wiringImage: arduinoBoardImg,
    playgroundCode: `// Arduino Uno - LED Blink Example
// This is your first Arduino program!

void setup() {
  // Initialize the LED pin as an output
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // Turn LED ON
  delay(1000);                       // Wait 1 second
  digitalWrite(LED_BUILTIN, LOW);    // Turn LED OFF
  delay(1000);                       // Wait 1 second
}`,
    content: {
      title: "Getting Started with Arduino Uno",
      description: "Welcome to Arduino! Learn about the Arduino Uno board, understand its components, and write your very first program. The Arduino makes electronics fun and easy! 🤖",
      sections: [
        {
          title: "What is Arduino?",
          content: "Arduino is a **microcontroller board** that makes electronics and programming accessible to everyone!\\n\\n**Key Features:**\\n• Small computer you can program\\n• 14 digital input/output pins\\n• 6 analog input pins\\n• USB connection for programming\\n• 5V operating voltage\\n• Perfect for learning electronics!\\n\\nThink of it as a tiny brain that can control lights, motors, sensors, and more!"
        },
        {
          title: "Arduino Board Components",
          content: "**Main Parts of Arduino Uno:**\\n\\n• **USB Port**: Connect to your computer for programming\\n• **Power Jack**: 7-12V external power supply\\n• **Digital Pins (0-13)**: Read/write HIGH or LOW signals\\n• **Analog Pins (A0-A5)**: Read sensor values (0-1023)\\n• **GND Pins**: Ground connections (0V)\\n• **5V & 3.3V Pins**: Power supply pins\\n• **Reset Button**: Restart your program\\n• **LED_BUILTIN**: Built-in LED on pin 13"
        },
        {
          title: "Arduino Programming Basics",
          content: "Arduino uses a language similar to C/C++. Every program has two main functions:\\n\\n**setup()**: Runs once when Arduino starts\\n```cpp\\nvoid setup() {\\n  // Initialize pins, sensors, etc.\\n  pinMode(13, OUTPUT);\\n}\\n```\\n\\n**loop()**: Runs repeatedly forever\\n```cpp\\nvoid loop() {\\n  // Your main program code\\n  digitalWrite(13, HIGH);\\n  delay(1000);\\n}\\n```"
        },
        {
          title: "Try It Yourself! 💡",
          content: "In the code playground, you'll see a simple LED blink program:\\n\\n1. **pinMode()**: Sets pin 13 as OUTPUT\\n2. **digitalWrite()**: Turns LED ON (HIGH) or OFF (LOW)\\n3. **delay()**: Waits for specified milliseconds\\n\\n**Experiment:**\\n• Change delay(1000) to delay(500) for faster blinking\\n• Try delay(100) for very fast blinking\\n• Use different delay values for HIGH and LOW\\n\\nThis simple program is the foundation for all Arduino projects!"
        }
      ]
    }
  },
  { 
    id: 2, 
    title: "LED Blink - Your First Arduino Program", 
    completed: false,
    wiringImage: ledWiringImg,
    playgroundCode: `// External LED on Pin 8
// Wiring: LED long leg → Pin 8, short leg → 220Ω resistor → GND

int ledPin = 8;  // LED connected to pin 8

void setup() {
  pinMode(ledPin, OUTPUT);  // Set pin 8 as output
}

void loop() {
  digitalWrite(ledPin, HIGH);  // LED ON
  delay(500);                  // Wait 0.5 seconds
  digitalWrite(ledPin, LOW);   // LED OFF
  delay(500);                  // Wait 0.5 seconds
}

// Try changing the pin number or delay times!`,
    content: {
      title: "LED Blink - Your First Arduino Program",
      description: "Build your first circuit! Learn how to connect an LED to Arduino and control it with code. This is where hardware meets software! 💡",
      sections: [
        {
          title: "Components You Need",
          content: "**Parts List:**\\n• Arduino Uno board\\n• 1 LED (any color)\\n• 1 resistor (220Ω - 330Ω)\\n• Jumper wires\\n• Breadboard (optional)\\n\\n**LED Basics:**\\n• LEDs have two legs: **anode (+)** long leg and **cathode (-)** short leg\\n• Always use a resistor to prevent burning out the LED\\n• Current flows from anode to cathode"
        },
        {
          title: "Wiring the LED Circuit",
          content: "**Step-by-Step Wiring:**\\n\\n1. **Long LED leg (anode)** → Connect to **Pin 8**\\n2. **Short LED leg (cathode)** → Connect to **220Ω resistor**\\n3. **Other resistor end** → Connect to **GND (Ground)**\\n\\n**Why a resistor?**\\nArduino pins output 5V, but LEDs typically need only 2-3V. The resistor limits current to protect the LED.\\n\\n**Tip**: Red LEDs need ~2V, Blue/White LEDs need ~3V"
        },
        {
          title: "Understanding the Code",
          content: "**Code Breakdown:**\\n\\n```cpp\\nint ledPin = 8;  // Variable stores pin number\\n```\\nCreates a variable to remember which pin the LED is on\\n\\n```cpp\\npinMode(ledPin, OUTPUT);\\n```\\nTells Arduino that pin 8 will send signals OUT\\n\\n```cpp\\ndigitalWrite(ledPin, HIGH);  // 5V on pin\\ndigitalWrite(ledPin, LOW);   // 0V on pin\\n```\\nHIGH = LED ON, LOW = LED OFF\\n\\n```cpp\\ndelay(500);  // Wait 500 milliseconds\\n```\\nPauses the program (1000ms = 1 second)"
        },
        {
          title: "Experiments to Try! 🔬",
          content: "**Challenge yourself:**\\n\\n1. **Morse Code**: Create SOS pattern (3 short, 3 long, 3 short blinks)\\n2. **Traffic Light**: Simulate a traffic light sequence\\n3. **Multiple LEDs**: Connect LEDs to pins 8, 9, 10 and make patterns\\n4. **Heartbeat**: Make LED fade in and out like a heartbeat\\n\\n**Troubleshooting:**\\n• LED not lighting? Check polarity (long leg to pin)\\n• LED too dim? Check resistor value\\n• LED burned out? Did you forget the resistor?"
        }
      ]
    }
  },
  { 
    id: 3, 
    title: "Understanding Digital Inputs & Buttons", 
    completed: false,
    wiringImage: componentsImg,
    playgroundCode: `// Button controlling LED
// Wiring: Button → Pin 2 & GND, LED → Pin 8 & resistor → GND

int buttonPin = 2;  // Button connected to pin 2
int ledPin = 8;     // LED connected to pin 8
int buttonState = 0; // Store button state

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);  // Button as input
  pinMode(ledPin, OUTPUT);            // LED as output
  Serial.begin(9600);                 // Start serial monitor
}

void loop() {
  buttonState = digitalRead(buttonPin);  // Read button
  
  if (buttonState == LOW) {   // Button pressed (LOW with pullup)
    digitalWrite(ledPin, HIGH);  // Turn LED ON
    Serial.println("Button Pressed - LED ON");
  } else {
    digitalWrite(ledPin, LOW);   // Turn LED OFF
    Serial.println("Button Released - LED OFF");
  }
  
  delay(100);  // Small delay for stability
}`,
    content: {
      title: "Understanding Digital Inputs & Buttons",
      description: "Make your Arduino interactive! Learn how to read button presses and respond to user input. This opens up endless possibilities! 🎮",
      sections: [
        {
          title: "Digital Inputs Explained",
          content: "**INPUT vs OUTPUT:**\\n\\n• **OUTPUT**: Arduino sends signals (controls LEDs, motors)\\n• **INPUT**: Arduino receives signals (reads buttons, sensors)\\n\\n**Digital Input States:**\\n• **HIGH**: 5V detected (button not pressed with pullup)\\n• **LOW**: 0V detected (button pressed with pullup)\\n\\n**INPUT_PULLUP Mode:**\\nActivates internal resistor that pulls pin HIGH when button is not pressed. When button is pressed, pin goes LOW."
        },
        {
          title: "Wiring a Push Button",
          content: "**Simple Button Circuit:**\\n\\n1. **One button terminal** → **Pin 2** on Arduino\\n2. **Other button terminal** → **GND** (Ground)\\n3. Use **INPUT_PULLUP** mode (no external resistor needed!)\\n\\n**How It Works:**\\n• Button not pressed: Pin 2 reads HIGH (5V from internal pullup)\\n• Button pressed: Pin 2 connects to GND, reads LOW (0V)\\n\\n**Why INPUT_PULLUP?**\\nSimplifies wiring by using Arduino's built-in 20kΩ pullup resistor!"
        },
        {
          title: "Reading Button States",
          content: "**digitalRead() Function:**\\n```cpp\\nint buttonState = digitalRead(buttonPin);\\n```\\nReturns HIGH or LOW based on voltage at pin\\n\\n**Conditional Logic:**\\n```cpp\\nif (buttonState == LOW) {\\n  // Button is pressed\\n  digitalWrite(ledPin, HIGH);\\n} else {\\n  // Button is released\\n  digitalWrite(ledPin, LOW);\\n}\\n```\\n\\n**Serial Monitor:**\\n```cpp\\nSerial.begin(9600);           // Start communication\\nSerial.println(\\\"Button Pressed\\\");  // Print message\\n```\\nView messages in Arduino IDE's Serial Monitor"
        },
        {
          title: "Interactive Projects! 🎯",
          content: "**Try These Ideas:**\\n\\n1. **Toggle Switch**: Press button to turn LED ON, press again to turn OFF\\n2. **Counter**: Count button presses and display on Serial Monitor\\n3. **Reaction Game**: LED lights randomly, press button quickly\\n4. **Two Buttons**: Use two buttons to control different LEDs\\n5. **Long Press**: Different action for short vs long button press\\n\\n**Debouncing Tip:**\\nButtons can produce multiple rapid signals. Add delay(50) or use debounce library for clean readings."
        }
      ]
    }
  },
  { 
    id: 4, 
    title: "Analog Sensors & Reading Data", 
    completed: false,
    wiringImage: componentsImg,
    playgroundCode: `// Potentiometer controlling LED brightness
// Wiring: Potentiometer → A0, 5V, GND | LED → Pin 9, resistor, GND

int potPin = A0;     // Potentiometer on analog pin A0
int ledPin = 9;      // LED on PWM pin 9
int potValue = 0;    // Store sensor reading
int brightness = 0;  // Store LED brightness

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  potValue = analogRead(potPin);  // Read value 0-1023
  
  // Map 0-1023 to 0-255 for LED brightness
  brightness = map(potValue, 0, 1023, 0, 255);
  
  analogWrite(ledPin, brightness);  // Set LED brightness
  
  // Display values
  Serial.print("Sensor: ");
  Serial.print(potValue);
  Serial.print(" | Brightness: ");
  Serial.println(brightness);
  
  delay(100);
}`,
    content: {
      title: "Analog Sensors & Reading Data",
      description: "Read real-world values! Learn about analog sensors, PWM, and how to process data from the physical world. 📊",
      sections: [
        {
          title: "Analog vs Digital",
          content: "**Digital**: Only two states (HIGH/LOW, ON/OFF)\\n• Buttons, switches\\n• Either 0V or 5V\\n\\n**Analog**: Range of values\\n• Potentiometers, temperature sensors, light sensors\\n• Any voltage between 0V and 5V\\n• Arduino reads as numbers 0-1023\\n\\n**Analog Pins (A0-A5):**\\nArduino Uno has 6 analog input pins that can measure voltage levels with 10-bit resolution (1024 possible values)"
        },
        {
          title: "Wiring a Potentiometer",
          content: "**Potentiometer (Variable Resistor):**\\nA knob that changes resistance when you turn it\\n\\n**Three Pins Wiring:**\\n1. **Left pin** → **5V** (power supply)\\n2. **Middle pin** → **A0** (analog input)\\n3. **Right pin** → **GND** (ground)\\n\\n**How It Works:**\\nTurning the knob changes the voltage at the middle pin from 0V to 5V. Arduino reads this as a value from 0 to 1023.\\n\\n**Tip**: Potentiometer orientation doesn't matter; if values are backwards, swap the 5V and GND connections!"
        },
        {
          title: "Reading Analog Values",
          content: "**analogRead() Function:**\\n```cpp\\nint sensorValue = analogRead(A0);\\n// Returns 0-1023 (10-bit resolution)\\n```\\n\\n**PWM - analogWrite():**\\n```cpp\\nanalogWrite(ledPin, 128);  // 50% brightness\\n// Values 0-255 (0=OFF, 255=FULL)\\n```\\n\\n**Mapping Values:**\\n```cpp\\nbrightness = map(sensorValue, 0, 1023, 0, 255);\\n// Converts 0-1023 range to 0-255 range\\n```\\n\\n**PWM Pins:**\\nOnly pins 3, 5, 6, 9, 10, 11 support analogWrite() (marked with ~ symbol)"
        },
        {
          title: "Sensor Projects! 🌡️",
          content: "**Try These Sensors:**\\n\\n1. **Light Sensor (LDR)**: Automatic night light\\n2. **Temperature Sensor (TMP36)**: Digital thermometer\\n3. **Flex Sensor**: Gesture control\\n4. **Soil Moisture Sensor**: Plant watering reminder\\n5. **Joystick Module**: Game controller\\n\\n**Experiments:**\\n• Control servo motor angle with potentiometer\\n• Change RGB LED color based on sensor values\\n• Create a sound level meter with microphone\\n• Build a distance measuring device with ultrasonic sensor"
        }
      ]
    }
  },
  { 
    id: 5, 
    title: "Controlling Motors & Movement", 
    completed: false,
    wiringImage: componentsImg,
    playgroundCode: `// DC Motor control with L298N motor driver
// Wiring: Motor driver pins to Arduino and motor

int motorPin1 = 8;  // Motor direction pin 1
int motorPin2 = 9;  // Motor direction pin 2
int enablePin = 10; // PWM speed control pin
int speed = 200;    // Motor speed (0-255)

void setup() {
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  pinMode(enablePin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // Forward
  Serial.println("Motor Forward");
  digitalWrite(motorPin1, HIGH);
  digitalWrite(motorPin2, LOW);
  analogWrite(enablePin, speed);
  delay(2000);
  
  // Stop
  Serial.println("Motor Stop");
  analogWrite(enablePin, 0);
  delay(1000);
  
  // Backward
  Serial.println("Motor Backward");
  digitalWrite(motorPin1, LOW);
  digitalWrite(motorPin2, HIGH);
  analogWrite(enablePin, speed);
  delay(2000);
  
  // Stop
  analogWrite(enablePin, 0);
  delay(1000);
}`,
    content: {
      title: "Controlling Motors & Movement",
      description: "Bring your projects to life with movement! Learn to control DC motors, servo motors, and create robots. 🤖",
      sections: [
        {
          title: "Types of Motors",
          content: "**DC Motors:**\\n• Continuous rotation\\n• Variable speed (PWM control)\\n• Used for wheels, fans, pumps\\n• Requires motor driver (L298N, L293D)\\n\\n**Servo Motors:**\\n• Precise angle control (0-180°)\\n• Used for robot arms, camera mounts\\n• Direct connection to Arduino\\n\\n**Stepper Motors:**\\n• Very precise positioning\\n• Used for 3D printers, CNC machines\\n• Requires stepper driver\\n\\n**Why Motor Drivers?**\\nArduino pins can only provide 40mA. Motors need 100mA-1A or more, so we use motor drivers to handle the high current."
        },
        {
          title: "L298N Motor Driver Wiring",
          content: "**L298N Module Connections:**\\n\\n**Power:**\\n• **12V** → External power supply (6-12V)\\n• **GND** → Common ground (Arduino GND + Power supply GND)\\n• **5V** → Arduino 5V (if jumper on)\\n\\n**Motor:**\\n• **OUT1 & OUT2** → Motor terminals\\n\\n**Control Pins:**\\n• **IN1** → Arduino Pin 8 (direction)\\n• **IN2** → Arduino Pin 9 (direction)\\n• **ENA** → Arduino Pin 10 (speed PWM)\\n\\n**Direction Control:**\\n• IN1=HIGH, IN2=LOW → Forward\\n• IN1=LOW, IN2=HIGH → Backward\\n• Both LOW or HIGH → Stop"
        },
        {
          title: "Motor Control Code",
          content: "**Speed Control (PWM):**\\n```cpp\\nanalogWrite(enablePin, 200);  // 78% speed\\nanalogWrite(enablePin, 0);    // Stop\\nanalogWrite(enablePin, 255);  // Full speed\\n```\\n\\n**Direction Control:**\\n```cpp\\n// Forward\\ndigitalWrite(motorPin1, HIGH);\\ndigitalWrite(motorPin2, LOW);\\n\\n// Backward\\ndigitalWrite(motorPin1, LOW);\\ndigitalWrite(motorPin2, HIGH);\\n\\n// Brake\\ndigitalWrite(motorPin1, HIGH);\\ndigitalWrite(motorPin2, HIGH);\\n```\\n\\n**Pro Tip:**\\nUse functions to simplify your code:\\n```cpp\\nvoid moveForward(int speed) {\\n  digitalWrite(motorPin1, HIGH);\\n  digitalWrite(motorPin2, LOW);\\n  analogWrite(enablePin, speed);\\n}\\n```"
        },
        {
          title: "Motor Projects! 🚗",
          content: "**Build These Projects:**\\n\\n1. **Simple Robot Car**: Two motors, obstacle avoidance\\n2. **Fan Speed Controller**: Potentiometer adjusts fan speed\\n3. **Automatic Blinds**: Light sensor controls motor\\n4. **Robotic Arm**: Servo motors for precise movement\\n5. **Line Following Robot**: Sensors guide motor direction\\n\\n**Safety Tips:**\\n• Always use separate power for motors (not USB)\\n• Connect grounds together\\n• Add flyback diodes to protect Arduino\\n• Start with low speed values when testing\\n• Never connect motor directly to Arduino pin!"
        }
      ]
    }
  },
  { 
    id: 6, 
    title: "Working with LCD Displays", 
    completed: false,
    wiringImage: componentsImg,
    playgroundCode: `// LCD Display showing messages
// Wiring: I2C LCD to Arduino (SDA→A4, SCL→A5, VCC→5V, GND→GND)

#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Initialize LCD (address 0x27, 16 cols, 2 rows)
LiquidCrystal_I2C lcd(0x27, 16, 2);

int counter = 0;

void setup() {
  lcd.init();           // Initialize LCD
  lcd.backlight();      // Turn on backlight
  lcd.setCursor(0, 0);  // Column 0, Row 0
  lcd.print("Arduino LCD!");
  lcd.setCursor(0, 1);  // Column 0, Row 1
  lcd.print("Hello World!");
  delay(2000);
}

void loop() {
  lcd.clear();           // Clear screen
  lcd.setCursor(0, 0);
  lcd.print("Counter:");
  lcd.setCursor(0, 1);
  lcd.print(counter);
  counter++;
  delay(1000);
}`,
    content: {
      title: "Working with LCD Displays",
      description: "Display information beautifully! Learn to use LCD screens to show text, numbers, and create user interfaces. 📺",
      sections: [
        {
          title: "Types of LCD Displays",
          content: "**16x2 Character LCD:**\\n• Displays 16 characters per row, 2 rows\\n• Perfect for text and numbers\\n• Most common and affordable\\n\\n**I2C LCD Module:**\\n• Only 4 wires needed (vs 16 wires!)\\n• Uses I2C communication protocol\\n• Easier to connect and use\\n• **Recommended for beginners**\\n\\n**OLED Display:**\\n• Sharper, more colorful\\n• Can show graphics and images\\n• More expensive but very cool"
        },
        {
          title: "I2C LCD Wiring",
          content: "**Super Simple 4-Wire Connection:**\\n\\n1. **VCC** → Arduino **5V**\\n2. **GND** → Arduino **GND**\\n3. **SDA** → Arduino **A4** (I2C data)\\n4. **SCL** → Arduino **A5** (I2C clock)\\n\\n**That's it!** I2C saves you from wiring 16 pins!\\n\\n**I2C Address:**\\nMost I2C LCDs use address 0x27 or 0x3F. If your LCD doesn't work, try the other address in code:\\n```cpp\\nLiquidCrystal_I2C lcd(0x3F, 16, 2);\\n```\\n\\n**Finding I2C Address:**\\nRun an I2C scanner sketch to find your LCD's address automatically."
        },
        {
          title: "LCD Programming",
          content: "**Required Library:**\\n```cpp\\n#include <Wire.h>\\n#include <LiquidCrystal_I2C.h>\\n```\\nInstall via Arduino IDE: Sketch → Include Library → Manage Libraries → Search \\\"LiquidCrystal I2C\\\"\\n\\n**Basic Commands:**\\n```cpp\\nlcd.init();              // Start LCD\\nlcd.backlight();         // Turn on backlight\\nlcd.noBacklight();       // Turn off backlight\\nlcd.clear();             // Clear screen\\nlcd.setCursor(col, row); // Position cursor\\nlcd.print(\\\"Hello\\\");     // Display text\\nlcd.print(42);           // Display number\\n```\\n\\n**Cursor Position:**\\n• Columns: 0-15 (left to right)\\n• Rows: 0-1 (top to bottom)"
        },
        {
          title: "LCD Display Projects! 📊",
          content: "**Creative Project Ideas:**\\n\\n1. **Digital Thermometer**: Display temperature from sensor\\n2. **Countdown Timer**: Show time remaining\\n3. **Smart Clock**: Display time from RTC module\\n4. **Sensor Dashboard**: Show multiple sensor readings\\n5. **Menu System**: Create interactive menus with buttons\\n6. **Game Score Display**: Build a simple game\\n7. **Quote Machine**: Scroll inspiring messages\\n\\n**Advanced Techniques:**\\n• Create custom characters (hearts, arrows, icons)\\n• Scrolling text for long messages\\n• Animation with custom characters\\n• Real-time data logging display"
        }
      ]
    }
  },
  { 
    id: 7, 
    title: "Building a Temperature Monitor", 
    completed: false,
    wiringImage: componentsImg,
    playgroundCode: `// Temperature monitoring system with LED alerts
// Wiring: DHT11 sensor → Pin 7, LEDs → Pins 8,9,10

#include <DHT.h>

#define DHTPIN 7        // DHT sensor pin
#define DHTTYPE DHT11   // DHT11 sensor type
DHT dht(DHTPIN, DHTTYPE);

int greenLED = 8;   // Cool temperature
int yellowLED = 9;  // Normal temperature
int redLED = 10;    // Hot temperature

void setup() {
  pinMode(greenLED, OUTPUT);
  pinMode(yellowLED, OUTPUT);
  pinMode(redLED, OUTPUT);
  Serial.begin(9600);
  dht.begin();
  Serial.println("Temperature Monitor Starting...");
}

void loop() {
  float temp = dht.readTemperature();     // Celsius
  float humidity = dht.readHumidity();     // %
  
  if (isnan(temp) || isnan(humidity)) {
    Serial.println("Sensor error!");
    return;
  }
  
  // Display readings
  Serial.print("Temperature: ");
  Serial.print(temp);
  Serial.print("°C | Humidity: ");
  Serial.print(humidity);
  Serial.println("%");
  
  // LED alerts based on temperature
  digitalWrite(greenLED, LOW);
  digitalWrite(yellowLED, LOW);
  digitalWrite(redLED, LOW);
  
  if (temp < 20) {
    digitalWrite(greenLED, HIGH);  // Cool
    Serial.println("Status: Cool");
  } else if (temp < 28) {
    digitalWrite(yellowLED, HIGH);  // Comfortable
    Serial.println("Status: Comfortable");
  } else {
    digitalWrite(redLED, HIGH);     // Hot
    Serial.println("Status: Hot!");
  }
  
  delay(2000);  // Read every 2 seconds
}`,
    content: {
      title: "Building a Temperature Monitor",
      description: "Create a complete IoT project! Build a temperature and humidity monitoring system with visual alerts. 🌡️",
      sections: [
        {
          title: "DHT11 Temperature Sensor",
          content: "**DHT11 Sensor Features:**\\n• Measures temperature (0-50°C)\\n• Measures humidity (20-80%)\\n• Digital output (easy to read)\\n• Very affordable and popular\\n• Accurate enough for home projects\\n\\n**Sensor Pins:**\\n• **VCC** → 5V or 3.3V\\n• **GND** → Ground\\n• **Data** → Digital pin (with 10kΩ pullup resistor)\\n\\n**Alternative: DHT22**\\nMore accurate and wider range, but more expensive:\\n• Temperature: -40 to 80°C (±0.5°C)\\n• Humidity: 0-100% (±2-5%)\\n• Same wiring and code!"
        },
        {
          title: "Complete System Wiring",
          content: "**DHT11 Sensor:**\\n1. **VCC** → Arduino **5V**\\n2. **GND** → Arduino **GND**\\n3. **Data** → Arduino **Pin 7**\\n4. **10kΩ resistor** between VCC and Data (pullup)\\n\\n**LED Indicators:**\\n• **Green LED** → Pin 8 (+ 220Ω resistor → GND)\\n• **Yellow LED** → Pin 9 (+ 220Ω resistor → GND)\\n• **Red LED** → Pin 10 (+ 220Ω resistor → GND)\\n\\n**LED Meanings:**\\n• Green = Cool (< 20°C)\\n• Yellow = Comfortable (20-28°C)\\n• Red = Hot (> 28°C)\\n\\nCustomize temperature thresholds for your environment!"
        },
        {
          title: "Reading Sensor Data",
          content: "**DHT Library Installation:**\\nArduino IDE → Sketch → Include Library → Manage Libraries → Search \\\"DHT sensor library\\\" by Adafruit\\n\\n**Initialize Sensor:**\\n```cpp\\n#include <DHT.h>\\n#define DHTPIN 7\\n#define DHTTYPE DHT11\\nDHT dht(DHTPIN, DHTTYPE);\\ndht.begin();\\n```\\n\\n**Read Temperature & Humidity:**\\n```cpp\\nfloat temp = dht.readTemperature();    // Celsius\\nfloat tempF = dht.readTemperature(true); // Fahrenheit\\nfloat humidity = dht.readHumidity();    // Percentage\\n```\\n\\n**Error Checking:**\\n```cpp\\nif (isnan(temp)) {\\n  Serial.println(\\\"Sensor read error!\\\");\\n}\\n```"
        },
        {
          title: "Expand Your Project! 🎨",
          content: "**Enhancement Ideas:**\\n\\n1. **Add LCD Display**: Show temperature and humidity\\n2. **Data Logging**: Save readings to SD card\\n3. **WiFi Module**: Send data to smartphone\\n4. **Buzzer Alert**: Sound alarm when too hot/cold\\n5. **Multiple Sensors**: Monitor different rooms\\n6. **RGB LED**: Color gradient based on temperature\\n7. **Fan Control**: Auto fan when temperature rises\\n\\n**Real-World Applications:**\\n• Smart thermostat\\n• Greenhouse monitoring\\n• Server room temperature alert\\n• Reptile tank climate control\\n• Food storage monitoring\\n• Weather station"
        }
      ]
    }
  },
  { 
    id: 8, 
    title: "Final Project - Smart Home Device", 
    completed: false,
    wiringImage: componentsImg,
    playgroundCode: `// Smart Home Control Center
// Combines multiple sensors and outputs

#include <DHT.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Sensors and Components
#define DHTPIN 7
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
LiquidCrystal_I2C lcd(0x27, 16, 2);

int motionPin = 2;      // PIR motion sensor
int lightPin = A0;      // Light sensor (LDR)
int relayPin = 8;       // Relay for lamp
int fanPin = 9;         // Fan control

void setup() {
  pinMode(motionPin, INPUT);
  pinMode(relayPin, OUTPUT);
  pinMode(fanPin, OUTPUT);
  
  lcd.init();
  lcd.backlight();
  dht.begin();
  Serial.begin(9600);
  
  lcd.setCursor(0, 0);
  lcd.print("Smart Home");
  lcd.setCursor(0, 1);
  lcd.print("Initializing...");
  delay(2000);
}

void loop() {
  // Read sensors
  float temp = dht.readTemperature();
  int lightLevel = analogRead(lightPin);
  int motion = digitalRead(motionPin);
  
  // Display on LCD
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Temp:");
  lcd.print(temp, 1);
  lcd.print("C");
  
  lcd.setCursor(0, 1);
  lcd.print("Light:");
  lcd.print(lightLevel);
  
  // Auto fan control based on temperature
  if (temp > 28) {
    analogWrite(fanPin, 200);  // Fan ON
  } else {
    analogWrite(fanPin, 0);     // Fan OFF
  }
  
  // Auto light control (motion + darkness)
  if (motion == HIGH && lightLevel < 300) {
    digitalWrite(relayPin, HIGH);  // Light ON
  } else {
    digitalWrite(relayPin, LOW);   // Light OFF
  }
  
  delay(1000);
}`,
    content: {
      title: "Final Project - Smart Home Device",
      description: "Put everything together! Build an intelligent home automation system combining sensors, displays, and automated controls. Time to create something amazing! 🏠",
      sections: [
        {
          title: "Project Overview",
          content: "**Smart Home Control Center Features:**\\n\\n✅ **Temperature Monitoring** with automatic fan control\\n✅ **Motion Detection** for security and automation\\n✅ **Light Sensing** for adaptive lighting\\n✅ **LCD Display** showing real-time information\\n✅ **Automated Lamp Control** (motion + darkness)\\n✅ **Fan Control** based on temperature\\n\\n**Learning Goals:**\\n• Integrate multiple sensors\\n• Make decisions based on multiple inputs\\n• Create a user-friendly interface\\n• Build practical home automation\\n• Debug complex systems"
        },
        {
          title: "Complete Parts List",
          content: "**Required Components:**\\n\\n**Arduino & Power:**\\n• Arduino Uno\\n• 9V power adapter\\n\\n**Sensors:**\\n• DHT11 temperature/humidity sensor\\n• PIR motion sensor (HC-SR501)\\n• Light sensor (LDR + 10kΩ resistor)\\n\\n**Outputs:**\\n• I2C LCD display (16x2)\\n• 5V relay module\\n• DC fan (5V) or fan motor\\n• Lamp (110V/220V AC via relay)\\n\\n**Accessories:**\\n• Jumper wires\\n• Breadboard\\n• Resistors (220Ω, 10kΩ)\\n• Project enclosure (optional)\\n\\n**Estimated Cost:** $25-35 USD"
        },
        {
          title: "System Wiring Diagram",
          content: "**Power Connections:**\\n• All VCC pins → 5V rail\\n• All GND pins → GND rail\\n• Arduino powered by 9V adapter\\n\\n**Sensor Connections:**\\n• DHT11 Data → Pin 7\\n• PIR Motion OUT → Pin 2\\n• LDR voltage divider → A0\\n• I2C LCD: SDA → A4, SCL → A5\\n\\n**Output Connections:**\\n• Relay control → Pin 8 (controls 110V lamp)\\n• Fan PWM → Pin 9 (5V DC fan)\\n\\n**Safety Note:**\\nRelay controls high voltage AC power. Use proper insulated enclosure and follow electrical safety guidelines!"
        },
        {
          title: "Logic & Programming",
          content: "**Decision Making:**\\n\\n**Automatic Fan:**\\n```cpp\\nif (temp > 28) {\\n  // Hot: Turn fan ON\\n  analogWrite(fanPin, 200);\\n} else {\\n  // Cool: Turn fan OFF\\n  analogWrite(fanPin, 0);\\n}\\n```\\n\\n**Smart Lighting:**\\n```cpp\\nif (motion && lightLevel < 300) {\\n  // Motion detected AND dark\\n  digitalWrite(relayPin, HIGH);\\n} else {\\n  // No motion OR bright\\n  digitalWrite(relayPin, LOW);\\n}\\n```\\n\\n**Custom Thresholds:**\\nAdjust values for your environment:\\n• Temperature threshold (28°C)\\n• Light threshold (300)\\n• Fan speed (200)\\n• Timing delays"
        },
        {
          title: "Next Steps & Advanced Features",
          content: "**Congratulations!** You've built a complete Arduino system! 🎉\\n\\n**Expand Your Project:**\\n\\n1. **Add WiFi (ESP8266/ESP32)**\\n   • Control via smartphone app\\n   • Send notifications\\n   • Cloud data logging\\n\\n2. **Voice Control**\\n   • Integrate with Alexa/Google Home\\n   • Voice commands for devices\\n\\n3. **Time-Based Automation**\\n   • RTC module for schedules\\n   • Turn lights on/off at specific times\\n\\n4. **Energy Monitoring**\\n   • Current sensors\\n   • Track power consumption\\n\\n**Continue Learning:**\\n• ESP32 for IoT projects\\n• Raspberry Pi for complex systems\\n• PCB design for custom boards\\n• 3D printing for enclosures\\n\\n**You're now an Arduino maker! Keep creating! 🚀**"
        }
      ]
    }
  }
];
