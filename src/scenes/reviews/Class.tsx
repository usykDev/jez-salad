type Props = {
  name: string;
  img: string;
  review: string;
  age: string;
};

const Class = ({ name, review, age, img }: Props) => {
  const overlayStyles = `p-5 absolute  flex w-full flex-col  
  `;
  return (
    <li className="relative mx-5 mt-10 inline-block min-h-[400px] w-[300px] rounded-lg bg-white">
      <div className={`${overlayStyles} `}>
        <img src={img} className="absolute -top-10 z-50" />
        <div className="mt-20 text-left text-gray-500">
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-xl text-gray-100">{age}</p>
          <p className="mt-5">{review}</p>
        </div>
      </div>
    </li>
  );
};

export default Class;
