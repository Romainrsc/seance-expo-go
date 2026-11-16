import { captures, categories } from '../captures';
import Section from './Section';
import Carte from './Carte';

const Captures = () => {
  return (
    <Section label="Urban Eye" title="Captures" linkText="Toutes les captures →">
      {captures.map(capture => {
        // la catégorie de la capture donne le libellé et les couleurs de la pastille
        const cat = categories[capture.categorie];
        return (
          <Carte
            key={capture.id}
            image={capture.image}
            alt={capture.alt}
            badge={cat.label}
            badgeCouleur={cat.couleur}
            badgeEncre={cat.encre}
            surtitre={cat.label}
            titre={capture.titre}
            lignes={[capture.lieu, capture.date]}
          />
        );
      })}
    </Section>
  );
};

export default Captures;
