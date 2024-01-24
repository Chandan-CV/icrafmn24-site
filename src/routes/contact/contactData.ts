interface ContactPerson {
    name: string;
    designation?: string;
    organization?: string;
    role?: string;
    email: string;
    phone?: string;
  }
  
  const contacts: ContactPerson[] = [
    {
      name: "Dr. Kalpna Sharma",
      designation: "HOD, Department of Mathematics",
      organization: "MUJ Jaipur",
      role: "Convener, ICRAFMN-2024",
      email: "kalpana.sharma@jaipur.manipal.edu",
      phone: "+(91) 8890036666"
    },
    {
      name: "Dr. Rajashekhar V. Choudhari",
      designation: "Dept. of Mathematics",
      organization: "MIT, Bengaluru",
      role: "Convener, ICRAFMN-2024",
      email: "rv.choudhari@manipal.edu",
      phone: "+(91) 8123158384"
    },
    {
      name: "Dr. Dharmendra Tripathi",
      designation: "Dept. of Mathematics",
      organization: "NIT Uttarakhand",
      role: "Chairperson, ICRAFMN-2024",
      email: "dtripathi@nituk.ac.in",
      phone: "+(91) 8385882005"
    },
    {
      name: "Dr. Alok Bhargava",
      designation: "Department of Mathematics and Statistics",
      organization: "MUJ Jaipur",
      role: "Co-Convenor, ICRAFMN-2024",
      email: "alok.bhargava@jaipur.manipal.edu",
      phone: "+(91) 9414073300"
    },
    // {
    //   name: "Dr. Jagriti Sahariya",
    //   designation: "Department of Physics",
    //   organization: "NIT, Uttarakhand",
    //   role: "Co-Convenor, ICRAFMN-2024",
    //   email: "jagrati@nituk.ac.in"
    // },
    // {
    //   name: "Dr. Manjunatha M S",
    //   designation: "Department of Mechanical and Industrial Engineering",
    //   organization: "MIT, Bengaluru",
    //   role: "Co-Convenor, ICRAFMN-2024",
    //   email: "manjunath.ms@manipal.edu",
    //   phone: "+(91) 9483426391"
    // }
  ];
  
  export default contacts;