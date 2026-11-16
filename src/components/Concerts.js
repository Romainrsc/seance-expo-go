import { concerts } from '../data';
import Section from './Section';
import Carte from './Carte';

const Concerts = () => {
  return (
    <Section label="Line-up 2027" title="Concerts" linkText="Toute la programmation →">
      {concerts.map(concert => (
        <Carte
          key={concert.id}
          image={concert.image}
          alt={concert.alt}
          badge={concert.badge}
          surtitre={concert.category}
          titre={concert.name}
          lignes={[concert.day, concert.time, concert.venue]}
          vedette={concert.featured}
        />
      ))}
    </Section>
  );
};

export default Concerts;
