import { LessonData } from "@/components/LessonContent";
import arduinoImage from "@assets/stock_images/arduino_uno_microcon_1147a2f6.jpg";
import ledImage from "@assets/stock_images/led_light_emitting_d_8d2a9117.jpg";
import breadboardImage from "@assets/stock_images/breadboard_solderles_a4ae7e26.jpg";
import resistorImage from "@assets/stock_images/resistor_electronic__e71ff99c.jpg";
import buttonImage from "@assets/stock_images/push_button_switch_e_ab082345.jpg";
import potentiometerImage from "@assets/stock_images/potentiometer_knob_v_e9ee9a3d.jpg";
import ultrasonicImage from "@assets/stock_images/ultrasonic_sensor_hc_6de25d44.jpg";
import servoImage from "@assets/stock_images/servo_motor_small_el_82b2371f.jpg";
import esp32Image from "@assets/stock_images/esp32_development_bo_6179a915.jpg";
import esp8266Image from "@assets/stock_images/esp8266_nodemcu_wifi_c5672cab.jpg";
import picoImage from "@assets/stock_images/raspberry_pi_pico_mi_0866958f.jpg";
import stm32Image from "@assets/stock_images/stm32_development_bo_400ecbd0.jpg";
import teensyImage from "@assets/stock_images/teensy_microcontroll_a04ef388.jpg"; 

export const lessonsData: LessonData[] = [
  {
    id: "arduino-uno",
    title: "Arduino Uno Board",
    category: "Getting Started",
    description: "The Arduino Uno is a microcontroller board based on the ATmega328P. It's the heart of your projects and controls all other components.",
    image: arduinoImage,
    specs: [
      { label: "Microcontroller", value: "ATmega328P" },
      { label: "Operating Voltage", value: "5V" },
      { label: "Digital I/O Pins", value: "14 (6 PWM)" },
      { label: "Analog Input Pins", value: "6" },
      { label: "Flash Memory", value: "32 KB" },
      { label: "Clock Speed", value: "16 MHz" },
    ],
    howItWorks: "The Arduino Uno is a programmable microcontroller that executes code to control electronic components. It reads inputs from sensors and switches, processes the information, and sends output signals to components like LEDs, motors, and displays. Power is supplied through USB or an external adapter, and programs are uploaded via USB.",
    pinLayout: [
      { pin: "Digital 0-13", function: "Digital input/output pins, pins 3, 5, 6, 9, 10, 11 support PWM" },
      { pin: "Analog A0-A5", function: "Analog input pins that can read sensor values" },
      { pin: "5V / 3.3V", function: "Power supply pins for components" },
      { pin: "GND", function: "Ground pins for completing circuits" },
      { pin: "VIN", function: "Input voltage when using external power supply" },
    ],
    codeExample: {
      title: "Basic Setup Code",
      code: `void setup() {
  // Initialize serial communication
  Serial.begin(9600);

  // Set pin 13 (built-in LED) as output
  pinMode(13, OUTPUT);
}

void loop() {
  // Your main code runs here repeatedly
  digitalWrite(13, HIGH);  // Turn LED on
  delay(1000);            // Wait 1 second
  digitalWrite(13, LOW);   // Turn LED off
  delay(1000);            // Wait 1 second
}`,
      explanation: "This basic program makes the built-in LED on pin 13 blink on and off every second. The setup() function runs once when the board starts, while loop() runs continuously.",
    },
    advancedUsage: "The Arduino can communicate with computers via Serial, control multiple components simultaneously, read multiple sensors, and create complex interactive projects. You can also use libraries to simplify working with specific components and protocols.",
    troubleshooting: [
      { issue: "Board not recognized by computer", solution: "Check USB cable connection and install/update Arduino drivers" },
      { issue: "Upload error", solution: "Make sure the correct board and port are selected in Arduino IDE" },
      { issue: "Program doesn't run after upload", solution: "Check for errors in code and ensure power supply is adequate" },
    ],
  },
  {
    id: "breadboard",
    title: "Breadboard",
    category: "Getting Started",
    description: "A solderless breadboard allows you to quickly prototype circuits without soldering. It's an essential tool for building and testing Arduino projects.",
    image: breadboardImage,
    specs: [
      { label: "Type", value: "Solderless" },
      { label: "Tie Points", value: "830 typical" },
      { label: "Power Rails", value: "2 sets (+ and -)" },
      { label: "Size", value: "Standard half-size" },
    ],
    howItWorks: "A breadboard has rows of connected holes that allow components to be inserted and connected electrically. The middle section has rows (typically labeled 1-30) where each row of 5 holes is connected internally. The power rails run along the sides with all holes in each rail connected together, providing easy access to power and ground.",
    codeExample: {
      title: "No Code Required",
      code: `// Breadboards don't require programming
// They provide the physical connections
// between your Arduino and components

// Example: Connect LED to pin 13
// 1. Insert LED into breadboard
// 2. Connect LED long leg to pin 13
// 3. Connect LED short leg to GND via resistor`,
      explanation: "Breadboards are physical connection tools, not programmable components. They make it easy to wire up circuits quickly without soldering.",
    },
    troubleshooting: [
      { issue: "Circuit not working", solution: "Check all connections are fully inserted and in correct rows" },
      { issue: "Intermittent connection", solution: "Ensure wires and component legs are making good contact" },
      { issue: "Power not distributed", solution: "Some breadboards require jumper wires to connect power rails" },
    ],
  },
  {
    id: "led",
    title: "LED (Light Emitting Diode)",
    category: "Basic Components",
    description: "LEDs are semiconductor devices that emit light when current flows through them. They're one of the most common output components in Arduino projects.",
    image: ledImage,
    specs: [
      { label: "Forward Voltage", value: "1.8-3.3V" },
      { label: "Current", value: "20mA typical" },
      { label: "Polarity", value: "Yes (Anode +, Cathode -)" },
      { label: "Colors", value: "Red, Green, Blue, Yellow, White" },
    ],
    howItWorks: "LEDs work by passing current through a semiconductor material that emits photons (light) as electrons move through it. The longer leg (anode) connects to positive voltage, and the shorter leg (cathode) connects to ground. Always use a current-limiting resistor (220-330Ω) to prevent burning out the LED.",
    pinLayout: [
      { pin: "Anode (+)", function: "Long leg - connect to Arduino pin through resistor" },
      { pin: "Cathode (-)", function: "Short leg - connect to ground (GND)" },
    ],
    codeExample: {
      title: "LED Blink Example",
      code: `const int ledPin = 9;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);  // Turn LED on
  delay(500);                  // Wait half second
  digitalWrite(ledPin, LOW);   // Turn LED off
  delay(500);                  // Wait half second
}`,
      explanation: "This code turns an LED connected to pin 9 on and off repeatedly, creating a blinking effect. The digitalWrite() function controls whether the pin outputs HIGH (5V) or LOW (0V).",
    },
    advancedUsage: "You can use PWM (analogWrite) to control LED brightness, create fading effects, or control RGB LEDs to produce any color. Multiple LEDs can create light patterns, displays, or indicators for different system states.",
    troubleshooting: [
      { issue: "LED doesn't light up", solution: "Check polarity - long leg should go to positive. Verify resistor is in circuit." },
      { issue: "LED is very dim", solution: "Resistor value may be too high, try 220Ω instead of 1kΩ" },
      { issue: "LED burned out immediately", solution: "Missing current-limiting resistor or polarity reversed" },
    ],
  },
  {
    id: "resistor",
    title: "Resistors",
    category: "Basic Components",
    description: "Resistors limit the flow of electrical current in a circuit. They're essential for protecting components like LEDs and for creating voltage dividers.",
    image: resistorImage,
    specs: [
      { label: "Common Values", value: "220Ω, 330Ω, 1kΩ, 10kΩ" },
      { label: "Tolerance", value: "±5% (gold band)" },
      { label: "Power Rating", value: "0.25W typical" },
      { label: "Temperature Coefficient", value: "±50-100 ppm/°C" },
    ],
    howItWorks: "Resistors restrict current flow by converting electrical energy into heat. The resistance value is measured in ohms (Ω) and determines how much current can pass through. Color bands on the resistor indicate its value - for example, Red-Red-Brown-Gold means 220Ω with 5% tolerance.",
    codeExample: {
      title: "Calculating Resistor Values",
      code: `// Ohm's Law: V = I × R
// For LED circuit:
// Arduino outputs 5V
// LED needs ~20mA and drops 2V
// Resistor must drop: 5V - 2V = 3V

// R = V / I
// R = 3V / 0.02A = 150Ω
// Use closest standard value: 220Ω

const int ledPin = 11;
void setup() {
  pinMode(ledPin, OUTPUT);
}
void loop() {
  digitalWrite(ledPin, HIGH);
}`,
      explanation: "This example shows how to calculate the correct resistor value for an LED circuit. The 220Ω resistor limits current to a safe level for the LED.",
    },
    advancedUsage: "Resistors are used in pull-up/pull-down circuits for buttons, voltage dividers for analog sensors, current limiting for all LEDs, and in RC circuits for timing. Series resistors add together, while parallel resistors combine by the reciprocal formula.",
    troubleshooting: [
      { issue: "Component not working", solution: "Verify resistor value with color code or multimeter" },
      { issue: "Resistor getting hot", solution: "Resistance too low for the circuit, use higher value" },
      { issue: "Wrong resistance reading", solution: "Check all color bands including tolerance band" },
    ],
  },
  {
    id: "pushbutton",
    title: "Push Button",
    category: "Input Components",
    description: "Push buttons are momentary switches that create or break an electrical connection when pressed. They're the simplest form of user input.",
    image: buttonImage,
    specs: [
      { label: "Type", value: "Momentary SPST" },
      { label: "Contact Rating", value: "50mA @ 24VDC" },
      { label: "Actuation Force", value: "100-200g typical" },
      { label: "Life Cycle", value: "100,000+ operations" },
    ],
    howItWorks: "Push buttons have four legs but work as two pairs. When pressed, the button connects the circuit, allowing current to flow. Arduino reads this as HIGH or LOW on a digital pin. A pull-down resistor (10kΩ to GND) or pull-up resistor (10kΩ to 5V) ensures a defined state when the button isn't pressed.",
    pinLayout: [
      { pin: "Leg 1 & 2", function: "One side of the switch - connect to Arduino pin" },
      { pin: "Leg 3 & 4", function: "Other side - connect to GND or 5V through resistor" },
    ],
    codeExample: {
      title: "Button Input with Pull-Up",
      code: `const int buttonPin = 2;
const int ledPin = 13;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);  // Enable internal pull-up
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int buttonState = digitalRead(buttonPin);

  if (buttonState == LOW) {  // Button pressed (pull-up inverts)
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}`,
      explanation: "This code uses Arduino's internal pull-up resistor (INPUT_PULLUP) so no external resistor is needed. The button connects to GND, and reads LOW when pressed, HIGH when released.",
    },
    advancedUsage: "Buttons can trigger state changes, toggle modes, count presses, detect long presses vs short presses, and create menu navigation. Use debouncing in code or hardware to avoid false triggers from mechanical bounce.",
    troubleshooting: [
      { issue: "Multiple reads per press", solution: "Add debouncing delay or capacitor across button" },
      { issue: "Random triggers", solution: "Add pull-up or pull-down resistor for defined state" },
      { issue: "Button doesn't register", solution: "Check wiring - some buttons have two separate circuits" },
    ],
  },
  {
    id: "potentiometer",
    title: "Potentiometer",
    category: "Input Components",
    description: "Potentiometers are variable resistors that provide analog input. Turning the knob changes the resistance and voltage output, perfect for controlling values.",
    image: potentiometerImage,
    specs: [
      { label: "Resistance", value: "10kΩ typical" },
      { label: "Rotation", value: "270-300 degrees" },
      { label: "Taper", value: "Linear (B) or Logarithmic (A)" },
      { label: "Power Rating", value: "0.2W" },
    ],
    howItWorks: "A potentiometer has three pins: two outer pins connect to 5V and GND, while the middle pin (wiper) outputs a voltage between 0-5V depending on the knob position. Arduino's analog pins read this voltage and convert it to a digital value from 0-1023.",
    pinLayout: [
      { pin: "Pin 1", function: "Connect to 5V power" },
      { pin: "Pin 2 (middle)", function: "Wiper - connect to Arduino analog pin" },
      { pin: "Pin 3", function: "Connect to GND" },
    ],
    codeExample: {
      title: "Reading Analog Input",
      code: `const int potPin = A0;
const int ledPin = 9;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(potPin);     // 0-1023
  int brightness = map(sensorValue, 0, 1023, 0, 255);  // 0-255

  analogWrite(ledPin, brightness);  // PWM control LED

  Serial.print("Sensor: ");
  Serial.print(sensorValue);
  Serial.print(" | Brightness: ");
  Serial.println(brightness);

  delay(100);
}`,
      explanation: "This code reads the potentiometer value and maps it to LED brightness using PWM. The map() function converts the 0-1023 range to 0-255 for analogWrite(). Values are printed to Serial Monitor for debugging.",
    },
    advancedUsage: "Potentiometers can control motor speed, servo position, audio volume, LED brightness, adjust thresholds for sensors, or set timer delays. They're excellent for creating adjustable parameters without changing code.",
    troubleshooting: [
      { issue: "Noisy readings", solution: "Add smoothing in code or 0.1µF capacitor between wiper and GND" },
      { issue: "Limited range", solution: "Check 5V and GND connections to outer pins" },
      { issue: "Scratchy operation", solution: "Clean or replace potentiometer, add code filtering" },
    ],
  },
  {
    id: "ultrasonic",
    title: "Ultrasonic Sensor (HC-SR04)",
    category: "Sensors",
    description: "The HC-SR04 ultrasonic sensor measures distance by emitting ultrasonic waves and timing their echo return. It's perfect for obstacle detection and distance measurement.",
    image: ultrasonicImage,
    specs: [
      { label: "Range", value: "2cm to 400cm" },
      { label: "Accuracy", value: "±3mm" },
      { label: "Angle", value: "15 degrees" },
      { label: "Frequency", value: "40 kHz" },
      { label: "Voltage", value: "5V" },
      { label: "Current", value: "15mA" },
    ],
    howItWorks: "The sensor has two cylinders: a transmitter and receiver. When triggered, it sends out 8 ultrasonic pulses at 40kHz. If an object reflects these waves back, the receiver detects them. By measuring the time between transmission and reception, you can calculate distance using the speed of sound (343 m/s).",
    pinLayout: [
      { pin: "VCC", function: "Connect to 5V power" },
      { pin: "Trig", function: "Trigger pin - send 10µs HIGH pulse to start measurement" },
      { pin: "Echo", function: "Echo pin - outputs HIGH pulse proportional to distance" },
      { pin: "GND", function: "Connect to ground" },
    ],
    codeExample: {
      title: "Distance Measurement",
      code: `const int trigPin = 9;
const int echoPin = 10;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.begin(9600);
}

void loop() {
  // Send 10µs trigger pulse
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Measure echo pulse duration
  long duration = pulseIn(echoPin, HIGH);

  // Calculate distance in cm
  // Speed of sound: 343m/s = 0.0343 cm/µs
  // Distance = (duration/2) * 0.0343
  float distance = (duration * 0.0343) / 2;

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  delay(100);
}`,
      explanation: "This code triggers the sensor by sending a 10 microsecond pulse to the Trig pin. The pulseIn() function measures how long the Echo pin stays HIGH, which is proportional to distance. We divide by 2 because the sound travels to the object and back.",
    },
    advancedUsage: "Use ultrasonic sensors for parking assistance, robot obstacle avoidance, liquid level monitoring, people counting, or automatic door openers. Multiple sensors can map environments or create virtual walls.",
    troubleshooting: [
      { issue: "Inconsistent readings", solution: "Ensure object is within range and angle, avoid soft/angled surfaces" },
      { issue: "Always returns maximum", solution: "Check wiring, especially Echo and Trig pins" },
      { issue: "Interference between sensors", solution: "Space sensors apart or trigger them alternately with delays" },
    ],
  },
  {
    id: "servo",
    title: "Servo Motor",
    category: "Actuators",
    description: "Servo motors provide precise angular position control, typically rotating 0-180 degrees. They're perfect for robotics, mechanical movements, and automation.",
    image: servoImage,
    specs: [
      { label: "Rotation", value: "0-180 degrees" },
      { label: "Operating Voltage", value: "4.8-6V" },
      { label: "Torque", value: "1.5-2 kg·cm" },
      { label: "Speed", value: "0.1s/60° typical" },
      { label: "Current", value: "100-500mA" },
    ],
    howItWorks: "Servo motors contain a motor, gearbox, potentiometer, and control circuit. They use PWM signals to set position - a 1ms pulse moves to 0°, 1.5ms to 90°, and 2ms to 180°. The internal potentiometer provides feedback so the servo automatically corrects its position. For high-torque servos, use external power supply.",
    pinLayout: [
      { pin: "Brown/Black", function: "Ground (GND)" },
      { pin: "Red", function: "Power (5V) - use external supply for heavy loads" },
      { pin: "Orange/Yellow", function: "Signal - connect to Arduino PWM pin" },
    ],
    codeExample: {
      title: "Servo Position Control",
      code: `#include <Servo.h>

Servo myServo;  // Create servo object
const int servoPin = 9;

void setup() {
  myServo.attach(servoPin);  // Attach servo to pin 9
  Serial.begin(9600);
}

void loop() {
  // Sweep from 0 to 180 degrees
  for (int pos = 0; pos <= 180; pos++) {
    myServo.write(pos);
    delay(15);
  }

  // Sweep back from 180 to 0
  for (int pos = 180; pos >= 0; pos--) {
    myServo.write(pos);
    delay(15);
  }
}`,
      explanation: "This code uses the Servo library to control servo position. The attach() method connects the servo to pin 9, and write() sets the angle. This example creates a smooth sweeping motion from 0 to 180 degrees and back.",
    },
    advancedUsage: "Servos can create robotic arms, pan-tilt camera mounts, door locks, steering mechanisms, flight control surfaces, or automated feeders. Use multiple servos together for complex movements, and control them with potentiometers, sensors, or remote control.",
    troubleshooting: [
      { issue: "Servo jitters or vibrates", solution: "Use external 5V power supply, add capacitor across power lines" },
      { issue: "Limited movement range", solution: "Adjust min/max pulse width with servo.attach(pin, min, max)" },
      { issue: "Arduino resets when servo moves", solution: "Servo draws too much current - use separate power supply" },
    ],
  },
  {
    id: "esp32",
    title: "ESP32 Development Board",
    category: "Other Microcontrollers",
    description: "The ESP32 is a powerful, low-cost microcontroller with built-in WiFi and Bluetooth. It's perfect for IoT projects and wireless communication applications.",
    image: esp32Image,
    specs: [
      { label: "Processor", value: "Dual-core Xtensa 32-bit" },
      { label: "Clock Speed", value: "Up to 240 MHz" },
      { label: "WiFi", value: "802.11 b/g/n (2.4 GHz)" },
      { label: "Bluetooth", value: "v4.2 BR/EDR and BLE" },
      { label: "Flash Memory", value: "4 MB typical" },
      { label: "GPIO Pins", value: "34 (some input-only)" },
    ],
    howItWorks: "The ESP32 is a System-on-Chip (SoC) that combines a powerful microprocessor with wireless connectivity. It can be programmed using the Arduino IDE with the ESP32 board package installed. The dual-core architecture allows running WiFi tasks on one core while your application runs on the other, ensuring smooth operation.",
    pinLayout: [
      { pin: "GPIO 0-39", function: "General purpose I/O pins, some support ADC, DAC, touch sensing" },
      { pin: "3.3V", function: "Power output - ESP32 operates at 3.3V logic" },
      { pin: "5V / VIN", function: "Power input from USB or external supply" },
      { pin: "GND", function: "Ground pins" },
      { pin: "EN", function: "Enable pin - pull HIGH to run, LOW to reset" },
    ],
    codeExample: {
      title: "WiFi Connection Example",
      code: `#include <WiFi.h>

const char* ssid = "YourNetworkName";
const char* password = "YourPassword";

void setup() {
  Serial.begin(115200);

  // Connect to WiFi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\\nConnected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Your WiFi-enabled code here
}`,
      explanation: "This code connects the ESP32 to a WiFi network. Once connected, the board can communicate over the internet, host web servers, or send data to cloud services. The WiFi.localIP() function displays the assigned IP address.",
    },
    advancedUsage: "ESP32 can create web servers, MQTT clients for IoT, Bluetooth Low Energy devices, WiFi access points, mesh networks, and real-time data logging to cloud services. The dual-core processor enables complex multitasking and the built-in cryptographic hardware acceleration ensures secure communications.",
    troubleshooting: [
      { issue: "Won't connect to WiFi", solution: "Check SSID and password, ensure 2.4GHz network (ESP32 doesn't support 5GHz)" },
      { issue: "Brown-out detector errors", solution: "Use quality USB cable and power supply with sufficient current (500mA+)" },
      { issue: "GPIO pins not working", solution: "Some pins are input-only or used for flash - check pinout diagram" },
    ],
  },
  {
    id: "esp8266",
    title: "ESP8266 NodeMCU",
    category: "Other Microcontrollers",
    description: "The ESP8266 is a low-cost WiFi microchip that revolutionized IoT development. The NodeMCU board makes it easy to use with built-in USB and voltage regulation.",
    image: esp8266Image,
    specs: [
      { label: "Processor", value: "Tensilica L106 32-bit" },
      { label: "Clock Speed", value: "80/160 MHz" },
      { label: "WiFi", value: "802.11 b/g/n (2.4 GHz)" },
      { label: "Flash Memory", value: "4 MB" },
      { label: "GPIO Pins", value: "11 usable pins" },
      { label: "Operating Voltage", value: "3.3V" },
    ],
    howItWorks: "The ESP8266 integrates a complete WiFi networking solution on a single chip. Programs run on the main processor while WiFi operations are handled by built-in firmware. It can operate in Station mode (connects to WiFi), Access Point mode (creates WiFi network), or both simultaneously.",
    pinLayout: [
      { pin: "D0-D8", function: "Digital GPIO pins mapped to ESP8266 GPIO" },
      { pin: "A0", function: "Single analog input (0-3.3V, 10-bit ADC)" },
      { pin: "3V3", function: "3.3V power output (limited current)" },
      { pin: "VIN", function: "5V input from USB" },
      { pin: "GND", function: "Ground" },
    ],
    codeExample: {
      title: "Simple Web Server",
      code: `#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

const char* ssid = "YourNetwork";
const char* password = "YourPassword";

ESP8266WebServer server(80);

void handleRoot() {
  server.send(200, "text/html", 
    "<h1>ESP8266 Web Server</h1><p>Hello from NodeMCU!</p>");
}

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }

  server.on("/", handleRoot);
  server.begin();
  Serial.println("Server started");
}

void loop() {
  server.handleClient();
}`,
      explanation: "This creates a simple web server on the ESP8266. When you visit the board's IP address in a browser, it displays an HTML page. The server.handleClient() in loop() processes incoming web requests.",
    },
    advancedUsage: "ESP8266 excels at IoT applications: smart home devices, weather stations, sensor networks, web-based control panels, and MQTT integration. Despite fewer pins than ESP32, it's perfect for WiFi-enabled projects where Bluetooth isn't needed.",
    troubleshooting: [
      { issue: "Upload fails", solution: "Hold FLASH button during upload, or check if GPIO 0 is pulled low during boot" },
      { issue: "Constant resets", solution: "Power supply issue - use external 3.3V regulator with adequate current" },
      { issue: "WiFi disconnects randomly", solution: "Add WiFi.setSleepMode(WIFI_NONE_SLEEP) to prevent power saving" },
    ],
  },
  {
    id: "raspberry-pi-pico",
    title: "Raspberry Pi Pico",
    category: "Other Microcontrollers",
    description: "The Raspberry Pi Pico features the RP2040 chip, a custom dual-core ARM processor. It offers excellent performance at a very low price point.",
    image: picoImage,
    specs: [
      { label: "Processor", value: "Dual ARM Cortex-M0+" },
      { label: "Clock Speed", value: "133 MHz (up to 250 MHz)" },
      { label: "RAM", value: "264 KB SRAM" },
      { label: "Flash", value: "2 MB onboard" },
      { label: "GPIO Pins", value: "26 multi-function" },
      { label: "ADC", value: "3 channels, 12-bit" },
    ],
    howItWorks: "The RP2040 features two Cortex-M0+ cores that can run independently or together. Unique Programmable I/O (PIO) state machines allow custom hardware interfaces without CPU overhead. It can be programmed in C/C++, MicroPython, or CircuitPython, making it versatile for different skill levels.",
    pinLayout: [
      { pin: "GP0-GP28", function: "General purpose I/O pins with multiple functions" },
      { pin: "ADC0-ADC2", function: "Analog inputs on GP26, GP27, GP28" },
      { pin: "VSYS", function: "Main system power input (1.8-5.5V)" },
      { pin: "3V3", function: "3.3V power output from onboard regulator" },
      { pin: "GND", function: "Ground pins" },
    ],
    codeExample: {
      title: "Dual Core Blink (Arduino)",
      code: `// Core 0 code (setup runs on core 0)
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(25, OUTPUT);  // Use another pin
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);
}

// Core 1 code
void setup1() {
  // Runs once on core 1
}

void loop1() {
  digitalWrite(25, HIGH);
  delay(250);
  digitalWrite(25, LOW);
  delay(250);
}`,
      explanation: "The Pico's dual-core architecture allows setup1() and loop1() to run independently on the second core. This example blinks two LEDs at different rates simultaneously without timing conflicts.",
    },
    advancedUsage: "The Pico excels at high-speed I/O, audio processing, motor control with PIO state machines, USB device emulation, and multi-core applications. PIO can implement custom protocols like WS2812 LED control or UART at any baud rate without CPU overhead.",
    troubleshooting: [
      { issue: "Not recognized by computer", solution: "Hold BOOTSEL button while plugging in USB to enter bootloader mode" },
      { issue: "Code won't upload", solution: "Install board support in Arduino IDE or use Thonny for MicroPython" },
      { issue: "Pin not working as expected", solution: "Check if pin has special boot function or is reserved for flash" },
    ],
  },
  {
    id: "stm32",
    title: "STM32 Development Board",
    category: "Other Microcontrollers",
    description: "STM32 boards use ARM Cortex-M processors and offer professional-grade performance. They're widely used in commercial products and industrial applications.",
    image: stm32Image,
    specs: [
      { label: "Processor", value: "ARM Cortex-M3/M4/M7" },
      { label: "Clock Speed", value: "72-480 MHz (model dependent)" },
      { label: "Flash Memory", value: "64 KB - 2 MB" },
      { label: "RAM", value: "20 KB - 512 KB" },
      { label: "Peripherals", value: "CAN, USB, DAC, DMA, Timers" },
      { label: "Operating Voltage", value: "3.3V (5V tolerant I/O)" },
    ],
    howItWorks: "STM32 microcontrollers are based on ARM Cortex-M architecture, offering excellent performance and power efficiency. They include advanced peripherals like hardware floating-point units, DMA controllers, and multiple communication interfaces. Programming can be done with STM32CubeIDE, Arduino IDE (with STM32 core), or platform-specific tools.",
    pinLayout: [
      { pin: "PA0-PC15", function: "GPIO pins organized in ports (varies by model)" },
      { pin: "3.3V", function: "Main operating voltage" },
      { pin: "5V", function: "Available when powered via USB" },
      { pin: "GND", function: "Ground pins" },
      { pin: "BOOT0", function: "Boot mode selection pin" },
    ],
    codeExample: {
      title: "Arduino Core Example",
      code: `// Install STM32 board support in Arduino IDE first
// Tools > Board > STM32 Boards

void setup() {
  Serial.begin(115200);
  pinMode(PC13, OUTPUT);  // Built-in LED on many STM32 boards
}

void loop() {
  digitalWrite(PC13, HIGH);
  Serial.println("LED ON");
  delay(1000);

  digitalWrite(PC13, LOW);
  Serial.println("LED OFF");
  delay(1000);
}`,
      explanation: "This basic example works with Arduino IDE after installing STM32 board support. Pin naming follows port notation (PA0, PB1, PC13, etc.). Many STM32 boards have the built-in LED on PC13.",
    },
    advancedUsage: "STM32 boards are ideal for high-performance applications: motor control with PWM and encoders, real-time data acquisition, CAN bus automotive applications, professional audio processing, and battery-powered devices requiring sleep modes. Hardware floating-point support accelerates complex calculations.",
    troubleshooting: [
      { issue: "Can't upload code", solution: "Set BOOT0 jumper to 1, reset board, upload, then set BOOT0 back to 0" },
      { issue: "USB not working", solution: "Some boards require USB drivers - install STM32 VCP drivers" },
      { issue: "Wrong board variant", solution: "Select exact board model in Arduino IDE - different STM32s have different peripherals" },
    ],
  },
  {
    id: "teensy",
    title: "Teensy 4.0/4.1",
    category: "Other Microcontrollers",
    description: "Teensy boards are high-performance, Arduino-compatible microcontrollers. They're compact, powerful, and popular for audio and USB HID projects.",
    image: teensyImage,
    specs: [
      { label: "Processor", value: "ARM Cortex-M7 (600 MHz)" },
      { label: "Flash Memory", value: "2 MB (4.0) / 8 MB (4.1)" },
      { label: "RAM", value: "1 MB" },
      { label: "GPIO Pins", value: "40 (4.0) / 55 (4.1)" },
      { label: "USB", value: "Full/High Speed USB" },
      { label: "Special Features", value: "Audio library, Crypto" },
    ],
    howItWorks: "Teensy boards run at 600 MHz - faster than most hobbyist microcontrollers. They use the Teensyduino add-on for Arduino IDE, which adds Teensy-optimized libraries and USB capabilities. The hardware design allows it to appear as various USB devices: keyboard, mouse, MIDI controller, or serial device.",
    pinLayout: [
      { pin: "0-39 (4.0)", function: "Digital I/O pins, many with special functions" },
      { pin: "A0-A13", function: "Analog inputs, 12-bit ADC" },
      { pin: "VIN", function: "5V input power" },
      { pin: "3.3V", function: "3.3V regulated output" },
      { pin: "GND", function: "Ground pins" },
      { pin: "VUSB", function: "USB 5V power" },
    ],
    codeExample: {
      title: "USB Keyboard Emulation",
      code: `// Teensy can act as a USB keyboard!

const int buttonPin = 2;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  delay(1000);  // Wait for USB to initialize
}

void loop() {
  if (digitalRead(buttonPin) == LOW) {
    // Send keypress when button pressed
    Keyboard.print("Hello from Teensy!");
    Keyboard.println();

    delay(1000);  // Debounce
  }
}`,
      explanation: "Teensy's native USB capability allows it to emulate HID devices. This code makes the Teensy appear as a keyboard to the computer. When the button is pressed, it types text automatically - great for automation or accessibility devices.",
    },
    advancedUsage: "Teensy excels at USB projects: MIDI controllers, custom keyboards, game controllers, and audio synthesis. The Audio library enables real-time DSP without coding complex algorithms. High speed makes it perfect for LED strips (WS2812), high-speed sensors, and data logging.",
    troubleshooting: [
      { issue: "USB not detected", solution: "Install Teensy Loader application and drivers from PJRC website" },
      { issue: "Upload button doesn't appear", solution: "Press physical button on Teensy board to enter programming mode" },
      { issue: "Audio library issues", solution: "Use Audio System Design Tool to generate proper object connections" },
    ],
  },
];
