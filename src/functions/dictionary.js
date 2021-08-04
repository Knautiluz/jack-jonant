const translate = (key, language) => {
  const portuguese = 'pt-BR'
  const age = new Date().getFullYear() - 1992
  switch (key) {
    case 'dev-card-summary':
      return language === portuguese
        ? 'E quem sou eu?'
        : 'And who am I?'
    case 'dev-card-details-paragraph-1':
      return language === portuguese
        ? `Meu nome é Jackson Jones Antunes, tenho atualmente ${age} anos.`
        : `My name is Jackson Jones Antunes, I am ${age} years old`
    case 'dev-card-details-paragraph-2':
      return language === portuguese
        ? 'Sou um curioso desde pequeno, quando minha primeira peripécia com a tecnologia foi consertar um walkman criando um alto-falante para ele (foi uma grande gambiarra), mas eu era criança e meus pais ficaram admirados com a curiosidade.'
        : 'I\'ve been curious since I was little, when my first venture with technology was to fix a Walkman by creating a speaker for it (it was a big trick), but I was a kid and my parents were amazed at the curiosity.'
    case 'dev-card-details-paragraph-3':
      return language === portuguese
        ? 'Um pouco mais tarde, aos 14 anos, eu ganhei meu primeiro computador, era um computador moderno, Windows XP... mas era a maior tecnologia disponível até então...'
        : 'A little later, at age 14, I got my first computer, it was a modern computer, Windows XP... but it was the greatest technology available so far...'
    case 'dev-card-details-paragraph-4':
      return language === portuguese
        ? 'Depois de fuçar muito e aprender de forma autodidata, conheci o RPG MAKER XP e foi quando eu soube da programação pela primeira vez.'
        : 'After using a lot and learning in a self-taught way, I got to know RPG MAKER XP and that\'s when I learned about programming for the first time.'
    case 'dev-card-details-paragraph-5':
      return language === portuguese
        ? 'O RMXP possuia o sistema de scripts em RGSS (Ruby Game Scripting System) e tive que aprender o básico para customizar meus jogos. Era dificil, eu achava que programar era apenas para gênios, e não avancei muito.'
        : 'The RMXP had the scripting system in RGSS (Ruby Game Scripting System) and I had to learn the basics to customize my games. It was difficult, I thought programming was just for geniuses, and I didn\'t make much progress.'
    case 'dev-card-details-paragraph-6':
      return language === portuguese
        ? 'O tempo se passou, me frustei com alguns empregos e foi quando finalmente decidi pegar firme e estudar programação por conta própria... Meu objetivo era fazer um Browser Game de RPG!'
        : 'Time passed, I got frustrated with some jobs and that\'s when I finally decided to take a stand and study programming on my own... My goal was to make an RPG Browser Game!'
    case 'dev-card-details-paragraph-7':
      return language === portuguese
        ? 'Então começou a saga, pesquisei bastante, tentei entender de onde precisava começar e fiz avanços, pouco tempo depois eu já tinha um site em PHP e dava meus primeiros passos na programação... Foi divertido, me juntei com um amigo que me ajudou com o design, e conseguimos fazer alguns avanços... comprei um dominio, subi o site e tive minhas primeiras experiênias como DevOps.'
        : 'So the saga began, I researched a lot, tried to understand where I needed to start and made advances, shortly after I had a website in PHP and was taking my first steps in programming... It was fun, I got together with a friend who helped me with the design, and we were able to make some advances... I bought a domain, went up the site and had my first experiences with DevOps.'
    case 'dev-card-details-paragraph-8':
      return language === portuguese
        ? 'Começar com a ideia de criar um jogo ajudou muito, pois um jogo ainda que seja de navegador, utiliza muitos recursos da programação, então tive que aprender de tudo um pouco, até entrar na faculdade que foi quando abandonamos o projeto para estudar.'
        : 'Starting with the idea of ​​creating a game helped a lot, because a game, even though it\'s a browser, uses a lot of programming resources, so I had to learn a little bit of everything, until I got into college, which was when we abandoned the project to study.'
    case 'dev-card-details-paragraph-9':
      return language === portuguese
        ? 'Na Faculdade já ter um conhecimento sobre programação ajudou muito, muita coisa eu já sabia e aprendia ainda mais. O tempo se passou, me formei e já estava trabalhando na área de programação, com Java.'
        : 'At university, already having knowledge about programming helped a lot, I already knew a lot and learned even more. Time passed, I graduated and was already working in the programming area, with Java.'
    case 'dev-card-details-paragraph-10':
      return language === portuguese
        ? 'Hoje já formado, tenho várias stacks e experiência na área. Atuo como back-end de apps, mas sei um pouco de quase todas as stacks, embora back-end seja meu foco.'
        : 'Today I have already graduated, I have several stacks and experience in the area. I act as an app backend, but I know a little bit about almost all stacks, although backend is my focus.'
    case 'java-card-summary':
      return language === portuguese
        ? 'Ferramentas e tecnologias usadas'
        : 'Tools and technologies used'
    case 'java-card-papper-header':
      return language === portuguese
        ? 'Essa API faz o quê?'
        : 'This API does what?'
    case 'java-card-paragraph-1':
      return language === portuguese
        ? 'Ela implementa parte do endpoint characters da Marvel API'
        : 'It implements part of the characters endpoint from Marvel API'
    case 'java-card-paragraph-2':
      return language === portuguese
        ? 'Originalmente desenvolvi a chamada a esse endpoint como um teste Java para a Dextra, que consistia replicar os endpoints characters'
        : 'I originally developed the call to this endpoint as a Java test for Dextra, which consisted of replicating the character endpoints'
    case 'java-card-paragraph-3':
      return language === portuguese
        ? 'Infelizmente eu não tinha o tempo necessário para fazer toda a implementação, pois ja estava empregado e teria pouco tempo livre, então implementei o /characters e /characters/:characterID'
        : 'Unfortunately I didn\'t have the time to do the whole implementation, as I was already employed and had little free time, so I implemented /characters and /characters/:characterID'
    case 'java-card-paragraph-4':
      return language === portuguese
        ? 'Eles tinham como regra:'
        : 'They had as a rule:'
    case 'java-card-paragraph-5':
      return language === portuguese
        ? 'Um arquivo README com instruções de como baixar, compilar, executar e testar seu código'
        : 'A README file with instructions on how to download, compile, run, and test your code'
    case 'java-card-paragraph-6':
      return language === portuguese
        ? 'Código-fonte propriamente dito'
        : 'Source code itself'
    case 'java-card-paragraph-7':
      return language === portuguese
        ? 'Quaisquer scripts de inicialização que sejam necessários (como inserts de banco por exemplo)'
        : 'Any init scripts that are needed (such as database inserts for example)'
    case 'java-card-paragraph-8':
      return language === portuguese
        ? 'O código deve ser capaz de executar totalmente offline, ou seja, na máquina que vai ser testado, sem acesso a Internet'
        : 'The code must be able to run completely offline, that is, on the machine to be tested, without Internet access'
    case 'java-card-paragraph-9':
      return language === portuguese
        ? 'A implementação deve ser sua e você deve ser capaz de explicar quaisquer decisões arquiteturais e/ou de implementação'
        : 'The implementation must be yours and you must be able to explain any architectural and/or implementation decisions'
    case 'java-card-paragraph-10':
      return language === portuguese
        ? 'Cobertura de testes'
        : 'Test coverage'
    case 'java-card-tech-summary':
      return language === portuguese
        ? 'Por que utilizei essas tecnlogias?'
        : 'Why did I use these technologies?'
    case 'java-card-tech-paragraph-1':
      return language === portuguese
        ? 'A vaga era de java, então usei o java que tinha mais conhecimento na epoca, que foi o java 8'
        : 'The job was java, so I used the java that I had the most knowledge of at the time, which was java 8'
    case 'java-card-tech-paragraph-2':
      return language === portuguese
        ? 'O Spring Boot foi escolhido pois é um dos melhores frameworks que eu conheço para trabalhar com desenvolvimento de api\'s Java'
        : 'Spring Boot was chosen because it is one of the best frameworks I know to work with Java api\'s development'
    case 'java-card-tech-paragraph-3':
      return language === portuguese
        ? 'todo seu ecossistema e ferramentas facilita muito o processo de desenvolvimento e testes e ainda suporta bem o Java 8'
        : 'its entire ecosystem and tools makes the development and testing process a lot easier, and it still supports Java 8 well.'
    case 'java-card-tech-paragraph-4':
      return language === portuguese
        ? 'O ArchUnit foi escolhido como o framework para teste de arquitetura, conheci através de um lider que tive em umas das empresas que trabalhei, me apaixonei, amo fazer testes com ele.'
        : 'ArchUnit was chosen as the framework for architectural testing, I met through a leader I had in one of the companies I worked for, I fell in love, I love doing tests with it.'
    case 'java-card-tech-paragraph-5':
      return language === portuguese
        ? 'O Gradle foi escolhido pois odeio o formato xml, sempre que vejo o xml me lembro de coisas arcaicas, cheias de gambiarra.'
        : 'Gradle was chosen because I hate the xml format, whenever I see the xml I remember archaic things, full of hacks.'
    case 'java-card-tech-paragraph-6':
      return language === portuguese
        ? 'Claro que não é apenas isso, o gradle me permite usar o Groovy, que aumenta muito o poder na hora de mexer com as depêndencias e também acho que seus builds outputs são mais \'cleans\' que o maven'
        : 'Of course it\'s not just that, gradle allows me to use Groovy, which greatly increases the power when tinkering with dependencies and I also think its build outputs are cleaner than maven'
    case 'java-card-tech-paragraph-7':
      return language === portuguese
        ? 'O Docker foi escolhido para facilitar todo o processo de montar o ambiente'
        : 'Docker was chosen to facilitate the entire process of setting up the environment'
    case 'java-card-tech-paragraph-8':
      return language === portuguese
        ? 'Por fim escolhi o Heroku para fazer o deploy da minha API, com poucos clicks já estava tudo funcionando. ❤️Heroku❤️'
        : 'Finally I chose Heroku to deploy my API, with a few clicks everything was working. ❤️Heroku❤️'
    case 'node-card-summary':
      return language === portuguese
        ? 'Essa API faz o quê?'
        : 'This API does what?'
    case 'node-card-details-paragraph-1':
      return language === portuguese
        ? 'A função dela é empacotar a API REST de characters, usando o graphql e seus beneficios, tais como:'
        : 'Its function is to wrapper the REST API Characters, using graphql and its benefits, such as:'
    case 'node-card-details-paragraph-2':
      return language === portuguese
        ? 'Você decide os dados que quer trazer (sem over fetching)'
        : 'You decide what data you want to fetch (no over fetching)'
    case 'node-card-details-paragraph-3':
      return language === portuguese
        ? 'Quantidade menor de dados trafegados no cliente (extremamente útil quando pensamos no mobile)'
        : 'Smaller amount of data transferred to the client (extremely useful when thinking about mobile)'
    case 'node-card-details-paragraph-4':
      return language === portuguese
        ? 'Personalização do cache (pode ser visto como uma desvantagem)'
        : 'Cache customization (can be seen as a disadvantage)'
    case 'node-card-details-paragraph-5':
      return language === portuguese
        ? 'Evolução da sua API. No graphql é possivel marcar queries como deprecated'
        : 'Evolution of your API. In graphql it is possible to mark queries as deprecated'
    case 'node-card-details-paragraph-6':
      return language === portuguese
        ? 'Hoje como trabalho como back-end mobile, é imprescindível que eu conheça o graphql.'
        : 'Today, as I work as a mobile backend, it is essential that I know graphql.'
    case 'node-card-details-paragraph-7':
      return language === portuguese
        ? 'Tanto o playground quanto o /metrics estão expostos, mas o ideal é que em ambiente de produção eles fiquem protegidos'
        : 'Both the playground and /metrics are exposed, but ideally in a production environment they are protected'
    case 'node-card-tech-summary':
      return language === portuguese
        ? 'Ferramentas e tecnologias usadas'
        : 'Tools and technologies used'
    case 'node-card-tech-header':
      return language === portuguese
        ? 'Por que utilizei essas tecnlogias?'
        : 'Why did I use these technologies?'
    case 'node-card-tech-paragraph-1':
      return language === portuguese
        ? 'Minha skill primária é com Java, secundária é com NodeJS, então escolhi o NodeJS para mostrar um pouquinho dela.'
        : 'My primary skill is Java, secondary is NodeJS, so I chose NodeJS to show a little bit of it.'
    case 'node-card-tech-paragraph-2':
      return language === portuguese
        ? 'Minha skill primária é com Java, secundária é com NodeJS, então escolhi o NodeJS para mostrar um pouquinho dela.'
        : 'My primary skill is Java, secondary is NodeJS, so I chose NodeJS to show a little bit of it.'
    case 'node-card-tech-paragraph-3':
      return language === portuguese
        ? 'O GraphQL foi escolhido pois hoje atuo como back-end de api\'s para mobile, então como o graphql permite manipular as queries e seus retornos (declarative data fetching), dão um poder maior para os dev\'s de app'
        : 'GraphQL was chosen because today I work as a backend for mobile api\'s, so as graphql allows you to manipulate queries and their returns (declarative data fetching), they give greater power to app dev\'s'
    case 'node-card-tech-paragraph-4':
      return language === portuguese
        ? 'Além disso poupa alguns dados dos usuários, pois não haverá over fetching... sem falar do cache personalizado para as queries e fácil integração com o Redis'
        : 'It also saves some user data, as there will be no over fetching... not to mention the custom cache for queries and easy integration with Redis'
    case 'node-card-tech-paragraph-5':
      return language === portuguese
        ? 'Por fim o GraphQL escolhido foi o graphql-yoga, pois me dá diversas possibilidades de personalização, como middlewares, que no graphql puro seria mais complicado de fazer'
        : 'Finally the GraphQL chosen was graphql-yoga, as it gives me several customization possibilities, such as middlewares, which in pure graphql would be more complicated to do'
    case 'node-card-tech-paragraph-6':
      return language === portuguese
        ? 'A escolha do Jest para os testes foi uma questão de preferência, poderia ter usado o Mocha, mas prefiro o Jest'
        : 'Choosing Jest for the tests was a matter of preference, I could have used Mocha, but I prefer Jest'
    case 'node-card-tech-paragraph-7':
      return language === portuguese
        ? 'Não poderia faltar o Prometheus, para registro de métricas. Com uma simples integração com o Grafana, é possivel configurar alarmes através de algumas métricas, além de dados serem úteis para tomada de decisão ;)'
        : 'We couldn\'t miss Prometheus, for recording metrics. With a simple integration with Grafana, it is possible to configure alarms through some metrics, besides data being useful for decision making ;)'
    case 'node-card-tech-paragraph-8':
      return language === portuguese
        ? 'Deploy também feito com ❤️Heroku❤️'
        : 'Deploy also done with ❤️Heroku❤️'
  }
}

export default translate