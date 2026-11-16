import { performances } from '../data';
import Section from './Section';
import Carte from './Carte';

// « Arts & performances » : même Section, même Carte, aucun nouveau composant de carte
const Arts = () => {
  return (
    <Section label="Parcours libre" title="Arts & performances" linkText="Tout le parcours →">
      {performances.map(perf => (
        <Carte
          key={perf.id}
          image={perf.image}
          alt={perf.alt}
          badge={perf.badge}
          surtitre={perf.category}
          titre={perf.name}
          lignes={[perf.day, perf.time, perf.venue]}
        />
      ))}
    </Section>
  );
};

export default Arts;
