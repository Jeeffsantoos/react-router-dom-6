import { Outlet, useParams } from 'react-router'
import './style.css'
import { useSearchParams } from 'react-router-dom';

export const Posts = () => {
  const [qs] = useSearchParams()
  const params = useParams();
  const {id} = params;
  console.log(id)

  return (
    <div>
      <h1>Posts {`Para: ${id}`} {`QS: ${qs.get('page')}`}</h1>
      <Outlet></Outlet>
    </div>
  )
}
