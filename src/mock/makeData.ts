import { faker } from '@faker-js/faker';
import { format } from "date-fns";

export type Person = {
  name: string
  email: string
  status: boolean 
  organization: string
  createAt: string
}

const randomBooleans = () => {
  const random = Math.random()
  if (random < 0.5) {
    return true
  } else {
    return false
  }
}


const range = (len: number) => {
  const arr: Array<number> = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = (): Person => {
  return {
    name: faker.person.firstName() + ' ' + faker.person.lastName(),
    email: faker.internet.email(),
    status: randomBooleans(),
    organization: faker.company.name(),
    createAt: format(faker.date.birthdate(), 'dd/MM/yyyy'),
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!
    return range(len).map((): Person => {
      return {
        ...newPerson(),
      }
    })
  }

  return makeDataLevel()
}