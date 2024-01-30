interface Speaker {
    name: string;
    affiliation: string;
  }
  
  interface AddressCategory {
    category: string;
    speakers: Speaker[];
  }
  
  interface ConferenceAddresses {
    categories: AddressCategory[];
  }
  
  // Example instantiation
  const keynoteSpeakers: Speaker[] = [
    { name: "Prof. Suman Chakraborty", affiliation: "Indian Institute of Technology, Kharagpur" },
    { name: "Prof Anuj Mubayi", affiliation: "Illinois State University, USA" },
    { name: "Prof. E. Y. K. Ng", affiliation: "Nanyang Technological University, Singapore" },
    { name: "Prof. Dave Smith", affiliation: "University of Birmingham, Edgbaston, UK" },
    { name: "Prof. O. D. Makinde", affiliation: "Stellenbosch University, South Africa" },
    { name: "Prof. Padmanabhan Seshaiyer", affiliation: "George Mason University, USA" },
    { name: "Prof. Amit Agrawal", affiliation: "Indian Institute of Technology, Bombay" },
    { name: "Prof. P V S N Murthy", affiliation: "Indian Institute of Technology, Kharagpur" },
    { name: "Prof. Ratish Kumar B V", affiliation: "Indian Institute of Technology, Kanpur" },
    { name: "Prof. Tanmay Basak", affiliation: "Indian Institute of Technology, Madras" },
    { name: "Prof. Prasad Patnaik BSV", affiliation: "Indian Institute of Technology, Madras" },
    { name: "Prof. Rama Bhargava", affiliation: "Indian Institute of Technology, Roorkee" },
    { name: "Prof. P.G. Siddheswar", affiliation: "Christ University, Bengaluru" },
    { name: "Dr. Manoranjan Mishra", affiliation: "IIT Ropar" },
  ];
  
  const invitedSpeakers: Speaker[] = [
    { name: "Dr. Hafiz Muhammad Ali", affiliation: "King Fahd University of Petroleum and Minerals, Dhahran, Saudi Arabia" },
    { name: "Dr. Katta Ramesh", affiliation: "Sunway University, Malaysia" },
    { name: "Dr. Rajesh K. Pandey", affiliation: "Indian Institute of Technology, Varanasi" },
    { name: "Dr. R. Sivaraj", affiliation: "Dr. B. R. Ambedkar National Institute of Technology, Punjab" },
    { name: "Dr. Kerehalli Vinayaka Prasad", affiliation: "VSK University, Ballari" },
    { name: "Dr. Hanumesh Vaidya", affiliation: "VSK University, Ballari" },
    { name: "Prof. Gopal Chandra Shit", affiliation: "Jadavpur University, Kolkata" },
    { name: "Dr Satyananda Panda", affiliation: "NIT Calicut" },
    { name: "Dr. Hafiz Muhammad Ali", affiliation: "King Fahd University of Petroleum and Minerals, Dhahran, Saudi Arabia" },
    { name: "Samuel O. Adesanya", affiliation: "Redeemer’s University, Ede, Nigeria" },
  ];
  
  const conferenceAddresses: ConferenceAddresses = {
    categories: [
      { category: "Keynote Address", speakers: keynoteSpeakers },
      { category: "Invited Address", speakers: invitedSpeakers },
      // Add other categories here if needed
    ],
  };
  
  export default conferenceAddresses;
  