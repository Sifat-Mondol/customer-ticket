import Container from '../Others/Container';
import vector1 from '../../assets/vector1.png';
import vector2 from '../../assets/vector2.png';

const Box = ({ count, resolvedCount }) => {

  return (
    <Container>
      <section className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0 gap-5 my-12">
        <div className="box box-1 relative">
          <img
            className="absolute top-0 left-0 h-full object-contain"
            src={vector1}
            alt=""
          />
          <img
            className="absolute top-0 right-0 h-full object-contain"
            src={vector2}
            alt=""
          />
          <h1 className=" text-2xl mb-3">In-Progress</h1>
          <p className="font-semibold text-6xl">{count}</p>
        </div>
        <div className="box box-2 relative">
          <img
            className="absolute bottom-0 left-0 object-contain"
            src={vector1}
            alt=""
          />
          <img
            className="absolute bottom-0 right-0 object-contain"
            src={vector1}
            alt=""
          />
          <h1 className=" text-2xl mb-3">Resolved</h1>
          <p className="font-semibold text-6xl">{resolvedCount}</p>
        </div>
      </section>
    </Container>
  );
};

export default Box;
