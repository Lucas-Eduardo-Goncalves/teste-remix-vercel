import type { IUserInsideInTheRoom } from "~/global/types"

type IFunctionCalculatesAverageProps = {
  usersInsideInTheRoom: IUserInsideInTheRoom[]
}

export function functionCalculatesAverage({ 
  usersInsideInTheRoom 
}: IFunctionCalculatesAverageProps) {

  const total = usersInsideInTheRoom.reduce((acc, cur)=> {
    return acc + Number(cur.card.value)
  }, 0);

  const result = usersInsideInTheRoom.reduce((r, a) => {
    r[a.card.value] = r[a.card.value] || [];
    r[a.card.value].push(a);
    return r;
  }, Object.create(null));

  const a = Object.keys(result);
  const b = Object.values(result).map((car: any) => car.length)

  return {
    label: a,
    series: b,
    media: total / usersInsideInTheRoom.length
  }
}