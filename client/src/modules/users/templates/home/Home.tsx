import { useContext, useEffect } from 'react';
import { UserContexts } from '../../../../contexts/UserContext';
import Footer from '../../organisms/footer/Footer';
import Form from '../../organisms/form/Form';
import Header from '../../organisms/header/Header';
import Table from '../../organisms/table/Table';

function HomeTemplate() {

  const { users, getAllUsers } = useContext(UserContexts);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
      <>
        <Header/>
          <div className='container mt-20'>
            <div className="col-6">
              {users && (
                <Table rows={users}/>
              )}
            </div>
            <div className="col-6">
              <Form/>
            </div>
          </div>
        <Footer/>
      </>
  );
}

export default HomeTemplate;
