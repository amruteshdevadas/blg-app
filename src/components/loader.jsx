import { CircularProgress } from "@mui/material";

const loader = () => {
  return (
    <div className="fixed justify-center w-screen h-screen items-center flex">
      <CircularProgress />
    </div>
  );
};
export default loader;
