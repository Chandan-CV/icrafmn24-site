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
	{name:"Prof. Huihe Qiu", affiliation:"Hong Kong University of Science and Technology, China"},
	{name:"Prof. S M Mallikarjunaiah", affiliation:"Texas A&M University-Corpus Christi, USA"},
	{ name: 'Prof. Robert J. Poole', affiliation: 'University of Liverpool, UK' },
	{ name: 'Prof Anuj Mubayi', affiliation: 'Illinois State University, USA' },
	{ name: 'Prof. E. Y. K. Ng', affiliation: 'Nanyang Technological University, Singapore' },
	{ name: 'Prof. Dave Smith', affiliation: 'University of Birmingham, Edgbaston, UK' },
	{ name: 'Prof. Bruno Carpentieri', affiliation: 'The Free University of Bozen-Bolzano, Italy' },
	{ name: 'Prof. O. D. Makinde', affiliation: 'Stellenbosch University, South Africa' },
	{ name: 'Prof. Padmanabhan Seshaiyer', affiliation: 'George Mason University, USA' },
	{ name: 'Prof. Amit Agrawal', affiliation: 'Indian Institute of Technology, Bombay' },
	{ name: 'Prof. G P Raja Sekhar', affiliation: 'Indian Institute of Technology, Kharagpur' },
	{ name: 'Prof. P V S N Murthy', affiliation: 'Indian Institute of Technology, Kharagpur' },
	{ name: 'Prof. Ratish Kumar B V', affiliation: 'Indian Institute of Technology, Kanpur' },
	{ name: 'Prof. Tanmay Basak', affiliation: 'Indian Institute of Technology, Madras' },
	{ name: 'Prof. Prasad Patnaik BSV', affiliation: 'Indian Institute of Technology, Madras' },
	{name:"Prof. Tamal Banerjee", affiliation:"Indian Institute of Technology, Guwahati"},
	{ name: 'Prof. Rama Bhargava', affiliation: 'Indian Institute of Technology, Roorkee' },
	{ name: 'Prof. P.G. Siddheswar', affiliation: 'Christ University, Bengaluru' },
	{ name: 'Dr. Manoranjan Mishra', affiliation: 'Indian Institute of Technology, Ropar' }
];

const invitedSpeakers: Speaker[] = [
	// {
	// 	name: 'Dr. Hafiz Muhammad Ali',
	// 	affiliation: 'King Fahd University of Petroleum and Minerals, Dhahran, Saudi Arabia'
	// },
	{name:"Mr. Advaith Gupta", affiliation:"CEO and Founder, Paanduv Applications, Bareilly"},
	{ name: 'Dr. Katta Ramesh', affiliation: 'Sunway University, Malaysia' },
	{ name: 'Dr. Rajesh K. Pandey', affiliation: 'Indian Institute of Technology, Varanasi' },
	{
		name: 'Dr. R. Sivaraj',
		affiliation: 'Dr. B. R. Ambedkar National Institute of Technology, Punjab'
	},
	{ name: 'Dr. Kerehalli Vinayaka Prasad', affiliation: 'VSK University, Ballari' },
	{ name: 'Dr. Hanumesh Vaidya', affiliation: 'VSK University, Ballari' },
	{ name: 'Prof. Gopal Chandra Shit', affiliation: 'Jadavpur University, Kolkata' },
	{ name: 'Dr Satyananda Panda', affiliation: 'NIT Calicut' },
	{
		name: 'Dr. Hafiz Muhammad Ali',
		affiliation: 'King Fahd University of Petroleum and Minerals, Dhahran, Saudi Arabia'
	},
	{ name: 'Samuel O. Adesanya', affiliation: 'Redeemer’s University, Ede, Nigeria' },
	{
		name: 'Prof. Sachin Shaw',
		affiliation: 'Botswana International University of Science and Technology, Botswana'
	},
	{ name: 'Dr. Vivekanand', affiliation: 'MNIT Jaipur' }
];

export const planerySpeakers: Speaker[] = [
	{ name: 'Prof. Ganapati D. Yadav', affiliation: 'Institute of Chemical Technology, Mumbai' },
	{name:"Prof. S Sundar", affiliation:"Director, NIT Mizoram and Chair Professor, IIT Madras"},
	
];

const conferenceAddresses: ConferenceAddresses = {
	categories: [
		{ category: 'Keynote Address', speakers: keynoteSpeakers },
		{ category: 'Invited Address', speakers: invitedSpeakers }
		// Add other categories here if needed
	]
};

export default conferenceAddresses;
