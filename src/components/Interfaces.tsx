export  interface IState {
    people:{
      name:  string;
      age: number;
      url: string;
      note?: string;
    }[]
  }

  export interface IData {
        data:{
            iD: number | string,
            city: string
        }[]
  }