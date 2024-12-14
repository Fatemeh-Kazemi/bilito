import Loading from "../main/Loading";

const Handler = ({ isPending, error, children }) => {
  if (isPending) return <Loading />;
  if (error) return "خطایی در بارگذاری داده ها رخ داد ..." + error.message;
  return children;
};

export default Handler;
