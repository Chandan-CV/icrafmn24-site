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
	{ name: 'Prof. Suman Chakraborty', affiliation: 'Indian Institute of Technology, Kharagpur' },
	{ name: 'Prof. Huihe Qiu', affiliation: 'Hong Kong University of Science and Technology, China' },
	{ name: 'Prof. S M Mallikarjunaiah', affiliation: 'Texas A&M University-Corpus Christi, USA' },
	{ name: 'Prof. Robert J. Poole', affiliation: 'University of Liverpool, UK' },
	{ name: 'Prof Anuj Mubayi', affiliation: 'Illinois State University, USA' },
	{ name: 'Prof. E. Y. K. Ng', affiliation: 'Nanyang Technological University, Singapore' },
	{ name: 'Prof. Dave Smith', affiliation: 'University of Birmingham, Edgbaston, UK' },
	{ name: 'Prof. Bruno Carpentieri', affiliation: 'The Free University of Bozen-Bolzano, Italy' },
	{ name: 'Prof. O. D. Makinde', affiliation: 'Stellenbosch University, South Africa' },
	{ name: 'Prof. Padmanabhan Seshaiyer', affiliation: 'George Mason University, USA' },

	{ name: 'Prof. Jitesh  S B Gajjar', affiliation: 'University of Manchester, UK' },
	{ name: 'Prof. Ashwin Vaidya', affiliation: 'Montclair State University, USA' },
	{
		name: 'Prof. Imre Miklós Szilágyi',
		affiliation: 'Budapest University of Technology and Economics, Budapest'
	},
	{ name: 'Prof. Gibin Powathil', affiliation: 'Swansea University, UK' },
	{ name: 'Prof. Amit Agrawal', affiliation: 'Indian Institute of Technology, Bombay' },
	{ name: 'Prof. G P Raja Sekhar', affiliation: 'Indian Institute of Technology, Kharagpur' },
	{ name: 'Prof. P V S N Murthy', affiliation: 'Indian Institute of Technology, Kharagpur' },
	{ name: 'Prof. Ratish Kumar B V', affiliation: 'Indian Institute of Technology, Kanpur' },
	{ name: 'Prof. Tanmay Basak', affiliation: 'Indian Institute of Technology, Madras' },
	{ name: 'Prof. Prasad Patnaik BSV', affiliation: 'Indian Institute of Technology, Madras' },
	{ name: 'Prof. Tamal Banerjee', affiliation: 'Indian Institute of Technology, Guwahati' },
	{ name: 'Prof. Swaroop Nandan Bora', affiliation: 'Indian Institute of Technology, Guwahati' },
	{ name: 'Prof. Rama Bhargava', affiliation: 'Indian Institute of Technology, Roorkee' },
	{ name: 'Prof. P.G. Siddheswar', affiliation: 'Christ University, Bengaluru' },
	{ name: 'Prof. Manoranjan Mishra', affiliation: 'Indian Institute of Technology, Ropar' },
// 	Prof. M. K. Sharma
// Guru Jambheshwar University of Science and Technology, Hisar
// Prof. Ahmet Selim DALKILIÇ
// Yildiz Technical University, Türkiye
// Prof. Haci Mehmet Baskonus
// Harran University, Turkey
// Prof. Kh S Mekheimer
// Al-Azhar University, Egypt
// Prof. Siraj-ul-Islam
// University of Engineering and Technology, Pakistan
{
	name: 'Prof. M. K. Sharma',
	affiliation: 'Guru Jambheshwar University of Science and Technology, Hisar'
},
{
	name: 'Prof. Ahmet Selim DALKILIÇ',
	affiliation: 'Yildiz Technical University, Türkiye'
},
{
	name: 'Prof. Haci Mehmet Baskonus',
	affiliation: 'Harran University, Turkey'
},
{
	name: 'Prof. Kh S Mekheimer',
	affiliation: 'Al-Azhar University, Egypt'
},
{
	name: 'Prof. Siraj-ul-Islam',
	affiliation: 'University of Engineering and Technology, Pakistan'
}
];

const invitedSpeakers: Speaker[] = [
	// {
	// 	name: 'Dr. Hafiz Muhammad Ali',
	// 	affiliation: 'King Fahd University of Petroleum and Minerals, Dhahran, Saudi Arabia'
	// },
	{ name: 'Mr. Advaith Gupta', affiliation: 'CEO and Founder, Paanduv Applications, Bareilly' },
	{ name: 'Dr. Katta Ramesh', affiliation: 'Sunway University, Malaysia' },
	{ name: 'Dr. Rajesh K. Pandey', affiliation: 'Indian Institute of Technology, Varanasi' },
	{
		name: 'Dr. R. Sivaraj',
		affiliation: 'Dr. B. R. Ambedkar National Institute of Technology, Punjab'
	},
	{ name: 'Dr. Kerehalli Vinayaka Prasad', affiliation: 'VSK University, Ballari' },
	{ name: 'Dr. Hanumesh Vaidya', affiliation: 'VSK University, Ballari' },
	{ name: 'Dr. Gopal Chandra Shit', affiliation: 'Jadavpur University, Kolkata' },
	{ name: 'Dr. Satyananda Panda', affiliation: 'NIT Calicut' },
	{
		name: 'Dr. Hafiz Muhammad Ali',
		affiliation: 'King Fahd University of Petroleum and Minerals, Dhahran, Saudi Arabia'
	},
	{ name: 'Dr. Samuel O. Adesanya', affiliation: 'Redeemer’s University, Ede, Nigeria' },
	{
		name: 'Dr. Sachin Shaw',
		affiliation: 'Botswana International University of Science and Technology, Botswana'
	},
	{ name: 'Dr. Vivekanand', affiliation: 'MNIT Jaipur' },
	{ name: 'Dr. P Nagarani', affiliation: 'University of West Indies, Jamaica' },
	{
        name: 'Dr. E. P. Siva',
        affiliation: 'SRM Institute of Science and Technology, Kattankulathur'
    },
    {
        name: 'Dr. Sukhendu Ghosh',
        affiliation: 'Indian Institute of Technology, Jodhpur'
    },
    {
        name: 'Dr. Kushal Sharma',
        affiliation: 'MNIT Jaipur'
    },
    {
        name: 'Dr. Om Suthar',
        affiliation: 'MNIT Jaipur'
    },
    {
        name: 'Dr. Sreedhara Rao Gunakala',
        affiliation: 'The University of the West Indies, Trinidad and Tobago'
    },
    {
        name: 'Dr. Najma Saleem',
        affiliation: 'Prince Mohammad Bin Fahd University, Saudi Arabia'
    },
    {
        name: 'Dr. Mohammad Ferdows',
        affiliation: 'University of Dhaka, Bangladesh'
    },
    {
        name: 'Dr. Srinivasa Rao Pentyala',
        affiliation: 'Indian Institute of Technology, Dhanbad'
    },
    {
        name: 'Dr. Mithilesh Chaube',
        affiliation: 'IIIT Raipur'
    },
    {
        name: 'Dr. Satya Deo',
        affiliation: 'University of Allahabad, Prayagraj'
    },
    {
        name: 'Dr. Ravi Kant Avvari',
        affiliation: 'National Institute of Technology, Rourkela'
    },
    {
        name: 'Dr. Buddakkagari Vasu',
        affiliation: 'Motilal Nehru National Institute of Technology, Allahabad'
    }
];

export const planerySpeakers: Speaker[] = [
	{ name: 'Prof. Ganapati D. Yadav', affiliation: 'Institute of Chemical Technology, Mumbai' },
	{ name: 'Prof. S Sundar', affiliation: 'Director, NIT Mizoram and Chair Professor, IIT Madras' }
];

const conferenceAddresses: ConferenceAddresses = {
	categories: [
		{ category: 'Keynote Address', speakers: keynoteSpeakers },
		{ category: 'Invited Address', speakers: invitedSpeakers }
		// Add other categories here if needed
	]
};

export default conferenceAddresses;
