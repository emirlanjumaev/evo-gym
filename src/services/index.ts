import { LinksEnum } from "@/shared"

export const convertLink = (page: string) => {
   return page.replace(/\s/gi, "-").toLowerCase() as LinksEnum
}
