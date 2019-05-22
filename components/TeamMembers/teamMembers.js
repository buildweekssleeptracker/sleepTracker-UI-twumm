const teamMembersList = [
  {
    "name": "Martin Twum Mensah",
    "role": "User Interface Developer",
    "description": "A product manager/web developer with experience in building web applications using Python, JavaScript(Node.js, Express) and HTML/CSS; with an in-depth experience of managing cross-functional teams over 4 years on various projects.",
    "profileImage": './img/team/martin.JPG',
    "social": {"github": "https://github.com/twumm", "twitter": "https://twitter.com/twumm"},
    "github": "https://github.com/twumm",
    "twitter": "https://twitter.com/twumm"
},
  {
    "name": "Elise Spain",
    "role": "User Interface Developer",
    "description": "Here",
    "profileImage": './img/team/elise.JPG',
    "social": {"github": "https://github.com/espain16", "twitter": ""},
    "github": "https://github.com/espain16",
    "twitter": ""
  },
  {
    "name": "Cesar Aponte",
    "role": "User Interface Developer",
    "description": "Here",
    "profileImage": './img/team/cesar.JPG',
    "social": {"github": "https://github.com/espain16", "twitter": ""},
    "github": "https://github.com/espain16",
    "twitter": ""
  },
  {
    "name": "Alfonso Garcia",
    "role": "Frontend Architect",
    "description": "Here",
    "profileImage": './img/team/alfonso.JPG',
    "social": {"github": "https://github.com/alfonsog714", "twitter": ""},
    "github": "https://github.com/alfonsog714",
    "twitter": ""
  },
  {
    "name": "Duc Vu",
    "role": "Backend Engineer",
    "description": "Here",
    "profileImage": './img/team/duc.JPG',
    "social": {"github": "https://github.com/vud531", "twitter": ""},
    "github": "https://github.com/vud531",
    "twitter": ""
  },
  {
    "name": "Brandon Desselle",
    "role": "Backend Engineer",
    "description": "Here",
    "profileImage": './img/team/brandon.JPG',
    "social": {"github": "", "twitter": ""}
  }
]

const aboutUsSection = document.querySelector('.about-us');

class TeamMember {
  constructor(member) {
    this.member = member;
    // Create various element for team member sections
    this.memberDiv = document.createElement('div');
    this.profileImage = document.createElement('img');
    this.memberContent = document.createElement('div');
    this.memberName = document.createElement('h6');
    this.memberDescription = document.createElement('p');
    this.memberContact = document.createElement('div');
    this.socialLink = document.createElement('a');
    this.socialLogo = document.createElement('img');

    this.memberDiv.classList.add('member');
    // Call methods to create divs
    this.constructMember();
    this.constructMemberContact()
  }

  constructMember() {
    this.profileImage.src = this.member.profileImage;
    this.profileImage.alt = this.member.name;
    this.memberContent.classList.add('member-contact');
    this.memberName.textContent = this.member.name;
    this.memberDescription.textContent = this.member.description;
    
  }

  constructMemberContact() {
    this.memberContact.classList.add('member-contact');
    if (this.member.social.github) {
      this.socialLink.href = this.member.social.github;
      this.socialLogo.src = './img/Github.png';
      this.socialLogo.alt = 'Social';
      this.socialLink.append(this.socialLogo)
      this.memberContact.append(this.socialLink)
    }
    if (this.member.social.twitter) {
      this.socialLink.href = this.member.social.twitter;
      this.socialLogo.src = './img/Twitter.png';
      this.socialLogo.alt = 'Social';
      this.socialLink.append(this.socialLogo)
      this.memberContact.append(this.socialLink)
    }

  }
}

const teamMembers = teamMembersList.map(member => new TeamMember(member));
// teamMembers.forEach(memberElement => aboutUsSection.appendChild(memberElement));