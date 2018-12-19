import { Livro } from '../models/livro.model'



export class LivrosService {

    public livros: Livro[] =
[
  {
   id: 1,
   nome: 'Programação de Computadores Com C/C++',
   descricao: 'Esta série foi criada para atender aos eixos tecnológicos que orientamos cursos técnicos e profissionalizantes em âmbito nacional. Seu objetivo é capacitar o aluno para o mercado de trabalho, fornecendo, além de fundamentos teóricos, aspectos práticos que geram uma perspectiva de inserção no setor produtivo e, até mesmo, de requalificação. O conteúdo pode ser entendido a cursos de Formação Inicial e Continuada (FIC), pois o material é agradável e moderno; o aprendizado, gradativo e didático. Está adequado às áreas de conhecimento e aos componentes curriculares – com exemplos e exercícios de fixação – e é proporcional às grades horárias das principais instituições de ensino, portanto o professor pode utilizá-lo como livro-texto em sala de aula. ',
   valor: 'R$ 51,90'  
  },   
  {
    id: 2,
    nome: 'Algoritimos e Lógica de Programação - 2ª Ed',
    descricao: 'Com uma linguagem simples e didática, o livro procura tornar a lógica de programação prática, além de mostrar aos estudantes um caminho mais adequado na construção dos algoritmos. A abstração de procedimentos e dados é um dos maiores problemas para os estudantes nos cursos introdutórios, e, para tentar escapar das dificuldades, os autores utilizam uma arquitetura de computador simples. Um dos principais objetivos do livro é fazer com que o estudante consiga no futuro relacionar os aspectos abstratos da computação com sua implementação, e ainda incentivar a necessidade de escrever os algoritmos antes de sua implementação propriamente dita. ',
    valor: 'R$ 70,90'  
  },
  {
    id: 3,
    nome: 'Programação Profissional Em Html 5',
    descricao: 'Para aqueles que têm navegado pela internet, ou talvez estejam até desenvolvendo para ela há dez anos ou mais, considere o quanto a tecnologia HTML já caminhou, apenas nos últimos anos. Os autores deste livro trabalham, desenvolvem e ensinam tecnologias HTML5 e podem dizer, com certeza, que a adoção dos novos padrões está acelerando incrivelmente. O desenvolvimento de HTML5 não mostra sinais de estar diminuindo, e será muito interessante observá-lo. Com este livro, temos como objetivo liberar o poder do HTML5. Se você é um desenvolvedor web que quer ampliar seus horizontes e fazer suas aplicações web se destacarem, a hora do HTML5 é agora! HTML5 está aqui e com ele, as aplicações web podem obter um poder, escalabilidade e capacidade de resposta sem precedentes. Neste livro, você aprenderá como desbloquear esse poder e usar a tecnologia HTML5 mais recente para criar aplicações web modernas, que usem todo o potencial dos navegadores também modernos. ',
    valor: 'R$ 42,90'  
  },
  {
    id: 4,
    nome: 'Programação Web Com Plataforma Java - Fundamentos e Desenvolvimento de Aplicações',
    descricao: 'Esta série foi criada para atender aos eixos tecnológicos que orientamos cursos técnicos e profissionalizantes em âmbito nacional. Seu objetivo é capacitar o aluno para o mercado de trabalho, fornecendo, além de fundamentos teóricos, aspectos práticos que geram uma perspectiva de inserção no setor produtivo e, até mesmo, de requalificação. O conteúdo pode ser estendido a cursos de Formação Inicial e Continuada (FIC), pois o material é agradável e moderno; o aprendizado, gradativo e didático. Está adequado às áreas de conhecimento e aos componentes curriculares – com exemplos e exercícios de fixação – e é proporcional às grades horárias das principais instituições de ensino, portanto o professor pode utilizá-lo como livro-texto em sala de aula. ',
    valor: 'R$ 62,00'  
  }
]

    public getLivros(): Array<Livro> {
        return this.livros
    }
    
    public getLivrosPorId(id: number): 
    Livro{
        let celularesInternos: Livro[]
        celularesInternos =
         this.getLivros()
        return celularesInternos[id -1]
    }

}