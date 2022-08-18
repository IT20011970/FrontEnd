import { useState } from "react";
import { useTypedSelector } from "./../hooks/useTypedSelector";
import { useActions } from "./../hooks/useActions";
import { ServiceCallData } from "./../store/actions";

const ServiceCallList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { getAllServiceCalls } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.serviceCallGetAll
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    getAllServiceCalls();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* <input value={term} onChange={(e) => setTerm(e.target.value)} /> */}
        <button>Get All Service Calls</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data &&
        data.map((item: ServiceCallData) => (
          <div key={item.id}>{item.title}</div>
        ))}
    </div>
  );
};

export default ServiceCallList;
