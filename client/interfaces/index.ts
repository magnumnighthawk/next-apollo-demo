export type User = {
  name: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  avatar: string;
};

export type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type SpinnerProps = {
  noMargin?: boolean;
};

export type ButtonProps = {
  small?: boolean;
};
