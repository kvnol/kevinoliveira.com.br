import Head from 'next/head';
import Link from 'next/link';

import CardTimeline from '@/components/cards/cardTimeline/cardTimeline';
import ContentImage from '@/components/content/contentImage/contentImage';
import ListTimeline from '@/components/lists/listTimeline/listTimeline';
import experiences from '@/data/experiences.json';
import ListTags from '@/components/lists/listTags/listTags';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre mim | Kevin Oliveira</title>
      </Head>
      <div className="wrapper">
        <div className="content">
          <h1>Sobre mim</h1>
          <p>E aí! Meu nome é Kevin Oliveira, nasci em 1997 em Santo André, SP. Sou desenvolvedor front-end 💻 e designer 🎨. Atualmente trabalho na <Link href="https://docway.com.br/" target="_blank">Docway</Link> e sou músico nas horas vagas.</p>
        </div>

        <ContentImage src="/img/code-in-the-dark.png" width={1024} height={560} alt="Kevin Oliveira codando sobre extrema pressão e luzes piscantes no Code In The Dark 2023">
          <figcaption>
            <p>Participando do <Link href="https://codeinthedark.com.br/" target="_blank">Code in the Dark 2023</Link></p>
            <p>Foto por <Link href="https://instagram.com/leandro_godoi" target="_blank">@leandro_godoi</Link></p>
          </figcaption>
        </ContentImage>

        <div className="content">
          <ListTimeline title="Experiências">
            {experiences.map((experience, index) => (
              <li key={index}>
                <CardTimeline title={experience.title} year={experience.year} description={experience.description} />
              </li>
            ))}
          </ListTimeline>

          <ListTags title="Competências" list={[
            'HTML',
            'CSS',
            'JavaScript',
            'Jekyll',
            'Vue',
            'React',
            'Angular',
            'WordPress',
            'Git',
            'User Interface',
            'Figma',
            'Photoshop',
            'Illustrator',
          ]} />
        </div>
      </div>
    </>
  )
}
