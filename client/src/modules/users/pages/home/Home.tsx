import { UserContextsProvider } from '../../../../contexts/UserContext';
import HomeTemplate from '../../templates/home/Home';

function Home() {
  return (
      <>
        <UserContextsProvider>
          <div>
            <HomeTemplate/>
          </div>
        </UserContextsProvider>
      </>
  );
}

export default Home;
