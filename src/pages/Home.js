import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    //  НТТР запрос если нужно
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2FjNzZiYTMwNTk3NTY2NzI1YzBlZTA2NzgwOTU2NCIsInN1YiI6IjY0N2U2NjIxY2Y0YjhiMDBlMmQ2ZjI4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OJYK009rGH_uxupdpxNNfOx0VK9mH-ozlusPwWtBbkw',
      },
    };

    fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, []);
  return <div>Домашняя строница</div>;
};

export default Home;
