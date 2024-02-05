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
        name: "Dr. Adithya G S S",
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
      },
      {
        name:"Dr. Dhirendra Bahadur Singh",
        designation:"Department of Mathematics, NIT, Uttarakhand"
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

<div class="justfy-center items-center flex flex-col px-20 py-10">
{#each data.committees as committee (committee.name)}
  <h2 class="text-center font-bold text-2xl lg:text-4xl underline font-serif text-orange-900 py-8">{committee.name}</h2>
  <table class="w-full text-orange-950">
    <tbody>
      {#if (committee.members.length >= 4)}
      {#each committee.members as member (member.name)}
        <tr class="">
          <div class="text-center flex flex-col py-3">
            <h1 class="font-semibold text-xl lg:text-2xl">{member.name}</h1>
            <h1 class="italic font-serif text-lg lg:text-xl">{member.designation ?? 'N/A'}</h1>
          </div>
        </tr>
        
      {/each}
      {:else}
      {#each committee.members as member (member.name)}
        <tr class="">
          <div class="text-center flex flex-col py-3">
            <h1 class="font-semibold text-xl lg:text-2xl">{member.name}</h1>
            <h1 class="italic font-serif text-lg lg:text-xl">{member.designation ?? 'N/A'}</h1>
          </div>
        </tr>
      {/each}
      {/if}
    </tbody>
  </table>
{/each}
</div>

<style>
  table, th, td, tr {
    border : 1px solid;
    width: 100%;
  }
</style>