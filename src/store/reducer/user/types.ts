export type initialStateType = {
  users: UserType[];
  success: boolean;
  total_pages: number;
  total_users: number;
  links: {
    next_url: string;
    prev_url: null;
  };
  params: {
    page: number;
    count: number;
  };
  isRedirectValue: boolean;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string;
  registrationTimestamp: number;
  photo: string;
};
