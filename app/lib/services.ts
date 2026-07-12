export interface ProcessStep {
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  sortOrder: number;
  iconName: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  featureDetails: { title: string; paragraphs: string[] }[];
  benefits: string[];
  image: string;
  imageAlt: string;
  gallery: string[];
  accent: string;
  gradient: string;
  glowColor: string;
  whyChoose: string[];
  processSteps: ProcessStep[];
  faqs: Faq[];
  stats: Stat[];
}

export const SERVICES: ServiceData[] = [
  {
    id: "electrical",
    slug: "electrical",
    sortOrder: 1,
    iconName: "Zap",
    title: "Electrical Installation",
    shortTitle: "Electrical",
    tagline: "Safe, code-compliant electrical solutions for every space",
    description:
      "Safe and professional electrical wiring, panel installation, maintenance, and power distribution solutions for residential and commercial properties.",
    longDescription:
      "From complete rewiring of older buildings to new electrical system design for modern constructions, our certified electricians deliver safe, code-compliant work every time. We handle panel upgrades, load balancing, surge protection, lighting design, and emergency electrical repairs with the utmost professionalism. Every installation is thoroughly tested and certified before handover.",
    features: [
      "Panel upgrades & replacements",
      "Full wiring & rewiring",
      "Power distribution systems",
      "Load management & balancing",
      "Surge protection installation",
      "Emergency electrical repairs",
    ],
    featureDetails: [
      {
        title: "Panel Upgrades & Replacements",
        paragraphs: [
          "Your electrical panel is the heart of your property's electrical system. We provide comprehensive panel upgrades and replacements to ensure your home or business can safely handle modern electrical loads. Our certified electricians assess your current panel capacity, recommend the appropriate upgrade path, and install new panels that meet current code requirements.",
          "We handle everything from 60-amp to 400-amp service upgrades, including main breaker replacements, sub-panel installations, and entire load center changeouts. Every installation is fully tested and certified before handover.",
        ],
      },
      {
        title: "Full Wiring & Rewiring",
        paragraphs: [
          "Whether you're building a new property or renovating an existing one, our full wiring and rewiring services ensure every outlet, switch, and fixture is safely and correctly installed. We follow strict wiring standards, using colour-coded cables, proper conduit routing, and secure terminations throughout.",
          "Our rewiring services are especially valuable for older buildings where outdated wiring poses fire and shock hazards. We completely strip and replace old, degraded wiring with modern, certified-grade cables that meet Nigerian electrical regulations.",
        ],
      },
      {
        title: "Power Distribution Systems",
        paragraphs: [
          "Efficient power distribution is critical for any property. We design and install distribution boards that evenly distribute power across circuits, preventing overloads and ensuring stable voltage throughout your building. Each distribution board is custom-configured based on your property's layout and power requirements.",
          "Our distribution solutions include three-phase power setups for commercial and industrial properties, with proper phase balancing to maximize efficiency. We also install dedicated circuits for heavy-load equipment like air conditioners, industrial machinery, and kitchen appliances.",
        ],
      },
      {
        title: "Load Management & Balancing",
        paragraphs: [
          "Improper load distribution can lead to frequent breaker trips, voltage fluctuations, and increased energy costs. Our load management service audits your entire electrical system, identifying circuits that are over- or under-loaded. We then rebalance the load across phases to optimize performance and longevity.",
          "For commercial properties, we implement intelligent load-shedding systems that automatically manage power distribution during peak demand, preventing blackouts and protecting sensitive equipment from damage caused by voltage instability.",
        ],
      },
      {
        title: "Surge Protection Installation",
        paragraphs: [
          "Power surges — from lightning strikes, grid switching, or heavy equipment startup — can destroy electronics and appliances in milliseconds. We install whole-property surge protection devices at your main panel that absorb and divert excess voltage before it reaches your sensitive equipment.",
          "For critical electronics such as servers, medical equipment, or home theatre systems, we also offer point-of-use surge protectors that provide an additional layer of defence. All installations include surge-rated breakers and proper grounding for maximum protection.",
        ],
      },
      {
        title: "Emergency Electrical Repairs",
        paragraphs: [
          "Electrical emergencies don't follow business hours. Our team provides 24/7 emergency callout services for issues such as complete power loss, sparking outlets, burning smells from panels, exposed live wires, and flooding-related electrical damage. We typically arrive within two hours of your call within Lagos.",
          "Our emergency response vehicles carry a full inventory of replacement parts, breakers, cables, and tools, allowing our electricians to resolve most issues in a single visit. We prioritize safety first, isolating hazards before proceeding with permanent repairs.",
        ],
      },
    ],
    benefits: [
      "100% code-compliant installations",
      "Certified & insured electricians",
      "Same-day emergency callouts",
      "Free site assessment & quotation",
    ],
    image: "/elect.png",
    imageAlt: "Professional electrical panel installation by certified electrician",
    gallery: ["/img1.jpeg", "/img6.png"],
    accent: "from-blue-500 to-blue-700",
    gradient: "from-blue-600 via-blue-700 to-blue-900",
    glowColor: "rgba(37,99,235,0.25)",
    whyChoose: [
      "Licensed electrical engineers with years of field experience",
      "Use of certified, grade-A materials for every job",
      "Transparent pricing with no hidden charges",
      "Full testing and certification after every installation",
    ],
    processSteps: [
      {
        title: "Site Assessment",
        description:
          "We visit your property to assess the current electrical system, understand your power needs, and identify potential upgrades or safety concerns.",
      },
      {
        title: "System Design & Quotation",
        description:
          "Our engineers design a tailored electrical solution with load calculations and circuit layouts, then provide a transparent, itemized quotation.",
      },
      {
        title: "Professional Installation",
        description:
          "Certified electricians carry out the installation using approved materials, following strict safety protocols and industry best practices.",
      },
      {
        title: "Testing & Handover",
        description:
          "Every circuit is tested for continuity, insulation resistance, and earth bonding. We issue a certificate of compliance upon completion.",
      },
    ],
    faqs: [
      {
        question: "How long does a full house rewiring take?",
        answer:
          "A typical 3-bedroom apartment rewiring takes 3–5 days. Larger properties or commercial spaces may take longer depending on complexity and scope of work.",
      },
      {
        question: "Do you provide certificates after installation?",
        answer:
          "Yes. Every installation is tested and certified in compliance with Nigerian electrical regulations. You receive a certificate of compliance for insurance and safety records.",
      },
      {
        question: "What brands of materials do you use?",
        answer:
          "We use only certified, grade-A materials from trusted brands such as Schneider Electric, Legrand, and equivalent approved alternatives.",
      },
    ],
    stats: [
      { value: "500+", label: "Projects Completed" },
      { value: "12+", label: "Years Experience" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "2hr", label: "Avg. Emergency Response" },
    ],
  },
  {
    id: "solar",
    slug: "solar",
    sortOrder: 2,
    iconName: "Sun",
    title: "Solar & Inverter Systems",
    shortTitle: "Solar",
    tagline: "Harness the sun for reliable, uninterrupted power",
    description:
      "Reliable solar energy and inverter backup systems engineered for maximum efficiency, designed for homes, businesses, and industrial facilities.",
    longDescription:
      "We design and install complete solar power systems tailored to your energy needs and budget. From rooftop solar panels to high-capacity inverter and battery storage solutions, our systems keep your lights on and appliances running — even during grid outages. We also offer energy monitoring so you can track your savings in real time. Our hybrid solutions seamlessly switch between solar, battery, and grid power.",
    features: [
      "Solar panel installation (roof & ground)",
      "Inverter backup systems",
      "Lithium & deep-cycle battery storage",
      "Hybrid solar solutions",
      "Energy monitoring & analytics",
      "Grid-tie & off-grid configurations",
    ],
    featureDetails: [
      {
        title: "Solar Panel Installation (Roof & Ground)",
        paragraphs: [
          "We install high-efficiency monocrystalline and polycrystalline solar panels on rooftops, carports, and ground-mounted structures. Every installation begins with a structural integrity check of your roof, followed by optimal panel positioning to maximize sun exposure throughout the day.",
          "Our mounting systems are weather-rated and designed to withstand Nigerian wind and rain conditions. We use corrosion-resistant aluminium frames and stainless-steel fasteners, with proper waterproofing at every penetration point to prevent leaks.",
        ],
      },
      {
        title: "Inverter Backup Systems",
        paragraphs: [
          "The inverter is the brain of your solar power system. We supply and install pure sine wave inverters that convert DC power from your solar panels and batteries into clean AC power for your home or business. Our inverters feature intelligent charging algorithms that extend battery life and maximize solar harvest.",
          "We offer a range of inverter capacities — from 1kVA for basic lighting and fan backup to 20kVA+ three-phase units for industrial applications. All installations include automatic transfer switching that seamlessly transitions between solar, battery, and grid power without interruption.",
        ],
      },
      {
        title: "Lithium & Deep-Cycle Battery Storage",
        paragraphs: [
          "Battery storage is what keeps your lights on after sunset. We install both lithium-ion and deep-cycle lead-acid battery banks depending on your budget and energy requirements. Lithium batteries offer deeper discharge cycles, longer lifespan, and lighter weight, making them ideal for daily-use systems.",
          "Our battery banks are configured to provide the right balance of capacity and discharge rate for your specific load profile. We include proper ventilation, temperature monitoring, and battery management systems to ensure safe operation and maximum cycle life.",
        ],
      },
      {
        title: "Hybrid Solar Solutions",
        paragraphs: [
          "Hybrid solar systems combine the best of grid-tied and off-grid configurations. They store excess solar energy in batteries for use during grid outages while also being able to export surplus power to the grid (where net metering is available). This gives you energy independence without sacrificing grid reliability.",
          "Our hybrid inverters intelligently manage power flow between solar panels, batteries, and the grid, automatically selecting the most cost-effective power source at any given moment. You can also program priority modes — for example, prioritizing battery storage during peak tariff hours.",
        ],
      },
      {
        title: "Energy Monitoring & Analytics",
        paragraphs: [
          "Knowledge is power — literally. Our energy monitoring solutions give you real-time visibility into your solar production, battery status, and consumption patterns via a smartphone app or web dashboard. You can track daily, weekly, and monthly generation statistics and see exactly how much you're saving on electricity.",
          "Advanced analytics help identify opportunities for further energy savings, such as shifting high-consumption activities to peak solar production hours. You'll receive alerts for system anomalies, low battery levels, or unexpected drops in panel output, enabling proactive maintenance.",
        ],
      },
      {
        title: "Grid-Tie & Off-Grid Configurations",
        paragraphs: [
          "Every property has unique energy needs, and we design systems to match. Grid-tied configurations allow you to run on solar during the day and draw from the grid at night, keeping your initial investment lower. Off-grid systems provide complete energy independence, relying solely on solar and battery storage without any utility connection.",
          "For maximum flexibility, we also design hybrid configurations that operate off-grid by default but can fall back to grid power when battery reserves run low. This approach is ideal for properties in areas with unreliable grid supply while ensuring you never experience a complete blackout.",
        ],
      },
    ],
    benefits: [
      "Significant reduction in electricity bills",
      "Uninterrupted power supply day & night",
      "10+ year lifespan on quality panels",
      "Low-maintenance, long-term investment",
    ],
    image: "/sola.png",
    imageAlt: "Solar panel installation on commercial building rooftop",
    gallery: ["/img2.png", "/img1.jpeg"],
    accent: "from-amber-500 to-orange-600",
    gradient: "from-amber-500 via-orange-600 to-red-700",
    glowColor: "rgba(245,158,11,0.25)",
    whyChoose: [
      "Custom-designed systems for your exact energy needs",
      "Premium panels and inverters from trusted brands",
      "Professional installation with structural integrity checks",
      "After-sales support and maintenance plans",
    ],
    processSteps: [
      {
        title: "Energy Audit",
        description:
          "We analyse your current electricity consumption, peak loads, and backup requirements to determine the ideal system size and configuration.",
      },
      {
        title: "System Design",
        description:
          "Our engineers design a solar + inverter solution optimized for your roof space, sun exposure, and budget — including panel layout and battery bank sizing.",
      },
      {
        title: "Installation & Commissioning",
        description:
          "We handle mounting, wiring, inverter setup, and battery connection with precision. The system is tested under load before commissioning.",
      },
      {
        title: "Monitoring & Support",
        description:
          "You get access to real-time energy monitoring and our after-sales support team is available for maintenance, troubleshooting, and system expansion.",
      },
    ],
    faqs: [
      {
        question: "How much can I save on electricity bills?",
        answer:
          "Savings depend on your system size and usage. Most residential clients see a 50–80% reduction in monthly bills. With full off-grid systems, you can eliminate electricity costs entirely.",
      },
      {
        question: "How long do solar batteries last?",
        answer:
          "Lithium-ion batteries typically last 8–12 years depending on usage and depth of discharge. Deep-cycle lead-acid options last 3–5 years and are more budget-friendly.",
      },
      {
        question: "Do your systems work during cloudy days?",
        answer:
          "Yes. Our systems store excess energy in batteries for use during cloudy weather or at night. Hybrid systems also seamlessly draw from the grid when needed.",
      },
    ],
    stats: [
      { value: "300+", label: "Solar Systems Installed" },
      { value: "10MW+", label: "Total Capacity Deployed" },
      { value: "60%+", label: "Avg. Bill Reduction" },
      { value: "5yr", label: "Warranty on Installation" },
    ],
  },
  {
    id: "cctv",
    slug: "cctv",
    sortOrder: 3,
    iconName: "Camera",
    title: "CCTV Installation",
    shortTitle: "CCTV",
    tagline: "See everything, miss nothing — 24/7 surveillance solutions",
    description:
      "Advanced HD surveillance systems for 24/7 monitoring, property protection, and safety — professionally installed and remotely accessible.",
    longDescription:
      "Protect what matters most with our professional CCTV installation services. We supply and install high-definition cameras, NVR/DVR recorders, and remote viewing systems that let you monitor your property from anywhere in the world. Our systems include night vision, motion detection, and cloud storage options for complete peace of mind. Every installation is discreet, vandal-resistant, and backed by ongoing support.",
    features: [
      "HD & 4K camera installation",
      "Night vision & thermal imaging",
      "Remote monitoring via smartphone",
      "Cloud & local storage solutions",
      "Motion detection & smart alerts",
      "Multi-camera system design",
    ],
    featureDetails: [
      {
        title: "HD & 4K Camera Installation",
        paragraphs: [
          "Crystal-clear video is the foundation of any effective surveillance system. We install high-definition cameras ranging from 1080p Full HD to ultra-sharp 4K resolution, ensuring you can clearly identify faces, licence plates, and critical details. Our cameras use advanced image sensors that deliver vibrant, accurate colours even in challenging lighting conditions.",
          "We offer both wired (PoE) and wireless camera options depending on your property layout and infrastructure. PoE cameras receive both power and data through a single Ethernet cable, simplifying installation and reducing cable clutter. All cameras are vandal-resistant with IK10-rated housings for outdoor deployment.",
        ],
      },
      {
        title: "Night Vision & Thermal Imaging",
        paragraphs: [
          "Crime doesn't stop when the sun goes down — and neither should your surveillance. All our cameras feature infrared (IR) night vision with ranges from 20 to 60 metres, providing clear black-and-white footage in complete darkness. For critical perimeter applications, we offer thermal imaging cameras that detect heat signatures rather than visible light.",
          "Our advanced cameras also feature Smart IR technology that automatically adjusts IR intensity to prevent overexposure of nearby objects while maintaining visibility of distant subjects. The result is a perfectly exposed image at any distance, day or night.",
        ],
      },
      {
        title: "Remote Monitoring via Smartphone",
        paragraphs: [
          "Keep an eye on your property from anywhere in the world. Our systems are configured for remote viewing through dedicated smartphone apps (iOS and Android) that give you live and recorded video access with just a few taps. You can view multiple cameras simultaneously, pan/tilt/zoom PTZ cameras remotely, and receive push notifications for motion events.",
          "The apps are designed for ease of use — no technical expertise required. We set up your account during installation, show you how to use the app, and provide ongoing support. Multi-user access allows you to grant viewing permissions to family members, security staff, or property managers.",
        ],
      },
      {
        title: "Cloud & Local Storage Solutions",
        paragraphs: [
          "Your footage is only valuable if it's stored securely. We offer a range of storage options to match your budget and recording duration needs. Local NVR (Network Video Recorder) systems store video on hard drives installed on-site, giving you full control over your data with no recurring fees.",
          "For added security, we also offer cloud storage solutions that automatically back up critical footage to secure remote servers. This ensures your recordings are safe even if the NVR is damaged, stolen, or tampered with. Hybrid configurations store continuously on local NVR while uploading motion-triggered events to the cloud.",
        ],
      },
      {
        title: "Motion Detection & Smart Alerts",
        paragraphs: [
          "Stop wasting hours reviewing footage with nothing happening. Our systems feature intelligent motion detection that can distinguish between people, vehicles, and animals — dramatically reducing false alerts from stray cats or blowing leaves. You can configure detection zones to monitor specific areas like doorways, gates, or parking bays while ignoring public walkways.",
          "When motion is detected in a configured zone, the system can send instant push alerts to your phone, trigger on-screen recording, activate floodlights or sirens, and even notify your security team. Time scheduling allows you to set different detection rules for business hours vs. after-hours.",
        ],
      },
      {
        title: "Multi-Camera System Design",
        paragraphs: [
          "Every property has unique security requirements, and one-size-fits-all approaches rarely work. We conduct a comprehensive site survey to identify blind spots, entry points, high-traffic areas, and valuables that need monitoring. Based on this assessment, we design a multi-camera system with optimal camera placement for complete coverage.",
          "Our designs incorporate a mix of camera types — dome cameras for discreet indoor monitoring, bullet cameras for long-range outdoor coverage, PTZ cameras for active surveillance, and fisheye cameras for 360-degree views of open areas. All cameras are integrated into a single NVR for unified management and viewing.",
        ],
      },
    ],
    benefits: [
      "24/7 surveillance with remote access",
      "Deters crime & provides evidence",
      "Scalable from 2 to 64+ cameras",
      "Professional-grade equipment",
    ],
    image: "/cctv.png",
    imageAlt: "CCTV security camera installation on commercial building",
    gallery: ["/img3.jpeg", "/img4.png"],
    accent: "from-indigo-500 to-blue-700",
    gradient: "from-indigo-600 via-blue-700 to-indigo-900",
    glowColor: "rgba(99,102,241,0.25)",
    whyChoose: [
      "Top-tier camera brands with crystal-clear imaging",
      "Seamless smartphone integration",
      "Discreet, vandal-proof installations",
      "End-to-end support from design to handover",
    ],
    processSteps: [
      {
        title: "Site Survey",
        description:
          "We survey your property to identify blind spots, entry points, high-traffic areas, and optimal camera positions for maximum coverage.",
      },
      {
        title: "System Proposal",
        description:
          "Based on the survey, we recommend the right camera types (dome, bullet, PTZ), resolution, storage capacity, and NVR configuration for your needs.",
      },
      {
        title: "Professional Installation",
        description:
          "Our technicians install cameras, route cables discreetly, configure the NVR, and set up remote viewing on your smartphone or computer.",
      },
      {
        title: "Training & Handover",
        description:
          "We show you how to use the system — live view, playback, recording schedules, and alerts — so you're fully in control from day one.",
      },
    ],
    faqs: [
      {
        question: "Can I view my cameras on my phone?",
        answer:
          "Absolutely. All our systems support remote viewing via smartphone app (iOS & Android). You can watch live feeds, review recordings, and receive motion alerts from anywhere.",
      },
      {
        question: "How long is video footage stored?",
        answer:
          "Storage depends on your hard drive size and recording settings. Typically 7–30 days for continuous recording, and longer for motion-triggered recording.",
      },
      {
        question: "Do your cameras work at night?",
        answer:
          "Yes. All our cameras feature infrared (IR) night vision for clear footage in complete darkness, with ranges from 20m to 60m depending on the model.",
      },
    ],
    stats: [
      { value: "2,000+", label: "Cameras Installed" },
      { value: "400+", label: "Sites Secured" },
      { value: "99.9%", label: "System Uptime" },
      { value: "24/7", label: "Remote Monitoring" },
    ],
  },
  {
    id: "access",
    slug: "access-control",
    sortOrder: 4,
    iconName: "ShieldCheck",
    title: "Access Control Systems",
    shortTitle: "Access Control",
    tagline: "Smart entry solutions for modern security management",
    description:
      "Modern smart access solutions including biometric readers, smart locks, card systems, and intelligent entry management for any environment.",
    longDescription:
      "Control who enters your premises with our cutting-edge access control systems. We install everything from biometric fingerprint and facial recognition readers to RFID card systems, smart locks, and video intercoms. Our solutions integrate with existing security infrastructure and provide detailed audit trails for complete accountability. From single doors to multi-building enterprises, we design systems that are secure, scalable, and user-friendly.",
    features: [
      "Biometric fingerprint & facial recognition",
      "RFID smart card & fob systems",
      "Video intercom & door phone",
      "Smart lock installation",
      "Centralised management software",
      "Audit trail & reporting",
    ],
    featureDetails: [
      {
        title: "Biometric Fingerprint & Facial Recognition",
        paragraphs: [
          "Biometric access control provides the highest level of security by using unique physical characteristics that cannot be lost, stolen, or shared. We install fingerprint readers that scan and match fingerprint minutiae in under a second, with high-resolution optical sensors that work even with dry, wet, or slightly worn fingers.",
          "For touchless entry — increasingly important in modern buildings — our facial recognition terminals use infrared and visible-light cameras to identify authorized personnel from up to 2 metres away. These systems work reliably in various lighting conditions and can identify individuals even when wearing glasses, masks, or hats.",
        ],
      },
      {
        title: "RFID Smart Card & Fob Systems",
        paragraphs: [
          "RFID (Radio-Frequency Identification) systems offer a cost-effective and user-friendly access control solution for businesses of all sizes. Employees simply present their card or fob to a reader to gain entry, with read ranges from 5cm for high-security proximity readers to several metres for parking gate access.",
          "We support multiple RFID frequencies and protocols including 125kHz low-frequency, 13.56MHz high-frequency (MIFARE), and UHF for long-range applications. Lost cards can be instantly deactivated in the management software without affecting other users, and replacement cards are programmed in minutes.",
        ],
      },
      {
        title: "Video Intercom & Door Phone",
        paragraphs: [
          "See and speak with visitors before granting access. Our video intercom systems combine high-definition cameras, two-way audio, and remote door release in one sleek unit. Visitors are displayed on indoor monitors or directly on your smartphone, allowing you to verify identity and unlock doors from anywhere with an internet connection.",
          "For multi-tenant buildings, we install directory-based systems where visitors search for residents and initiate calls directly. Each unit receives clear audio and video, with the ability to grant access or forward calls to a mobile phone when the resident is away from their unit.",
        ],
      },
      {
        title: "Smart Lock Installation",
        paragraphs: [
          "Smart locks bring modern convenience to residential and commercial doors. We install keyless electronic locks that support multiple entry methods — PIN codes, smartphone Bluetooth, biometric fingerprint, RFID cards, and traditional key override. Each lock maintains an internal audit log of every entry event.",
          "Our smart locks integrate with broader access control and home automation systems, allowing features like scheduled auto-locking, temporary guest codes with expiry times, and integration with alarm systems to automatically secure doors when the alarm is armed. All locks are grade-1 commercial rated for durability.",
        ],
      },
      {
        title: "Centralised Management Software",
        paragraphs: [
          "Managing access across multiple doors and hundreds of users requires powerful software. Our centralised management platforms give you complete control over who can enter which areas, at what times, and under what conditions. You can create user groups, assign schedules, set access levels, and generate reports — all from a single dashboard.",
          "The software supports advanced features like anti-passback (preventing card sharing), dual-authentication requirements for high-security areas, elevator floor control, and integration with HR systems for automatic user provisioning and de-provisioning. Cloud-based options allow remote management from anywhere.",
        ],
      },
      {
        title: "Audit Trail & Reporting",
        paragraphs: [
          "Complete accountability is essential for security and compliance. Every access event — grant, deny, forced entry, door held open — is logged with a timestamp, user identity, and door name. These audit trails provide invaluable evidence for security investigations, employee attendance tracking, and regulatory compliance reporting.",
          "Our reporting tools let you filter logs by user, door, time period, or event type, and export them in PDF, CSV, or Excel formats. Custom alerts can be configured for specific events such as after-hours access attempts, repeated failed credentials, or doors left ajar, with notifications sent via email or SMS.",
        ],
      },
    ],
    benefits: [
      "Keyless, touchless entry options",
      "Full audit trail of all entries",
      "Integrates with CCTV & alarm systems",
      "Scalable from single door to enterprise",
    ],
    image: "/smartaccess.png",
    imageAlt: "Smart biometric access control system on modern office door",
    gallery: ["/img4.png", "/img5.png"],
    accent: "from-blue-600 to-indigo-700",
    gradient: "from-blue-700 via-indigo-700 to-indigo-900",
    glowColor: "rgba(37,99,235,0.25)",
    whyChoose: [
      "Latest biometric and smart-lock technology",
      "Customizable access permissions per user",
      "Secure, encrypted communication protocols",
      "Ongoing maintenance and user management support",
    ],
    processSteps: [
      {
        title: "Security Assessment",
        description:
          "We evaluate your entry points, traffic flow, security level requirements, and integration needs with existing systems like CCTV and alarms.",
      },
      {
        title: "Solution Design",
        description:
          "We recommend the optimal mix of readers (biometric, card, PIN, or multi-factor), controllers, software, and door hardware for your environment.",
      },
      {
        title: "Installation & Configuration",
        description:
          "Our team installs door hardware, controllers, readers, and runs cabling. We then configure user permissions, schedules, and access policies in the management software.",
      },
      {
        title: "User Training & Support",
        description:
          "We train your team on managing users, reviewing audit logs, and troubleshooting. Ongoing support ensures your system operates smoothly as your organization grows.",
      },
    ],
    faqs: [
      {
        question: "Can I integrate access control with my existing CCTV system?",
        answer:
          "Yes. Our systems integrate seamlessly with most major CCTV and alarm platforms, allowing you to correlate access events with video footage for complete security visibility.",
      },
      {
        question: "What happens during a power outage?",
        answer:
          "All our access control systems include battery backup for the controllers. Electromagnetic locks are fail-safe (release on power loss) or fail-secure depending on your security needs.",
      },
      {
        question: "Can I manage access remotely?",
        answer:
          "Absolutely. Our management software and mobile apps allow you to grant or revoke access, unlock doors, view live audit trails, and manage users from anywhere with an internet connection.",
      },
    ],
    stats: [
      { value: "1,000+", label: "Doors Secured" },
      { value: "200+", label: "Organizations Served" },
      { value: "50K+", label: "Users Managed" },
      { value: "99.9%", label: "System Reliability" },
    ],
  },
  {
    id: "fire",
    slug: "fire-alarm",
    sortOrder: 5,
    iconName: "Flame",
    title: "Fire Alarm Systems",
    shortTitle: "Fire Alarm",
    tagline: "Early detection saves lives — intelligent fire safety systems",
    description:
      "Intelligent fire detection and alarm systems that safeguard lives and property in residential, commercial, and industrial environments.",
    longDescription:
      "Our fire alarm solutions provide early, accurate detection of smoke, heat, and fire, giving occupants the critical minutes needed to evacuate safely. We install addressable and conventional systems, complete with manual call points, sounders, visual alarms, and automatic sprinkler integration. All installations comply with Nigerian and international fire safety standards. We also offer regular testing, maintenance, and monitoring services to keep your system always ready.",
    features: [
      "Smoke & heat detection",
      "Addressable & conventional panels",
      "Manual call points & sounders",
      "Sprinkler system integration",
      "Emergency voice evacuation",
      "24/7 monitoring connectivity",
    ],
    featureDetails: [
      {
        title: "Smoke & Heat Detection",
        paragraphs: [
          "Early detection is the single most important factor in fire survival. We install a comprehensive range of detection devices including ionisation smoke detectors for fast-flaming fires, optical smoke detectors for slow-smouldering fires, and rate-of-rise heat detectors for areas where smoke detectors would cause nuisance alarms (kitchens, boiler rooms).",
          "Our multi-sensor detectors combine smoke, heat, and carbon monoxide sensing in one unit for the most reliable threat detection. Each detector's sensitivity can be individually configured through the control panel, and automatic drift compensation prevents false alarms as sensors accumulate dust over time.",
        ],
      },
      {
        title: "Addressable & Conventional Panels",
        paragraphs: [
          "The fire alarm control panel is the command centre of your life safety system. For smaller buildings, we install conventional panels that divide the premises into zones, with each zone's devices connected to a single circuit. When a device activates, the panel indicates which zone the alarm originated from, enabling quick response.",
          "For larger or more complex buildings, addressable panels offer pinpoint accuracy — every individual detector and device has its own unique address. The panel displays the exact device that triggered the alarm, including its location description. Addressable systems also provide pre-alarm warnings, device health monitoring, and significantly lower false alarm rates.",
        ],
      },
      {
        title: "Manual Call Points & Sounders",
        paragraphs: [
          "Manual call points (break-glass units) are a critical component of any fire alarm system, allowing occupants to manually trigger the alarm when they discover a fire. We install weatherproof call points at all designated exits, escape routes, and floor landings, clearly marked with the standard fire safety pictogram.",
          "Our alarm sounders include high-output electronic sirens, multi-tone sounders with different alert patterns for fire vs. other emergencies, and combined sounder-beacon units that provide both audible and visual alerting. Visual alarm devices (strobe lights) are installed in areas with high ambient noise or for occupants with hearing impairments.",
        ],
      },
      {
        title: "Sprinkler System Integration",
        paragraphs: [
          "For comprehensive fire protection, we integrate your fire alarm system with automatic sprinkler infrastructure. When sprinkler heads activate in response to heat, flow switches send a signal to the fire alarm panel, which can initiate the full evacuation sequence and simultaneously alert the fire brigade via the monitoring system.",
          "Our integration covers all major sprinkler system types — wet pipe, dry pipe, pre-action, and deluge — with proper zoning to ensure the panel accurately identifies the location of water flow. We also install tamper switches on all control valves to alert when the water supply has been shut off for maintenance.",
        ],
      },
      {
        title: "Emergency Voice Evacuation",
        paragraphs: [
          "In large or complex buildings, standard alarm sounders may not provide sufficient guidance for safe evacuation. Our voice evacuation systems broadcast clear, pre-recorded or live voice messages that direct occupants to the nearest exit, provide reassurance, and prevent panic. Messages can be customized per zone for staged or phased evacuation strategies.",
          "Voice evacuation systems also serve as public address systems for general announcements during non-emergency periods. In an emergency, the system automatically overrides all other audio to deliver priority evacuation instructions. Emergency microphones allow fire wardens or first responders to make live announcements throughout the building.",
        ],
      },
      {
        title: "24/7 Monitoring Connectivity",
        paragraphs: [
          "A fire alarm is only effective if someone responds when it activates. Our 24/7 monitoring solutions connect your fire alarm panel to a central monitoring station via redundant communication paths — cellular (4G/LTE), IP/ethernet, and/or dedicated telephone line. The monitoring station is staffed around the clock by trained operators who can dispatch the fire brigade within seconds.",
          "The monitoring service also tracks system health, alerting you and our service team to any faults, tamper events, or power issues before they compromise your safety. Weekly automated test calls verify the monitoring link is active, and comprehensive event logs are available for insurance and compliance purposes.",
        ],
      },
    ],
    benefits: [
      "Early warning saves lives & property",
      "Fully compliant with safety regulations",
      "Low false-alarm rates with smart sensing",
      "Integrated emergency response protocols",
    ],
    image: "/fire.png",
    imageAlt: "Fire alarm detection system on commercial building ceiling",
    gallery: ["/img5.png", "/img6.png"],
    accent: "from-blue-500 to-blue-800",
    gradient: "from-red-600 via-red-700 to-slate-900",
    glowColor: "rgba(220,38,38,0.25)",
    whyChoose: [
      "Certified fire alarm engineers",
      "Systems tailored to your building layout",
      "Integration with existing safety infrastructure",
      "Regular testing and maintenance contracts available",
    ],
    processSteps: [
      {
        title: "Risk Assessment",
        description:
          "We conduct a thorough fire risk assessment of your building, identifying fire hazards, escape routes, occupant profiles, and detection zone requirements.",
      },
      {
        title: "System Engineering",
        description:
          "Our engineers design a zoned detection and alarm system that meets regulatory standards, including device placement, panel location, and alarm routing.",
      },
      {
        title: "Installation & Commissioning",
        description:
          "We install all devices, panels, and wiring to manufacturer specifications, then commission and test every detector, sounder, and call point for correct operation.",
      },
      {
        title: "Maintenance & Monitoring",
        description:
          "We offer scheduled testing, inspection, and maintenance contracts. Optional 24/7 remote monitoring ensures the fire brigade is alerted immediately in an emergency.",
      },
    ],
    faqs: [
      {
        question: "What type of fire alarm system do I need?",
        answer:
          "It depends on your building size and occupancy. Conventional systems suit smaller buildings, while addressable systems are ideal for larger or multi-zone premises. We'll recommend the right type after a site assessment.",
      },
      {
        question: "How often should fire alarms be tested?",
        answer:
          "We recommend weekly visual inspections and quarterly professional testing. Annual full-system maintenance is required by fire safety regulations to ensure compliance.",
      },
      {
        question: "Do you offer monitoring services?",
        answer:
          "Yes. We offer 24/7 remote monitoring that alerts our response team and the fire service immediately when an alarm is triggered, ensuring rapid emergency response.",
      },
    ],
    stats: [
      { value: "200+", label: "Systems Installed" },
      { value: "5,000+", label: "Devices Deployed" },
      { value: "100%", label: "Code Compliance" },
      { value: "24hr", label: "Service Response" },
    ],
  },
  {
    id: "home-automation",
    slug: "home-automation",
    sortOrder: 6,
    iconName: "Home",
    title: "Home Automation & Smart Living",
    shortTitle: "Smart Home",
    tagline: "Intelligent homes that respond to your voice, touch, and presence",
    description:
      "Smart home automation solutions including voice control, fingerprint & facial recognition, automated lighting, smart security, and integrated appliance control for modern living.",
    longDescription:
      "Transform your home into an intelligent living space with our comprehensive home automation solutions. We design and install systems that let you control your entire home — lights, security, climate, entertainment, and appliances — through voice commands, smartphone apps, or automated schedules. Our smart home solutions integrate voice assistants, biometric access, facial recognition, motion sensors, and smart lighting to create a home that anticipates and responds to your needs. From a single-room setup to a fully automated smart home, we deliver seamless integration with professional installation and ongoing support.",
    features: [
      "Voice control & smart assistant integration",
      "Fingerprint & facial recognition entry",
      "Automated lighting schedules",
      "Smart security & motion detection",
      "Appliance & device automation",
      "Whole-home energy management",
    ],
    featureDetails: [
      {
        title: "Voice Control & Smart Assistant Integration",
        paragraphs: [
          "Control your entire home with natural voice commands. We integrate popular smart assistants like Amazon Alexa, Google Assistant, and voice control panels that let you adjust lighting, set temperatures, lock doors, play music, and more — just by speaking. Our systems understand Nigerian accents and work reliably even with ambient background noise.",
          "Voice control extends to every connected device in your home. You can create custom voice routines like 'Goodnight' which turns off all lights, locks the doors, arms the security system, and sets the thermostat — all with a single phrase. Voice control panels are installed in key locations throughout the home for convenient hands-free operation.",
        ],
      },
      {
        title: "Fingerprint & Facial Recognition Entry",
        paragraphs: [
          "Your home should recognise you. We install advanced biometric entry systems at your doors that scan fingerprints or recognise faces in under a second. No more fumbling for keys or remembering PIN codes — your fingerprint or face becomes your key. These systems store encrypted biometric data locally for privacy and security.",
          "Facial recognition cameras at entry points can distinguish between residents, known visitors, and strangers. The system can send you an alert with a photo when an unrecognised face appears at your door, and grant temporary access to guests, cleaners, or service providers with time-limited permissions.",
        ],
      },
      {
        title: "Automated Lighting Schedules",
        paragraphs: [
          "Imagine your lights turning on automatically as you walk into a room and turning off when you leave — no switches needed. Our automated lighting solutions use motion sensors, door sensors, and time schedules to create the perfect lighting experience. You can set different scenes for morning, evening, movie nights, or parties.",
          "Lights can be programmed to gradually brighten in the morning to simulate sunrise for a gentle wake-up experience, dim automatically at bedtime, and activate randomly when you're away to deter intruders. All lighting is controllable via smartphone from anywhere in the world, giving you total flexibility.",
        ],
      },
      {
        title: "Smart Security & Motion Detection",
        paragraphs: [
          "Your smart home's security is always on. We integrate motion sensors, door/window contacts, glass break detectors, and smart doorbells into a unified security system that works seamlessly with your lighting and automation. When motion is detected after hours, lights can automatically turn on in the area and a notification is sent to your phone.",
          "Our smart security systems can distinguish between people, pets, and vehicles to reduce false alarms. Integration with your existing CCTV system means you can view camera feeds on your smartphone, smart TV, or voice assistant display. The system can also trigger external sirens and send emergency alerts to your security provider.",
        ],
      },
      {
        title: "Appliance & Device Automation",
        paragraphs: [
          "Control your home appliances from anywhere or set them to operate on schedules. Smart plugs and switches let you control lamps, fans, air conditioners, TVs, and kitchen appliances through your smartphone or voice. You can turn on the AC before you arrive home, schedule the coffee maker for the morning, or ensure all appliances are off when you leave.",
          "For advanced automation, we install smart thermostats that learn your temperature preferences and adjust automatically for comfort and energy savings. Motorised blinds and curtains can open and close based on time of day or sunlight intensity. Even your entertainment system can be integrated to switch on the TV, dim the lights, and close the blinds with a single 'Movie Time' command.",
        ],
      },
      {
        title: "Whole-Home Energy Management",
        paragraphs: [
          "A smart home is also an efficient home. Our energy management solutions monitor your electricity consumption in real-time, identifying which devices and appliances use the most power. You can set energy budgets, receive alerts when consumption exceeds thresholds, and automatically switch off non-essential loads during peak hours.",
          "Integration with solar and inverter systems allows your smart home to intelligently manage power usage based on solar generation and battery levels. During grid outages, the system can automatically shed non-essential loads to extend battery backup time. Detailed energy reports help you understand and reduce your electricity bills.",
        ],
      },
    ],
    benefits: [
      "Hands-free voice & biometric control",
      "Energy savings with intelligent automation",
      "Enhanced security & peace of mind",
      "Customised scenes & schedules",
    ],
    image: "/project1.jpeg",
    imageAlt: "Smart home automation system installation",
    gallery: [
      "/project1.jpeg",
      "/project11.jpeg",
      "/project111.jpeg",
      "/project1111.jpeg",
      "/project11111.jpeg",
      "/project111111.jpeg",
      "/project1111111.jpeg",
      "/project2.jpeg",
      "/project22.jpeg",
      "/project2222.jpeg",
      "/project22222.jpeg",
    ],
    accent: "from-emerald-500 to-teal-600",
    gradient: "from-emerald-600 via-teal-700 to-cyan-900",
    glowColor: "rgba(16,185,129,0.25)",
    whyChoose: [
      "End-to-end smart home design & installation",
      "Integration with existing electrical & security systems",
      "Certified smart home technology partners",
      "Ongoing support, updates & system expansion",
    ],
    processSteps: [
      {
        title: "Home Automation Audit",
        description:
          "We assess your home's layout, existing electrical infrastructure, internet connectivity, and lifestyle needs to create a comprehensive automation plan. We identify which areas will benefit most from smart technology.",
      },
      {
        title: "System Design & Device Selection",
        description:
          "Our engineers design a custom automation system with the right mix of smart switches, sensors, controllers, hubs, and interfaces. We recommend compatible devices that work together seamlessly and fit your budget.",
      },
      {
        title: "Professional Installation & Configuration",
        description:
          "We install all devices, configure the central hub, connect to your Wi-Fi network, and set up the automation rules, scenes, and schedules. Every device is tested for proper operation and integration with your voice assistant and smartphone app.",
      },
      {
        title: "Training, Handover & Support",
        description:
          "We walk you through using your new smart home — voice commands, app controls, scenes, and schedules. We provide documentation and ongoing support for troubleshooting, system updates, and adding new devices as your needs grow.",
      },
    ],
    faqs: [
      {
        question: "Can Icontrol my smart home when the internet is down?",
        answer:
          "Yes. Our systems are designed with local control — even without internet, your voice commands, wall switches, and automated schedules continue to work. Remote access via smartphone requires internet but core automation functions operate locally.",
      },
      {
        question: "Do I need to replace all my existing appliances?",
        answer:
          "Not at all. We use smart plugs, switches, and modules that work with your existing appliances and lights. You can start small with a few devices and expand over time as your needs and budget allow.",
      },
      {
        question: "How secure is a smart home from hackers?",
        answer:
          "Security is our top priority. We use encrypted communication protocols, secure Wi-Fi configurations, and regular firmware updates. We recommend a separate IoT network for smart devices and can set this up during installation. Our systems follow industry best practices for smart home security.",
      },
    ],
    stats: [
      { value: "150+", label: "Smart Homes Installed" },
      { value: "98%", label: "Customer Satisfaction" },
      { value: "1,000+", label: "Devices Connected" },
      { value: "24/7", label: "Technical Support" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
