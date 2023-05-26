import ListAccordion from "@/components/lists/listAccordion/listAccordion";
import Head from "next/head";

export default function servicos() {
  return(
    <>
      <Head>
        <title>Serviços | Kevin Oliveira</title>
      </Head>
      <div className="wrapper">
        <div className="content">
          <h1>
            <span>Eu crio</span>
            <strong>Produtos digitais</strong>
          </h1>

          <ListAccordion list={[
            {
              title: 'Branding',
              content: 'Criação da marca da sua empresa/aplicação com todos os assets necessários, acompanhando guia de cores e aplicação.',
              thumb: '/img/job-primitive.png',
              thumbAlt: 'Primitive Planejados - Brand Guidelines'
            },
            {
              title: 'UI/UX Design',
              content: 'Prototipação completa para seu site/aplicação com planejamento e estratégia de melhores práticas para web.',
              thumb: '/img/job-downstage.png',
              thumbAlt: 'Downstage - UI Design'
            },
            {
              title: 'Web & Mobile Development',
              content: 'Desenvolvimento completo da sua aplicação/site em Angular, Vue ou WordPress com boas práticas de acessibilidade, usabilidade e performance.',
              thumb: '',
              thumbAlt: ''
            }
          ]} />
        </div>
      </div>
    </>
  )
}