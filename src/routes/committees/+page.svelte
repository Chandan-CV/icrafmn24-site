<script lang="ts">
   interface CommitteeMember {
  name: string;
  designation: string | null;
}

interface CommitteeGroup {
  name: string;
  members: CommitteeMember[];
}

interface ConferenceData {
  committees: CommitteeGroup[];
}

  const data: ConferenceData = 
  {
    committees:
  [
  {
    name: "Chief Patron",
    members: [
      {
        name: "Dr. Ramdas M. Pai",
        designation: "President and Chancellor, MAHE"
      }
    ]
  },
  {
    name: "Patrons",
    members: [
      {
        name: "Mr. S. Vaitheeswaran",
        designation: "Chairperson, MUJ Jaipur"
      },
      {
        name: "Dr. H. S. Ballal",
        designation: "Pro Chancellor, MAHE, Manipal"
      },
      {
        name: "Lt. Gen. (Dr.) M. D. Venkatesh",
        designation: "Vice-Chancellor, MAHE, Manipal"
      },
      {
        name: "Dr. G K Prabhu",
        designation: "President, MUJ Jaipur"
      },
      {
        name: "Prof. Lalit K. Awasthi",
        designation: "Director, NIT Uttarakhand"
      },
      {
        name: "Prof. (Dr.) Madhu Veeraraghavan",
        designation: "Pro Vice Chancellor, MAHE, Bengaluru"
      },
      {
        name: "Dr. Giridar Kini P.",
        designation: "Registrar, MAHE, Manipal"
      },
      {
        name: "Dr. Nitu Bhatnagar",
        designation: "Registrar, MUJ Jaipur"
      },
      {
        name: "Dr. Raghavendra Prabhu",
        designation: "Deputy Registrar, MAHE, Bengaluru"
      }
    ]
  },
  {
    name: "Chairpersons",
    members: [
      {
        name: "Dr. Jagannath Korody",
        designation: "Director, MIT, Bengaluru"
      },
      {
        name: "Dr. Lalita Ledwani",
        designation: "Professor & Dean, Faculty of Science, MUJ Jaipur"
      },
      {
        name: "Dr. Dharmendra Tripathi",
        designation: "Dean (Students Welfare), NIT Uttarakhand"
      }
    ]
  },
  {
    name: "Chair",
    members: [
      {
        name: "Dr. Utpal Deka",
        designation: "Head, Department of Science and Humanities, MIT, Bengaluru"
      }
    ]
  },
  {
    name: "Convenors",
    members: [
      {
        name: "Dr. Kalpna Sharma",
        designation: "HOD, Department of Mathematics, MUJ Jaipur"
      },
      {
        name: "Dr. Rajashekhar V. Choudhari",
        designation: "Department of Mathematics, MIT, Bengaluru"
      }
    ]
  },
  {
    name: "Co-Convenors",
    members: [
      {
        name: "Dr. Ruchika Mehta",
        designation: "Department of Mathematics and Statistics, MUJ Jaipur"
      },
      {
        name: "Dr. Alok Bhargava",
        designation: "Department of Mathematics and Statistics, MUJ Jaipur"
      },
      {
        name: "Dr. Jagriti Sahariya",
        designation: "Department of Physics, NIT, Uttarakhand"
      },
      {
        name: "Dr. Manjunatha M S",
        designation: "Department of Mechanical and Industrial Engineering, MIT, Bengaluru"
      }
    ]
  },
  {
    name: "Organizing Secretaries",
    members: [
      {
        name: "Dr. Aditya G S S",
        designation: "Department of Mechanical and Industrial Engineering, MIT, Bengaluru"
      },
      {
        name: "Dr. Ramya M",
        designation: "Department of Biotechnology, MIT, Bengaluru"
      },
      {
        name: "Dr. Jyoti Shetty",
        designation: "Department of Mathematics, MIT, Bengaluru"
      },
      {
        name: "Dr. Kusum Sharma",
        designation: "Department of Mathematics, NIT, Uttarakhand"
      },
      {
        name: "Dr. Reema Jain",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Pooja Sharma",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Giriraj Methi",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Rakesh K Mishra",
        designation: "Department of Chemistry, NIT, Uttarakhand"
      }
    ]
  },
  {
    name: "Joint Organizing Secretaries",
    members: [
      {
        name: "Dr. Rajendra Prasad",
        designation: "Department of Mechanical Engineering, MIT, Bengaluru"
      },
      {
        name: "Dr. Nagendra H N",
        designation: "Department of Mechanical Engineering, MIT, Bengaluru"
      },
      {
        name: "Dr. Jayalaxmi Rajesh Hanni",
        designation: "Department of Electrical and Electronics Engineering, MIT, Bengaluru"
      },
      {
        name:"Dr. Shruthi",
        designation:"Department of Mathematics, MIT, Bengaluru"
      },
      {
        name: "Dr. Ram Naresh Saraswat",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Ashok Kr Pal",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Anil Ahlawat",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      }
    ]
  },
  {
    name: "Technical Program and Technology Committee",
    members: [
      {
        name: "Dr. Sunil Joshi",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Ashish Kumar",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Vivek Singh",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Bijender Singh",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      }
    ]
  },
  {
    name: "Event Management Committee",
    members: [
      {
        name: "Dr. Anamika Jain",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Laxmi Poonia",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Bhoopendra Pachauri",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Parvin Kumari",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Alka Chaudhary",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      }
    ]
  },
  {
    name: "Accommodation and Transportation Committee",
    members: [
      {
        name: "Resource Persons",
        designation: null
      },
      {
        name: "Dr. Mohd. Rizwanullah",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Participants",
        designation: null
      },
      {
        name: "Dr. Virendra Singh Chouhan",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Sandeep Kumar",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      }
    ]
  },
  {
    name: "Sponsorship and Publicity Committee",
    members: [
      {
        name: "Dr. Santosh Patil",
        designation: "Department of Mechanical Engineering, MUJ, Jaipur"
      },
      {
        name: "Dr. Rajendra Prasad",
        designation: "Department of Mechanical Engineering, MIT, Bengaluru"
      },
      {
        name: "Dr. Ankur Kr Jain",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Ayush Tripathi",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Ashutosh Pandey",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Vijay Shankar Sharma",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      }
    ]
  },
  {
    name: "Food Committee",
    members: [
      {
        name: "Dr. Sushil Kr Jain",
        designation: "Department of Physics, MUJ, Jaipur"
      },
      {
        name: "Dr. Indeewar Kumar",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      }
    ]
  },
  {
    name: "Registration and Certificate Committee",
    members: [
      {
        name: "Dr. Nagendra H N",
        designation: "Department of Mechanical Engineering, MIT, Bengaluru"
      },
      {
        name: "Dr. Garima Agarwal",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Himanshu Rathore",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      },
      {
        name: "Dr. Mahesh Kr Dubey",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      }
    ]
  },
  {
    name: "Finance Committee",
    members: [
      {
        name: "Dr. Manoj Bohra",
        designation: "Department of CCE, MUJ, Jaipur"
      },
      {
        name: "Dr. Rohit Jain",
        designation: "Department of Biosciences, MUJ, Jaipur"
      },
      {
        name: "Dr. Alok Bhargava",
        designation: "Department of Mathematics and Statistics, MUJ, Jaipur"
      }
    ]
  }
]
  }

</script>


<div class=" flex flex-row flex-wrap justify-center ">
    {#each data.committees as comm}
        <div class="bg-white p-5 m-5  rounded-xl shadow-lg flex flex-col justify-center text-center items-center h-fit min-w-96">
            <div class="text-2xl font-InterTight font-semibold text-[#09275E] pb-3 flex flex-col">
                {comm.name}
            </div>
            <div class="flex flex-col gap-4">
                {#each comm.members as member}
                    <div class="flex flex-col gap-2 items-center mt-3">
                        <div class="text-lg sm:text-xl text-[#3c6cc4] font-bold text-justify">
                            {member.name}
                        </div>
                        {#if member.designation}
                            <div class="text-sm sm:text-lg text-[#272727] font-light text-justify">
                                {member.designation}
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>