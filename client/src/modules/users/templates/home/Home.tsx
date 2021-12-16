import Footer from '../../organisms/footer/Footer';
import Form from '../../organisms/form/Form';
import Header from '../../organisms/header/Header';
import Table from '../../organisms/table/Table';
import { User } from '../../types/User';

function HomeTemplate() {

  const users:User[] = [
    {
      email: 'medinahildegar1@gmail.com',
      password: '123456'
    },
    {
      email: 'medinahildegar2@gmail.com',
      password: '123456'
    },
    {
      email: 'medinahildegar3@gmail.com',
      password: '123456'
    }
  ]

  return (
      <>
        <Header/>
          <div className='container mt-20'>
            <div className="col-6">
              <Table rows={users}/>
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
