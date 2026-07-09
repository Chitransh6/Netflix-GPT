export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"




const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjI4NjYxNmYwNWRkMzg4ZjIwZTM2YzEwMDNmNTVmMSIsIm5iZiI6MTc4MzU3NzU1OS41NTQsInN1YiI6IjZhNGYzYmQ3N2YwYjE4YjhjMjJkZTVhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2y-PLy-wPZDXHj1SHFg6HxqFtDu3PNnm4Wm_X0i01vE';

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    // Add the line below
    authorization: `Bearer ${accessToken}`
  }
};

