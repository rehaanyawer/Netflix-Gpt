export const LOGO =
  'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const USER_AVATAR =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKN0shZqigIf-VDJIJHRIoQY34NHc5LgLBoVy8dMbxvq-3J2T_x__4q8SrCo8o1dYWzHs&usqp=CAU';

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
  },
};
