import "./Home.scss";
import Card from "../../components/Card/Card";
import bgPattern from "../../assets/images/bg-pattern-quotation.svg";
import ImageDaniel from "../../assets/images/image-daniel.jpg";
import ImageJonathan from "../../assets/images/image-jonathan.jpg";
import ImageJeanette from "../../assets/images/image-jeanette.jpg";
import ImagePatrick from "../../assets/images/image-patrick.jpg";
import ImageKira from "../../assets/images/image-kira.jpg";

function Home() {
  const list = [
    {
      classCard: "card1",
      image: ImageDaniel,
      name: "Daniel Clifford",
      verification: "Verified Graduate",
      title:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
      text: "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”",
      background: "hsl(263, 55%, 52%)",
      backgroundImage: bgPattern,
    },
    {
      classCard: "card2",
      image: ImageJonathan,
      name: "Jonathan Walters",
      verification: "Verified Graduate",
      title: "The team was very supportive and kept me motivated",
      text: "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”",
      background: "hsl(217, 19%, 35%)",
    },
    {
      classCard: "card3",
      image: ImageJeanette,
      name: "Jeanette Harmon",
      verification: "Verified Graduate",
      title: "An overall wonderful and rewarding experience",
      text: "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
      background: "hsl(0, 0%, 100%)",
      colorText: "hsl(217, 19%, 35%)",
      colorTextOpacity: "hsl(217, 19%, 35%, 0.7)",
    },
    {
      classCard: "card4",
      image: ImagePatrick,
      name: "Patrick Abrams",
      verification: "Verified Graduate",
      title:
        "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
      text: "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”",
      background: "hsl(219, 29%, 14%)",
    },
    {
      classCard: "card5",
      image: ImageKira,
      name: "Kira Whittle",
      verification: "Verified Graduate",
      title: "Such a life-changing experience. Highly recommended!",
      text: "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”",
      background: "hsl(0, 0%, 100%)",
      colorText: "hsl(217, 19%, 35%)",
      colorTextOpacity: "hsl(217, 19%, 35%, 0.7)",
    },
  ];

  return (
    <>
      <div className="container">
        {list.map((person, index) => (
          <Card
            key={index}
            classCard={person.classCard}
            image={person.image}
            name={person.name}
            verification={person.verification}
            title={person.title}
            text={person.text}
            background={person.background}
            backgroundImage={person.backgroundImage}
            colorText={person.colorText}
            colorTextOpacity={person.colorTextOpacity}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
