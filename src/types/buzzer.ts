export type BuzzerType = {
  data: Data[];
};

type Data = Buzzer[];

type Buzzer = {
  account_name: string;
  followers?: number;
  link?: string;
  photo?: string;
};
