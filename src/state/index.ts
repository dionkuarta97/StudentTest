import { atom } from "jotai"

export type Student = {
  name: string,
  birthDay: Date
}

type Course = {
  name: string,
  students: Student[]
}

export const studentAtom = atom<Student[]>([])

export const courseAtom = atom<Course[]>([])