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
    this.memberName = document.createElement('h5');
    this.memberRole = document.createElement('h6');
    this.memberDescription = document.createElement('p');
    this.memberDescription.setAttribute('style', 'height: 106px;')
    this.memberContact = document.createElement('div');
    this.githubLink = document.createElement('a');
    this.githubLogo = document.createElement('img');
    this.twitterLink = document.createElement('a');
    this.twitterLogo = document.createElement('img');

    this.memberDiv.classList.add('member');
    // Call methods to create divs
    this.constructMember();
    this.constructMemberContact()
  }

  constructMember() {
    this.profileImage.src = this.member.profileImage;
    this.profileImage.alt = this.member.name;
    this.memberContent.classList.add('member-content');
    this.memberName.textContent = this.member.name;
    this.memberRole.textContent = this.member.role;
    this.memberDescription.textContent = this.member.description;
    // Append elements in member div
    this.memberDiv.append(this.profileImage);
    this.memberContent.append(this.memberName);
    this.memberContent.append(this.memberRole);
    this.memberContent.append(this.memberDescription);

    this.memberDiv.append(this.memberContent);
  }

  constructMemberContact() {
    this.memberContact.classList.add('member-contact');
    if (this.member.social.github) {
      this.githubLink.href = this.member.social.github;
      this.githubLogo.src = './img/Github.png';
      this.githubLogo.alt = 'Social';
      this.githubLink.append(this.githubLogo)
      this.memberContact.append(this.githubLink)
    }
    if (this.member.social.twitter) {
      this.twitterLink.href = this.member.social.twitter;
      this.twitterLogo.src = './img/Twitter.png';
      this.twitterLogo.alt = 'Social';
      this.twitterLink.append(this.twitterLogo)
      this.memberContact.append(this.twitterLink)
    }
    this.memberContent.append(this.memberContact);
  }
}

const teamMembers = teamMembersList.map(member => new TeamMember(member));
teamMembers.forEach(memberElement => aboutUsSection.appendChild(memberElement.memberDiv));
teamMembers.forEach(memberElement => console.log(memberElement));
