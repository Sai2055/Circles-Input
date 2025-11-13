export default function NoOfCircles({ count }) {
  let size = count * 100;
  return (
    <div>
      <div
        className={` flex justify-center items-center border border-black rounded-[100%] w-[${size}px] h-[${size}px]`}
      >
        {count > 1 && <NoOfCircles count={count - 1} />}
      </div>
    </div>
  );
}
