// Arduino Microprocessors Starter Kit - 8 comprehensive lessons
// Beginner-friendly with code examples, wiring diagrams, and interactive visuals

import arduinoBoardImg from "@assets/generated_images/Cute_Arduino_board_cartoon_illustration_e7d8f8d5.png";
import ledWiringImg from "@assets/generated_images/Arduino_LED_wiring_diagram_cartoon_f4ff2aa3.png";
import buttonWiringImg from "@assets/generated_images/Arduino_button_LED_wiring_diagram_f414be22.png";
import potentiometerWiringImg from "@assets/generated_images/Arduino_potentiometer_sensor_wiring_diagram_5e5f02c8.png";
import motorWiringImg from "@assets/generated_images/Arduino_motor_driver_wiring_diagram_47110d5d.png";
import lcdWiringImg from "@assets/generated_images/Arduino_LCD_display_wiring_diagram_78c16099.png";
import temperatureWiringImg from "@assets/generated_images/Arduino_temperature_sensor_wiring_diagram_174fcaeb.png";
import smartHomeWiringImg from "@assets/generated_images/Arduino_smart_home_project_diagram_f7002808.png";
import ultrasonicWiringImg from "@assets/generated_images/Arduino_ultrasonic_sensor_HC-SR04_wiring_c14f40ec.png";
import buzzerWiringImg from "@assets/generated_images/Arduino_piezo_buzzer_simple_wiring_5f5507c7.png";
import ldrWiringImg from "@assets/generated_images/Arduino_photoresistor_LDR_light_sensor_wiring_1272aeea.png";

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
    wiringImage: buttonWiringImg,
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
    wiringImage: potentiometerWiringImg,
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
    wiringImage: motorWiringImg,
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
    wiringImage: lcdWiringImg,
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
    wiringImage: temperatureWiringImg,
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
    title: "Servo Motors & Precise Control", 
    completed: false,
    wiringImage: motorWiringImg,
    playgroundCode: `// Servo motor sweep and button control
// Wiring: Servo → Pin 9, 5V, GND | Button → Pin 2, GND

#include <Servo.h>

Servo myServo;          // Create servo object
int servoPin = 9;       // Servo control pin
int buttonPin = 2;      // Button pin
int angle = 90;         // Current angle

void setup() {
  myServo.attach(servoPin);
  pinMode(buttonPin, INPUT_PULLUP);
  myServo.write(90);    // Center position
  Serial.begin(9600);
}

void loop() {
  // Sweep demonstration
  for (angle = 0; angle <= 180; angle += 5) {
    myServo.write(angle);
    delay(30);
  }
  
  delay(500);
  
  for (angle = 180; angle >= 0; angle -= 5) {
    myServo.write(angle);
    delay(30);
  }
  
  delay(500);
  
  // Button control - press to move
  if (digitalRead(buttonPin) == LOW) {
    myServo.write(0);    // Move to 0 degrees
    delay(1000);
    myServo.write(180);  // Move to 180 degrees
  }
}`,
    content: {
      title: "Servo Motors & Precise Control",
      description: "Learn to control servo motors for precise angular movements! Create projects like robot arms, automated doors, and camera gimbals. 🤖",
      sections: [
        {
          title: "What is a Servo Motor?",
          content: "**Servo Motors Overview:**\\n\\nA servo motor is a precision motor that can rotate to specific angles with high accuracy.\\n\\n**Key Differences from DC Motors:**\\n• **DC Motor**: Spins continuously, speed control\\n• **Servo Motor**: Precise position control (0-180°)\\n\\n**Common Uses:**\\n• Robot arms and joints\\n• RC cars steering\\n• Camera gimbals\\n• Automated doors\\n• Pan-tilt mechanisms\\n• Robotic hands\\n\\n**Advantages:**\\n• Very precise angle control\\n• Holds position with torque\\n• Easy to program\\n• Affordable ($2-5)"
        },
        {
          title: "Servo Motor Wiring",
          content: "**Standard Servo has 3 Wires:**\\n\\n🔴 **Red** → Power (5V from Arduino)\\n⚫ **Brown/Black** → Ground (GND)\\n🟠 **Orange/Yellow** → Signal (PWM pin)\\n\\n**Arduino Connection:**\\n```\\nServo Wire    →    Arduino\\nRed (Power)   →    5V\\nBrown (GND)   →    GND\\nOrange        →    Pin 9 (PWM)\\n```\\n\\n**Important Notes:**\\n• Servos can draw high current - use external 5V supply for multiple servos\\n• Always connect GND between Arduino and external power\\n• Use PWM-capable pins (3, 5, 6, 9, 10, 11)\\n• Keep wires short to reduce interference"
        },
        {
          title: "Programming Servo Motors",
          content: "**Servo Library Basics:**\\n\\n**1. Include Library:**\\n```cpp\\n#include <Servo.h>\\n```\\n\\n**2. Create Servo Object:**\\n```cpp\\nServo myServo;\\n```\\n\\n**3. Attach to Pin:**\\n```cpp\\nvoid setup() {\\n  myServo.attach(9);  // Pin 9\\n}\\n```\\n\\n**4. Control Position:**\\n```cpp\\nmyServo.write(90);   // Move to 90 degrees\\ndelay(1000);         // Wait 1 second\\nmyServo.write(0);    // Move to 0 degrees\\n```\\n\\n**Angle Range:**\\n• **0°** = Fully left/counterclockwise\\n• **90°** = Center position\\n• **180°** = Fully right/clockwise"
        },
        {
          title: "Servo Projects & Ideas 🎨",
          content: "**Beginner Projects:**\\n\\n1. **Automatic Door Lock**\\n   • Servo rotates to lock/unlock\\n   • Button or keypad control\\n\\n2. **Pet Feeder**\\n   • Servo opens food dispenser\\n   • Scheduled feeding times\\n\\n3. **Solar Panel Tracker**\\n   • Servo adjusts panel angle\\n   • Follows sun for max efficiency\\n\\n4. **Camera Pan-Tilt**\\n   • Two servos (X and Y axis)\\n   • Remote control or motion tracking\\n\\n5. **Robot Arm**\\n   • Multiple servos for joints\\n   • Pick and place objects\\n\\n**Tips:**\\n• Start with single servo projects\\n• Add sensors for automation\\n• Combine with other components\\n• Use 3D printing for mechanical parts"
        }
      ]
    }
  },
  {
    id: 9,
    title: "Ultrasonic Distance Sensors",
    completed: false,
    wiringImage: ultrasonicWiringImg,
    playgroundCode: `// HC-SR04 Ultrasonic Distance Sensor
// Wiring: VCC→5V, GND→GND, Trig→Pin 9, Echo→Pin 10

int trigPin = 9;
int echoPin = 10;
int ledPin = 13;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // Send ultrasonic pulse
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Read echo time
  long duration = pulseIn(echoPin, HIGH);
  
  // Calculate distance in cm
  int distance = duration * 0.034 / 2;
  
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  // LED alert if object too close
  if (distance < 20) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
  
  delay(100);
}`,
    content: {
      title: "Ultrasonic Distance Sensors",
      description: "Measure distances without touching! Learn how ultrasonic sensors work to detect objects and measure range - perfect for robots and automation. 📏",
      sections: [
        {
          title: "How Ultrasonic Sensors Work",
          content: "**HC-SR04 Ultrasonic Sensor:**\\n\\nWorks like a bat using echolocation!\\n\\n**Process:**\\n1. **Trigger pin** sends ultrasonic sound wave (40kHz)\\n2. Sound bounces off objects\\n3. **Echo pin** receives reflected sound\\n4. Calculate distance from travel time\\n\\n**Formula:**\\n```\\nDistance (cm) = (Time × Speed of Sound) / 2\\nDistance = (duration × 0.034) / 2\\n```\\n\\n**Range:**\\n• Minimum: 2cm\\n• Maximum: 400cm (4 meters)\\n• Accuracy: ±3mm\\n\\n**Advantages:**\\n• Non-contact measurement\\n• Weather resistant\\n• Very affordable ($2-3)"
        },
        {
          title: "Sensor Connections",
          content: "**HC-SR04 has 4 pins:**\\n\\n**VCC** → Arduino 5V\\n**GND** → Arduino GND\\n**Trig** → Arduino Pin 9 (any digital pin)\\n**Echo** → Arduino Pin 10 (any digital pin)\\n\\n**Wiring Tips:**\\n• No resistors needed for 5V Arduino\\n• For 3.3V boards, use voltage divider on Echo pin\\n• Keep wires reasonably short\\n• Sensor works best on flat surfaces\\n\\n**Mounting:**\\n• Face sensor forward (avoid obstacles)\\n• Ultrasound beams spread in 15° cone\\n• Soft materials (fabric, foam) absorb sound\\n• Hard surfaces reflect better"
        },
        {
          title: "Distance Measurement Code",
          content: "**Step-by-Step Process:**\\n\\n**1. Send Trigger Pulse:**\\n```cpp\\ndigitalWrite(trigPin, LOW);\\ndelayMicroseconds(2);\\ndigitalWrite(trigPin, HIGH);\\ndelayMicroseconds(10);  // 10µs pulse\\ndigitalWrite(trigPin, LOW);\\n```\\n\\n**2. Read Echo Time:**\\n```cpp\\nlong duration = pulseIn(echoPin, HIGH);\\n// Returns time in microseconds\\n```\\n\\n**3. Calculate Distance:**\\n```cpp\\nint distanceCm = duration * 0.034 / 2;\\nint distanceInch = duration * 0.0133 / 2;\\n```\\n\\n**Why divide by 2?**\\nSound travels to object AND back = double distance"
        },
        {
          title: "Ultrasonic Projects 🚗",
          content: "**Amazing Project Ideas:**\\n\\n1. **Parking Sensor**\\n   • Beep faster as car gets closer\\n   • LED indicators for distance\\n\\n2. **Automatic Trash Can**\\n   • Lid opens when hand detected\\n   • No-touch operation\\n\\n3. **Robot Navigation**\\n   • Obstacle avoidance\\n   • Wall following\\n   • Autonomous movement\\n\\n4. **Water Level Monitor**\\n   • Measure liquid level in tank\\n   • Send alerts when low\\n\\n5. **Security System**\\n   • Detect intruders\\n   • Count people entering/exiting\\n\\n6. **Hand Gesture Control**\\n   • Control devices with hand distance\\n   • Volume control, brightness, etc.\\n\\n**Combine with:**\\n• Servo motors for pan/tilt\\n• LCD for distance display\\n• Buzzer for proximity alerts"
        }
      ]
    }
  },
  {
    id: 10,
    title: "Piezo Buzzers & Sound Generation",
    completed: false,
    wiringImage: buzzerWiringImg,
    playgroundCode: `// Piezo buzzer playing melodies
// Wiring: Buzzer + → Pin 8, Buzzer - → GND

int buzzerPin = 8;

// Musical note frequencies
#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_A4  440
#define NOTE_B4  494
#define NOTE_C5  523

void setup() {
  pinMode(buzzerPin, OUTPUT);
}

void loop() {
  // Play "Happy Birthday" melody
  int melody[] = {
    NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_F4, NOTE_E4,
    NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_G4, NOTE_F4
  };
  
  int noteDurations[] = {
    4, 8, 4, 4, 4, 2,
    4, 8, 4, 4, 4, 2
  };
  
  for (int i = 0; i < 12; i++) {
    int duration = 1000 / noteDurations[i];
    tone(buzzerPin, melody[i], duration);
    delay(duration * 1.3);  // Pause between notes
  }
  
  noTone(buzzerPin);
  delay(2000);
}`,
    content: {
      title: "Piezo Buzzers & Sound Generation",
      description: "Make music and sound effects! Learn to control piezo buzzers to create tones, melodies, and audio alerts for your projects. 🎵",
      sections: [
        {
          title: "What is a Piezo Buzzer?",
          content: "**Piezo Buzzer Basics:**\\n\\nA small electronic device that makes sound when electricity is applied.\\n\\n**Two Types:**\\n\\n**1. Active Buzzer:**\\n• Has internal oscillator\\n• Makes fixed tone (beep)\\n• Just connect power (HIGH/LOW)\\n• Simpler but less flexible\\n\\n**2. Passive Buzzer:**\\n• No internal oscillator\\n• Requires PWM signal\\n• Can play different tones\\n• More versatile (music!)\\n\\n**How Passive Buzzers Work:**\\n• PWM signal vibrates ceramic disk\\n• Different frequencies = different notes\\n• Arduino's tone() function makes this easy"
        },
        {
          title: "Buzzer Connections",
          content: "**Simple 2-Wire Connection:**\\n\\n**Passive Buzzer:**\\n• Positive (+) → Arduino Pin 8 (any PWM pin)\\n• Negative (-) → Arduino GND\\n\\n**Active Buzzer:**\\n• Positive (+) → Arduino Pin 8\\n• Negative (-) → GND\\n• Or use transistor for louder sound\\n\\n**Tips:**\\n• Some buzzers have polarity, some don't\\n• If it doesn't work, try reversing wires\\n• Add 100Ω resistor for lower volume\\n• Use transistor (2N2222) for higher current\\n\\n**Louder Sound Circuit:**\\n```\\nArduino Pin 8 → 1kΩ resistor → Transistor Base\\nTransistor Collector → Buzzer +\\nTransistor Emitter → GND\\nBuzzer - → 5V\\n```"
        },
        {
          title: "Making Sounds with Code",
          content: "**Arduino tone() Function:**\\n\\n**Basic Tone:**\\n```cpp\\ntone(pin, frequency);\\n// Play frequency on pin\\n```\\n\\n**Tone with Duration:**\\n```cpp\\ntone(pin, frequency, duration);\\n// Play for specific milliseconds\\n```\\n\\n**Stop Tone:**\\n```cpp\\nnoTone(pin);\\n// Stop playing sound\\n```\\n\\n**Musical Notes (Frequencies):**\\n```cpp\\n#define NOTE_C4  262  // Middle C\\n#define NOTE_D4  294\\n#define NOTE_E4  330\\n#define NOTE_F4  349\\n#define NOTE_G4  392\\n#define NOTE_A4  440  // Concert A\\n#define NOTE_B4  494\\n#define NOTE_C5  523  // High C\\n```\\n\\n**Simple Beep:**\\n```cpp\\ntone(8, 1000, 200);  // 1kHz for 200ms\\ndelay(300);\\nnoTone(8);\\n```"
        },
        {
          title: "Sound Projects 🎶",
          content: "**Fun Project Ideas:**\\n\\n1. **Musical Doorbell**\\n   • Button press plays melody\\n   • Different tunes for different buttons\\n\\n2. **Game Sound Effects**\\n   • Victory sound\\n   • Game over tone\\n   • Level up melody\\n\\n3. **Alarm System**\\n   • Motion sensor triggers siren\\n   • Warning beeps before alarm\\n\\n4. **Piano Keyboard**\\n   • Multiple buttons for different notes\\n   • Play songs with button presses\\n\\n5. **Parking Assistant**\\n   • Faster beeps when closer to wall\\n   • Ultrasonic + buzzer\\n\\n6. **Morse Code Transmitter**\\n   • Translate text to beeps\\n   • Educational learning tool\\n\\n7. **Timer/Stopwatch**\\n   • Beep at intervals\\n   • Alert when time's up\\n\\n**Melody Libraries:**\\nFind Arduino tone libraries with popular songs already coded!"
        }
      ]
    }
  },
  {
    id: 11,
    title: "Photoresistors & Light Sensing",
    completed: false,
    wiringImage: ldrWiringImg,
    playgroundCode: `// Photoresistor (LDR) for automatic lighting
// Wiring: LDR → A0 & 5V, 10kΩ resistor A0 → GND, LED → Pin 9

int ldrPin = A0;
int ledPin = 9;
int threshold = 500;  // Adjust for your environment

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int lightLevel = analogRead(ldrPin);
  
  Serial.print("Light Level: ");
  Serial.println(lightLevel);
  
  // Auto LED control based on ambient light
  if (lightLevel < threshold) {
    // Dark - turn LED on
    digitalWrite(ledPin, HIGH);
    Serial.println("LED: ON (Dark)");
  } else {
    // Bright - turn LED off
    digitalWrite(ledPin, LOW);
    Serial.println("LED: OFF (Bright)");
  }
  
  // Smooth LED brightness based on light
  int brightness = map(lightLevel, 0, 1023, 255, 0);
  analogWrite(ledPin, brightness);
  
  delay(100);
}`,
    content: {
      title: "Photoresistors & Light Sensing",
      description: "Sense light levels and create smart lighting systems! Build automatic night lights, solar trackers, and light-responsive projects. ☀️",
      sections: [
        {
          title: "What is a Photoresistor (LDR)?",
          content: "**Light Dependent Resistor (LDR):**\\n\\nA resistor that changes resistance based on light intensity.\\n\\n**How it Works:**\\n• **Bright Light** → Low resistance (1kΩ - 10kΩ)\\n• **Darkness** → High resistance (1MΩ or more)\\n\\n**Also Called:**\\n• Photoresistor\\n• Photocell\\n• Light sensor\\n\\n**Characteristics:**\\n• Analog sensor (0-1023 values)\\n• Slow response time (100ms)\\n• No polarity - works both ways\\n• Very affordable ($0.50)\\n• Sensitive to visible light\\n• Not precise, but good enough for most projects\\n\\n**Applications:**\\n• Automatic street lights\\n• Camera exposure meters\\n• Solar panel tracking\\n• Security lights\\n• Plant grow lights"
        },
        {
          title: "LDR Circuit & Wiring",
          content: "**Voltage Divider Circuit:**\\n\\nLDR needs a fixed resistor to create readable voltage.\\n\\n**Wiring:**\\n```\\n5V → LDR → A0 → 10kΩ resistor → GND\\n```\\n\\n**Component Connection:**\\n1. **LDR leg 1** → Arduino 5V\\n2. **LDR leg 2** → Arduino A0\\n3. **10kΩ resistor** → A0 and GND\\n\\n**Why 10kΩ?**\\nCreates voltage divider with LDR:\\n• Bright: LDR = 1kΩ → High voltage at A0\\n• Dark: LDR = 1MΩ → Low voltage at A0\\n\\n**Reading Values:**\\n```cpp\\nint lightLevel = analogRead(A0);\\n// Returns 0 (dark) to 1023 (bright)\\n```\\n\\n**Calibration:**\\nRun this to see your light ranges:\\n```cpp\\nvoid loop() {\\n  Serial.println(analogRead(A0));\\n  delay(100);\\n}\\n```"
        },
        {
          title: "Programming Light Detection",
          content: "**Basic Light Reading:**\\n```cpp\\nint ldrPin = A0;\\nint lightValue = analogRead(ldrPin);\\n```\\n\\n**Threshold Detection:**\\n```cpp\\nint threshold = 500;  // Adjust for room\\nif (lightValue < threshold) {\\n  // It's dark\\n  digitalWrite(ledPin, HIGH);\\n} else {\\n  // It's bright\\n  digitalWrite(ledPin, LOW);\\n}\\n```\\n\\n**Smooth Brightness Control:**\\n```cpp\\n// Invert and scale: dark=bright LED\\nint brightness = map(lightValue, 0, 1023, 255, 0);\\nanalogWrite(ledPin, brightness);\\n```\\n\\n**Average Reading (Reduce Noise):**\\n```cpp\\nint getAverageLight() {\\n  long sum = 0;\\n  for(int i=0; i<10; i++) {\\n    sum += analogRead(ldrPin);\\n    delay(10);\\n  }\\n  return sum / 10;\\n}\\n```"
        },
        {
          title: "Light Sensing Projects 💡",
          content: "**Project Ideas:**\\n\\n1. **Automatic Night Light**\\n   • LED turns on when room gets dark\\n   • Saves energy during daytime\\n\\n2. **Smart Window Blinds**\\n   • Servo closes blinds when too bright\\n   • Opens in morning automatically\\n\\n3. **Solar Panel Tracker**\\n   • Two LDRs find brightest direction\\n   • Servo rotates panel toward sun\\n\\n4. **Plant Grow Light Timer**\\n   • Ensures plants get enough light\\n   • Supplement with LED when dark\\n\\n5. **Photography Light Meter**\\n   • Measure room brightness\\n   • Display on LCD in lux\\n\\n6. **Automatic Headlights**\\n   • For RC car or robot\\n   • Turns on lights in tunnels\\n\\n7. **Wake-Up Light Alarm**\\n   • Detects sunrise\\n   • Triggers alarm in morning\\n\\n**Advanced: Dual LDR Sun Tracker**\\nTwo LDRs determine brightest angle for solar tracking!"
        }
      ]
    }
  },
  {
    id: 12,
    title: "Final Project - Smart Home Automation",
    completed: false,
    wiringImage: smartHomeWiringImg,
    playgroundCode: `// Complete Smart Home Control System
// Combines: Temperature, LCD, Motion, Light, Relay, Fan

#include <DHT.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

#define DHTPIN 7
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
LiquidCrystal_I2C lcd(0x27, 16, 2);

int motionPin = 2;
int lightPin = A0;
int relayPin = 8;
int fanPin = 9;

void setup() {
  pinMode(motionPin, INPUT);
  pinMode(relayPin, OUTPUT);
  pinMode(fanPin, OUTPUT);
  
  lcd.init();
  lcd.backlight();
  dht.begin();
  Serial.begin(9600);
  
  lcd.print("Smart Home v1.0");
  delay(2000);
}

void loop() {
  float temp = dht.readTemperature();
  int lightLevel = analogRead(lightPin);
  int motion = digitalRead(motionPin);
  
  // Display on LCD
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("T:");
  lcd.print(temp, 1);
  lcd.print("C L:");
  lcd.print(lightLevel);
  
  lcd.setCursor(0, 1);
  lcd.print("Motion:");
  lcd.print(motion ? "YES" : "NO ");
  
  // Auto fan when hot
  if (temp > 28) {
    analogWrite(fanPin, 200);
  } else {
    analogWrite(fanPin, 0);
  }
  
  // Auto lights (motion + dark)
  if (motion && lightLevel < 300) {
    digitalWrite(relayPin, HIGH);
  } else {
    digitalWrite(relayPin, LOW);
  }
  
  delay(500);
}`,
    content: {
      title: "Final Project - Smart Home Automation System",
      description: "Build the ultimate Arduino project! Combine everything you've learned into an intelligent home automation system with multiple sensors and automated controls. 🏠✨",
      sections: [
        {
          title: "Project Overview & Features",
          content: "**Complete Smart Home System:**\\n\\n✅ **Temperature Monitoring** (DHT11)\\n✅ **Automatic Fan Control** (based on temp)\\n✅ **Motion Detection** (PIR sensor)\\n✅ **Light Level Sensing** (LDR)\\n✅ **Smart Lighting** (motion + darkness)\\n✅ **LCD Information Display** (real-time data)\\n✅ **Multiple Automated Rules**\\n\\n**What You'll Learn:**\\n• Integrate multiple sensors\\n• Make decisions from multiple inputs\\n• Create automation logic\\n• Build practical home systems\\n• Debug complex projects\\n• Professional project organization\\n\\n**Real-World Use Cases:**\\n• Energy saving automation\\n• Security monitoring\\n• Comfort optimization\\n• Elderly care assistance"
        },
        {
          title: "Complete Parts & Cost",
          content: "**Required Components:**\\n\\n**Controller:**\\n• Arduino Uno R3 ($10-15)\\n• 9V power adapter ($5)\\n• Breadboard ($3)\\n• Jumper wires ($3)\\n\\n**Sensors:**\\n• DHT11 temperature/humidity ($2)\\n• PIR motion sensor HC-SR501 ($3)\\n• Photoresistor LDR + 10kΩ ($1)\\n\\n**Outputs:**\\n• I2C LCD display 16x2 ($5)\\n• 5V relay module ($3)\\n• DC fan 5V ($4)\\n• LEDs + resistors ($2)\\n\\n**Optional:**\\n• Project enclosure ($5-10)\\n• Prototype PCB ($3)\\n• Power supply 5V 2A ($8)\\n\\n**Total Cost:** $40-50 USD\\n\\n**Tools Needed:**\\n• Wire strippers\\n• Multimeter (helpful)\\n• Computer with Arduino IDE"
        },
        {
          title: "System Wiring Guide",
          content: "**Power Distribution:**\\n```\\n5V Rail: DHT11, PIR, LCD, Relay\\nGND Rail: All component grounds\\nArduino powered by 9V adapter\\n```\\n\\n**Sensor Connections:**\\n• **DHT11:** Data→Pin 7, VCC→5V, GND→GND\\n• **PIR Motion:** OUT→Pin 2, VCC→5V, GND→GND\\n• **LDR Circuit:** A0, voltage divider with 10kΩ\\n• **LCD I2C:** SDA→A4, SCL→A5, VCC→5V, GND→GND\\n\\n**Output Connections:**\\n• **Relay:** IN→Pin 8, controls 110V lamp\\n• **Fan:** PWM→Pin 9, 5V DC fan\\n\\n**Safety Tips:**\\n⚠️ Relay switches high voltage AC\\n⚠️ Use insulated enclosure\\n⚠️ Don't touch wires when powered\\n⚠️ Test with multimeter first\\n⚠️ Use proper wire gauge for AC"
        },
        {
          title: "Automation Logic & Rules",
          content: "**Smart Decision Making:**\\n\\n**Rule 1: Automatic Cooling**\\n```cpp\\nif (temperature > 28) {\\n  fanSpeed = 200;  // High speed\\n} else if (temperature > 25) {\\n  fanSpeed = 100;  // Low speed\\n} else {\\n  fanSpeed = 0;    // Off\\n}\\n```\\n\\n**Rule 2: Smart Lighting**\\n```cpp\\nif (motion && lightLevel < 300) {\\n  // Motion + Dark = Light ON\\n  relayState = HIGH;\\n} else {\\n  relayState = LOW;\\n}\\n```\\n\\n**Rule 3: Energy Saving**\\n```cpp\\nif (noMotionFor(10 minutes)) {\\n  // Turn off everything\\n  fanSpeed = 0;\\n  relayState = LOW;\\n}\\n```\\n\\n**Customization:**\\n• Adjust temperature thresholds\\n• Change light sensitivity\\n• Add time-based rules\\n• Create modes (home/away/night)"
        },
        {
          title: "Next Level Projects 🚀",
          content: "**Congratulations!** You're now an Arduino developer! 🎉\\n\\n**Expand Your System:**\\n\\n**1. Add Internet Connectivity**\\n• ESP8266 WiFi module ($5)\\n• Control from smartphone\\n• Send notifications\\n• Cloud data logging\\n• Blynk or IFTTT integration\\n\\n**2. Voice Control**\\n• Amazon Alexa integration\\n• Google Home commands\\n• Voice-activated scenes\\n\\n**3. Advanced Sensors**\\n• Gas/smoke detectors\\n• Water leak sensors\\n• Door/window contact sensors\\n• Current/power monitoring\\n\\n**4. Multiple Rooms**\\n• Wireless sensor nodes\\n• Central control hub\\n• Room-specific automation\\n\\n**Continue Your Journey:**\\n• Learn ESP32 for IoT\\n• Try Raspberry Pi for complex systems\\n• Design custom PCBs\\n• 3D print enclosures\\n• Share projects on GitHub\\n\\n**You're a maker now - keep building amazing things! 💪**"
        }
      ]
    }
  }
];
