import { pages } from "../constants/pages"

export const getCurrentPage = (route: string) => {
  return pages.find(page => page.route === route)
}