import React from 'react';
import './NotificationBar.css';

const NotificationBar = () => {
  const items = [
    {
      text: "Nathanial Samuel ",
      subtext: "Op zoek naar stageplaatsen in Rotterdam, gespecialiseerd in softwareontwikkeling. Enthousiast om bij te dragen aan baanbrekende technologische projecten. Contact tel:+31648245519",
      link: "https://www.cyroX.com"
    },
    {
      text: "*CyroX Bionic*",
      subtext: "CyroX is toonaangevend in blockchain-technologie en biedt veilige en transparante oplossingen voor digitale transacties. Projectondersteuning via natnaelsml@gmail.com",
      link: "https://www.techniekcollegerotterdam.nl/opleidingen/it-en-online/software-developer-bol"
    },
    {
      text: "**CyroX Blockchain Solutions**",
      subtext: "Innovatieve en geavanceerde bionische oplossingen. CyroX ontwikkelt geavanceerde protheses en exoskeletten die naadloos integreren met het menselijk lichaam, waardoor mobiliteit en kracht worden verbeterd.",
      link: "mailto:natnaelsml@gmail.com"
    }
  ];

  return (
    <div className="marquee-wrapper w-full ">
      <div className="marquee-content">
        {items.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="marquee-item-link">
            <div className="marquee-item">
              <strong>{item.text}</strong>
              <span>{item.subtext}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NotificationBar;
