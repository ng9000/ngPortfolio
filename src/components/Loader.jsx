import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center text-3xl">
        <div className="animate-spin">😵‍💫</div>
      </div>
    </Html>
  );
};

export default Loader;
