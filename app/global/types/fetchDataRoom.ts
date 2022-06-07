export type IUserInsideInTheRoom = {
  id: string;
  email: string;
  timeEnteredRoom: Date; 

  card: {
    value: number;
    selected: boolean;
  };
}

export type IRoomConfig = {
  roomClosed: boolean;
  viewCards: boolean;
};

export type IRoomResponse = {
  label: string[];
  series: number[];
  media: number;
}

export type IReturnFetchDataRoom = {
  roomAdmin: {
    email: string;
    id: string;
  };

  roomConfig: IRoomConfig;

  roomInfo: {
    createdAt: Date;
    roomName: string;
  };

  usersInsideInTheRoom: IUserInsideInTheRoom[];

  roomResponse: IRoomResponse;
};