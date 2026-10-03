// Edit project descriptions and galleries here. Image paths are relative to index.html.
window.portfolioProjects = {
  'iote-website': {
    title: 'IoTE Website',
    meta: 'Web development · 2026',
    summary: 'A demo website for the IoT and Information Engineering department, designed to work across mobile, tablet, and desktop screens.',
    points: [
      'Designed responsive frontend layouts with HTML, CSS, Flexbox, and Grid.',
      'Built interactive interfaces for department pages and a Q&A discussion area.',
      'Connected frontend views to PHP and JavaScript backend APIs to display content asynchronously.'
    ],
    tools: ['HTML', 'CSS', 'JavaScript', 'REST APIs', 'PHP integration'],
    images: []
  },
  'easy-park': {
    title: 'Easy Park',
    meta: 'IoT & computer vision · 2025',
    summary: 'An automated parking payment and gate control prototype that combines a Raspberry Pi, camera, sensors, and license plate recognition.',
    points: [
      'Used pre-trained YOLO models and Tesseract OCR to detect and read license plates.',
      'Calculated parking duration and fees from vehicle entry and exit times.',
      'Controlled a servo gate based on recognition and payment results.'
    ],
    tools: ['Raspberry Pi 4', 'Python', 'Camera', 'Ultrasonic sensor', 'YOLO', 'Tesseract OCR'],
    images: [
      { src: 'assets/images/easy-park.webp', alt: 'Easy Park license plate recognition interface', caption: 'License plate recognition interface' },
      { src: 'assets/images/easy-park-prototype.webp', alt: 'Physical Easy Park parking gate prototype', caption: 'Parking gate prototype' },
      { src: 'assets/images/easy-park-controller.webp', alt: 'Easy Park controller with display and indicator lights', caption: 'Controller hardware' }
    ]
  },
  'digital-twin': {
    title: 'KMITL Digital Twin',
    meta: '3D modeling · 2025–present · In progress',
    summary: 'An early-stage 3D campus model that lays the groundwork for a future digital twin of KMITL.',
    points: [
      'Created building geometry and terrain using Blender and BlenderGIS with map data.',
      'Organized the model as a foundation for future data integration.',
      'ESP32 water-level data and interactive visualization are planned and have not yet been implemented.'
    ],
    tools: ['Blender', 'BlenderGIS', '3D modeling', 'Map data'],
    images: [
      { src: 'assets/images/digital-twin.webp', alt: 'Perspective view of the KMITL campus model in Blender', caption: 'Campus model in Blender' },
      { src: 'assets/images/digital-twin-top-view.webp', alt: 'Top view of the KMITL campus model', caption: 'Top view of the model' }
    ]
  },
  'smart-parking': {
    title: 'Smart Parking System',
    meta: 'IoT prototype · 2024',
    summary: 'A parking monitoring prototype that checks vehicle positioning in real time and alerts users when a car crosses parking lines.',
    points: [
      'Combined Arduino R4 WiFi, ultrasonic sensors, an OLED display, and LED indicators.',
      'Detected improper parking positions from sensor readings.',
      'Sent real-time notifications through Blynk and LINE Notify, with Node-RED used for IoT data flows.'
    ],
    tools: ['Arduino R4 WiFi', 'Ultrasonic sensors', 'OLED', 'Node-RED', 'Blynk', 'LINE Notify'],
    images: [
      { src: 'assets/images/smart-parking.webp', alt: 'Physical smart parking monitoring prototype', caption: 'Physical parking prototype' },
      { src: 'assets/images/smart-parking-dashboard.webp', alt: 'Smart parking monitoring and notification screen', caption: 'Monitoring and notifications' }
    ]
  },
  'appliance-scheduler': {
    title: 'Appliance Scheduler',
    meta: 'Embedded system · 2025',
    summary: 'A time-based appliance controller that switches an electrical device on and off according to a schedule set on the hardware itself.',
    points: [
      'Used an ESP32, RTC module, relay, and LCD display for scheduled control.',
      'Built a button-based interface to configure time schedules directly on the device.',
      'Practiced embedded programming, timing logic, and relay-based power control.'
    ],
    tools: ['ESP32', 'RTC module', 'Relay', 'LCD', 'C / C++'],
    images: [
      { src: 'assets/images/timer-controller.webp', alt: 'ESP32 appliance scheduling controller with LCD and buttons', caption: 'Finished scheduling controller' }
    ]
  }
};
