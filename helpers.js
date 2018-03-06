exports.siteName = 'YG | DEV';

exports.menu = [
  { slug: '/', title: 'Home', icon: 'fas fa-home' },
  { slug: '/portfolio', title: 'Portfolio', icon: 'fas fa-code' },
  { slug: '/contact', title: 'Contact', icon: 'far fa-envelope' },
  { slug: '/other', title: 'Other', icon: 'fas fa-music' }
];

exports.contactIcons = [
  { title: 'GitHub', href: 'https://github.com/yasgreen93', icon: 'fab fa-github' },
  { title: 'Linkedin', href: 'https://www.linkedin.com/in/yasmin-green-b21a84110/', icon: 'fab fa-linkedin' },
  { title: 'Twitter', href: 'https://twitter.com/ygdev19', icon: 'fab fa-twitter-square' },
  { title: 'SoundCloud', href: 'https://soundcloud.com/yasmin-green', icon: 'fab fa-soundcloud' },
];

exports.dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

exports.homePageContent = [
  { type: "text", text: "Hi I'm Yasmin." },
  { type: "text", text: "I am currently working in the world of Javascript as a front end developer at The Economist in London. Back in 2015 I graduated with a first class degree in Forensic Science from the University of Lincoln however I decided that I wanted to go into web development. Just before the new year I completed a three month course in graphic design from Shillington College in London and in the new year joined Makers Academy to learn to code!" },
  { type: "text", text: "I love learning new things and accepting challenges whether it be more on the logical side or the more creative side. I also love table tennis." },
  { type: "text", text: "Technologies I have experience in so far:" },
  { type: "list",
    customClass: 'content__item--list',
    content: [
      {
        type: "image",
        text: "ReactJS",
        image: "logo-react.png",
      },
      {
        type: "image",
        text: "NodeJS",
        image: "logo-node.png"
      },
      {
        type: "image",
        text: "Redux",
        image: "logo-redux.png"
      },
      {
        type: "image",
        text: "Graphql",
        image: "logo-graphql.png"
      },
      {
        type: "image",
        text: "Relay",
        image: "logo-relay.png"
      },
      {
        type: "image",
        text: "HTML",
        image: "logo-html.png"
      },
      {
        type: "image",
        text: "CSS",
        image: "logo-css.png"
      },
      {
        type: "image",
        text: "AWS",
        image: "logo-aws.png"
      }
    ]
  },
  { type: "text", text: "Please take a look around my site and leave a message!" }
];

const iframeWidth = "100%";
const iframeHeight = "166";
const iframeScrolling = "no";
const iframeSrcParams = "&color=%2374c5e7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=true&show_teaser=true&download=false"
exports.otherPageContent = [
	{ type: "text", text: "My main hobby outside of coding is music, I started learning the piano at a young age and then I taught myself guitar in 2009 when I was 16. I love to make my own instrumental music using acoustic guitar and piano using Logic Pro X. Check out some of my songs below!" },
	{ type: "iframe", width: iframeWidth, height: iframeHeight, scrolling: iframeScrolling, src: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/300794907${iframeSrcParams}` },
	{ type: "iframe", width: iframeWidth, height: iframeHeight, scrolling: iframeScrolling, src: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/285326375${iframeSrcParams}` },
	{ type: "iframe", width: iframeWidth, height: iframeHeight, scrolling: iframeScrolling, src: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/278406790${iframeSrcParams}` },
	{ type: "iframe", width: iframeWidth, height: iframeHeight, scrolling: iframeScrolling, src: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/268760366${iframeSrcParams}`},
];

exports.contactPageContent = [
	{ type: 'text', text: 'Find me on other sites:' },
	{ type: 'list', customClass: 'contact__other--list' }
];
