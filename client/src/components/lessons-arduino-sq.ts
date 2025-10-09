// Arduino Microprocessors Starter Kit - 8 comprehensive lessons
// Beginner-friendly with code examples, wiring diagrams, and interactive visuals
// line 218

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
    title: "Rreth Arduino Uno", 
    completed: false,
    wiringImage: arduinoBoardImg,
    playgroundCode: `// Arduino Uno - LED Blink Example
// This is your first Arduino program!

void setup() {
  // Initialize the LED pin as an output
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // Ndez LED-in
  delay(1000);                       // Prit një sekondë
  digitalWrite(LED_BUILTIN, LOW);    // Fike LED-in
  delay(1000);                       // Prit një sekondë
}`,
    content: {
      title: "Rreth Arduino Uno",
      description: "Mirë se vini në Arduino! Në këtë kurs ju do të mësoni për Arduino Uno, kuptoni përbërësit e tij dhe shkruani programin tuaj të parë. Arduino e bën robotikën argëtuese dhe të lehtë! 🤖",
      sections: [
        {
          title: "Çfarë është Arduino?",
          content: "Arduino është një **mikrokontroller** që e bën elektronikën dhe programimin të aksesueshëm për të gjithë!\\n\\n**Pika kryesore:**\\n• Kompjuter i vogël që mund ta programoni\\n• 14 kunja hyrëse/dalëse dixhitale\\n• 6 kunja hyrëse analoge\\n• Lidhje USB për programim\\n• Tension operativ 5V\\n• I përsosur për të mësuar elektronikën!\\n\\nMendojeni si një tru të vogël që mund të kontrollojë dritat, motorët, sensorët dhe më shumë!"
        },
        {
          title: "Komponentët e Tabeles Arduino",
          content: "**Pjesë kryesore të Arduino Uno:**\\n\\n• **Port USB**: Lidhuni me kompjuterin tuaj për programim\\n• **File elektrike**: Furnizimi me energji të jashtme 7-12V\\n• **Kinjat dixhitale (0-13)**: lexoni/shkruani sinjalet e LARTË ose TË ULËT\\n• **Kinat e sensorit analog të leximit 5:*0 (0-1023)\\n• **Kinjat GND**: Lidhjet në tokë (0V)\\n• **Kinjat 5V dhe 3.3V**: Kunjat e furnizimit me energji elektrike\\n• **Butoni i rivendosjes**: Rinis programin\\n• **LED_BUILTIN**: LED i integruar në pinin 13"
        },
        {
          title: "Bazat e programimit Arduino",
          content: "Arduino përdor një gjuhë të ngjashme me C/C++. Çdo program ka dy funksione kryesore:\\n\\n**setup()**: Ekzekutohet një herë kur fillon Arduino\\n```cpp\\nvoid setup() {\\n // Inicializoni kunjat, sensorët, etj.\\n pinMode(13, OUTPUT);\\n}\\n```\*lop\n përgjithmonë\\n```cpp\\nvoid loop() {\\n // Kodi juaj kryesor i programit\\n digitalWrite(13, LARTË);\\n vonesë (1000);\\n}\\n```"
        },
        {
          title: "Provoje! 💡",
          content: "Në shesh lojërash me kod, do të shihni një program të thjeshtë ndezjeje LED:\\n\\n1. **pinMode()**: Vendos pinin 13 si OUTPUT\\n2. **DixhitalWrite()**: Ndez LED (LARTË) ose FIK (TË ULËT)\\n3. **delay()**: Pret për milisekonda të specifikuara\\n\\n**Eksperiment:**\\n• Ndrysho vonesën(1000) në vonesë(500) për pulsime më të shpejta\\n• Provoni vonesën(100) për pulsime shumë të shpejta\\n• Përdorni vlera të ndryshme të vonesës për pulsimin e lartë\n\n Ky program është i thjeshtë për të gjitha LINO dhe LOW projekte!"
        }
      ]
    }
  },
  { 
    id: 2, 
    title: "LED Blink - Programi juaj i parë Arduino", 
    completed: false,
    wiringImage: ledWiringImg,
    playgroundCode: `// External LED on Pin 8
// Wiring: LED long leg → Pin 8, short leg → 220Ω resistor → GND

int ledPin = 8;  // LED connected to pin 8

void setup() {
  pinMode(ledPin, OUTPUT);  // Set pin 8 as output
}

void loop() {
  digitalWrite(ledPin, HIGH);  // Ndez LED-in
  delay(500);                  // Pret 0.5 sekonda
  digitalWrite(ledPin, LOW);   // LED-i fiket
  delay(500);                  // Pret 0.5 sekonda
}

// Try changing the pin number or delay times!`,
    content: {
      title: "LED Blink - Programi juaj i parë Arduino",
      description: "Ndërtoni qarkun tuaj të parë! Mësoni se si të lidhni një LED me Arduino dhe ta kontrolloni atë me kod. Kjo është ajo ku hardueri takohet me softuerin! 💡",
      sections: [
        {
          title: "Komponentët që ju nevojiten",
          content: "**Lista e pjesëve:**\\n• Pllaka Arduino Uno\\n• 1 LED (çfarëdo ngjyre)\\n• 1 rezistencë (220Ω - 330 Ω)\\n• Telat kërcyes\\n• Pllaka e bukës (opsionale)\\n\\n**Bazat LED:**\\n• LED-et kanë dy këmbë të gjata dhe kat:** (-)** këmbë e shkurtër\\n• Përdorni gjithmonë një rezistencë për të parandaluar djegien e LED-it\\n• Rryma rrjedh nga anoda në katodë"
        },
        {
          title: "Kablazimi i Qarkut me LED",
          content: " **Udhëzim Hap pas Hapi për Kablazimin:**\\n\\n1. **Këmba e gjatë e LED-it (anodë)** → Lidhni me **Pin 8**\\n2. **Këmba e shkurtër e LED-it (katodë)** → Lidhni me **rezistor 220Ω**\\n3. **Tjetra e rezistorit** → Lidhni me **GND (Tokë)**\\n\\n**Pse rezistor?**\\nPinat e Arduino-s japin 5V, por LED-et zakonisht duhet vetëm 2–3V. Rezistori kufizon rrymën për të mbrojtur LED-in.\\n\\n**Këshillë**: LED-et e kuqe duan rreth ~2V, LED-et blu/ të bardha duan ~3V"
        },
        {
          title: "Kuptoje kodin",
          content: "**Zbërthimi i kodit:**\\n\\n```cpp\\nint ledPin = 8;  // Variabla ruan numrin e pinit\\n```\\nKrijon një variabël për të kujtuar se në cilin pin është ndezur LED\\n\\n```cpp\\npinMode(ledPin, OUTPUT);\\n```\\nI thotë Arduino se pini 8 do të dërgojë sinjale OUT\\n\\n````cpp\\  // 5V në pin\\nDixhitalWrite(ledPin, LOW);   // 0V në pin\\n```\\nLARTË = LED ON, LOW = LED OFF \\n\\n```cpp\\ndelay(500);  // Prisni 500 milisekonda\\n```\\nPuzë programin (1000ms = 1 sekondë)"
        },
        {
          title: "Eksperimente që mund të provosh! 🔬",
          content: "**Sfidoni veten:**\\n\\n1. **Kodi Morse**: Krijo model SOS (3 të shkurtra, 3 të gjata, 3 pulsime të shkurtra)\\n2. **Semafori**: Simuloni një sekuencë semafori\\n3. **Shumë LED**: Lidhni LED me kunjat 8, 9, 10 dhe bëni modele\\n4. **Rrahjet e zemrës**: Bëjë që LED të zbehet brenda dhe jashtë si një rrahje zemre\\n\\n**Zgjidhja e problemeve:**\\n• LED nuk ndizet? Kontrollo polaritetin (këmba e gjatë në gjilpërë)\\n• LED shumë i zbehtë? Kontrollo vlerën e rezistencës\\n• LED është djegur? E harrove rezistencën?"
        }
      ]
    }
  },
  { 
    id: 3, 
    title: "Kuptimi i hyrjeve dhe butonave dixhitalë", 
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
      title: "Kuptimi i hyrjeve dhe butonave digjitalë",
      description: "Bëje Arduino-n të ndërveprojë! Mëso si të lexosh shtypjet e butonit dhe të reagosh ndaj input-it të përdoruesit. Kjo hap shumë mundësi! 🎮",
      sections: [
        {
          title: "Hyrjet Digjitale të shpjeguara",
          content: "**INPUT vs OUTPUT:**\\n\\n• **OUTPUT**: Arduino dërgon sinjale (kontrollon LED, motorë)\n• **INPUT**: Arduino pranon sinjale (lexon butona, sensorë)\\n\\n**Shtetet Digjitale:**\\n• **HIGH**: 5V i zbuluar (butoni jo i shtypur me pullup)\\n• **LOW**: 0V i zbuluar (butoni i shtypur me pullup)\\n\\n**MODE INPUT_PULLUP:**\\nAktivizon rezistorin e brendshëm që tërheq pin-in në HIGH kur butoni nuk është i shtypur. Kur shtypet, pin lidhet me GND dhe lexon LOW."
        },
        {
          title: "Kablazimi i Butonit",
          content: "**Qark i thjeshtë me buton:**\\n\\n1. **Një terminal i butonit** → **Pin 2** në Arduino\n2. **Terminali tjetër i butonit** → **GND** (Tokë)\\n3. Përdor **INPUT_PULLUP** (nuk nevojitet rezistor i jashtëm!)\\n\\n**Si funksionon:**\\n• Butoni nuk shtypur: Pin 2 lexon HIGH (5V nga pullup-i i brendshëm)\\n• Butoni i shtypur: Pin 2 lidhet me GND dhe lexon LOW (0V)\\n\\n**Pse INPUT_PULLUP?**\\nE thjeshton kablazimin duke përdorur rezistorin e brendshëm të Arduino-s (~20kΩ)."
        },
        {
          title: "Leximi i Gjendjes së Butonit",
        "content": "**digitalRead() Function:**\\n\\n```cpp\\nint buttonState = digitalRead(buttonPin);\\n```\\n\\nKthen HIGH ose LOW bazuar në tensionin në pin.\\n\\n**Logjikë kushtore:**\\n\\n```cpp\\nif (buttonState == LOW) {\\n  // Butoni është i shtypur\\n  digitalWrite(ledPin, HIGH);\\n} else {\\n  digitalWrite(ledPin, LOW);\\n}\\n```\\n\\n**Serial Monitor:**\\n\\n```cpp\\nSerial.begin(9600);           // Fillon komunikimin\\nSerial.println(\"Button Pressed\");  // Printon mesazhin\\n```\\n\\nShiko mesazhet në Serial Monitor të Arduino IDE."
        },
        {
          title: "Projekte interaktive! 🎯",
        "content": "**Provoni këto ide:**\\n\\n1. **Toggle Switch**: Shtyp butonin për të ndezur LED, shtyp prapë për ta fikur\\n2. **Counter**: Numëro shtypjet e butonit dhe shfaq në Serial Monitor\n3. **Reaction Game**: LED ndizet rastësisht, shtyp butonin shpejt\\n4. **Dy Butona**: Përdor dy butona për të kontrolluar LED të ndryshme\\n5. **Long Press**: Veprime të ndryshme për shtypje të shkurtër dhe të gjatë\\n\\n**Këshillë për debouncing:**\\nButonat mund të japin sinjale të shpejta të shumta. Shto `delay(50)` ose përdor një bibliotekë debounce për lexime të pastra."
        }
      ]
    }
  },
  { 
    id: 4, 
    title: "Sensorët Analogë & Leximi i të Dhënave", 
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
      title: "Sensorët Analogë & Leximi i të Dhënave",
      description: "Lexo vlera të botës reale! Mëso për sensorët analogë, PWM dhe si të përpunosh të dhënat nga bota fizike. 📊",
      sections: [
        {
          title: "Analog vs Digjital",
          content: "**Digjital**: Vetëm dy shtete (HIGH/LOW, ON/OFF)\\n• Butona, çelësa\\n• Ose 0V ose 5V\n\n**Analog**: Gamë vlerash\n• Potenciometra, sensorë temperature, sensorë dritë\\n• Çdo tension midis 0V dhe 5V\\n• Arduino e lexon si numra 0-1023\\n\\n**Pinat Analog (A0-A5):**\\nArduino Uno ka 6 pin-a analog që matin tensionin me rezolucion 10-bit (1024 vlera)."
        },
        {
        "title": "Kablazimi i një Potenciometri",
          "content": "**Potenciometri (rezistor i ndryshueshëm):**\\nNjë buton rrotullues që ndryshon rezistencën.\\n\\n**Tre pinat:**\\n1. **Pin i majtë** → **5V** (fuqia)\\n2. **Pin i mesëm** → **A0** (hyrja analog)\\n3. **Pin i djathtë** → **GND** (tokë)\\n\\n**Si funksionon:**\\nRrotullimi ndryshon tensionin në pinin e mesëm nga 0V në 5V. Arduino e lexon këtë si vlerë 0-1023.\\n\\n**Këshillë**: Nëse vlerat janë të kthyera, thjesht këmbe lidhjet 5V dhe GND."
        },
        {
          "title": "Leximi i Vlerave Analog",
          "content": "**analogRead() Function:**\\n\\n```cpp\\nint sensorValue = analogRead(A0); // Kthen 0-1023 (rezolucion 10-bit)\\n```\\n\\n**PWM - analogWrite():**\\n\\n```cpp\nanalogWrite(ledPin, 128);  // 50% ndriçim (vlera 0-255)\n```\n\n**Mapimi i vlerave:**\\n\\n```cpp\\nbrightness = map(sensorValue, 0, 1023, 0, 255); // Konverton 0-1023 në 0-255\\n```\\n\\n**Pinat PWM:**\\nVetëm pinat 3, 5, 6, 9, 10, 11 përkrahin `analogWrite()` (shënuar me ~)."
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
    title: "Kontrollimi i Motorëve & Lëvizjes", 
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
