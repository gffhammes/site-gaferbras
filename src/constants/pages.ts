export interface IPage {
  route: string;
  title: string;
}

export const pages: IPage[] = [
  {
    route: '/',
    title: 'Home',
  },
  {
    route: '/sobre-nos',
    title: 'Sobre nós',
  },
  {
    route: '/servicos',
    title: 'Serviços',
  },
  {
    route: '/estrutura',
    title: 'Estrutura',
  },
  {
    route: '/contato',
    title: 'Contato',
  },
]