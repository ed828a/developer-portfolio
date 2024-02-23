import Image from "next/image";

type Props = {};

const TestImagePage = (props: Props) => {
  return (
    <div className="w-full grid grid-cols-2 gap-4 border border-yellow-500 p-4">
      <div className="h-auto">
        <Image
          src={"/images/articles/create loading screen in react js.jpg"}
          width={256}
          height={144}
          alt=""
        />
      </div>
      <div className="border border-sky-500">
        <Image
          src={
            "/images/articles/form validation in reactjs using custom react hook.png"
          }
          width={1280}
          height={720}
          alt=""
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default TestImagePage;
