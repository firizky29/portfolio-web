
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

const self = new URL("https://storage.googleapis.com/dicoding-portfolio-bucket/self.jpg");
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Firizky",
    lastName: "Ardiansyah",
    initials: "fa", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '👨‍💻',
            text: 'loves to read'
        },
        {
            emoji: '🌎',
            text: 'based in Bandung, Indonesia'
        },
        {
            emoji: '🎓',
            text: "student of Institut Teknologi Bandung"
        },
        {
            emoji: "📧",
            text: "firizky29@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/firizkyardiansyah/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/firizky29",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/firizkyardiansyah",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I'm a student of Institut Teknologi Bandung, majoring in Informatics Engineering. I'm interested in web development, especially in backend development. I'm currently learning ReactJS and NodeJS.",
    skills:
        {
            proficientWith: ['c++', 'c#', 'java', 'python', 'javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'c++', 'cloud computing', 'google cloud product']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Zigma (2D Web Based CAD Tool)",
            source: "https://github.com/firizky29/2d-web-based-CAD/tree/main", // this should be a link to the **repository** of the project, where the code is hosted.
            image: "https://storage.googleapis.com/dicoding-portfolio-bucket/projects/zigma.PNG"
        },
        {
            title: "PilahLimbah.id",
            source: "https://github.com/firizky29/pilahlimbah-id-desktop-app",
            image: "https://storage.googleapis.com/dicoding-portfolio-bucket/projects/pilahlimbah.PNG"
        },
        {
            title: "Stupefy",
            source: "https://github.com/firizky29/stupefy-app",
            image: "https://storage.googleapis.com/dicoding-portfolio-bucket/projects/stupefy.PNG"
        },
    ]
}