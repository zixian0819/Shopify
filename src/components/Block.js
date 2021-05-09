import './Block.css';

const Block = ({ title, children }) => {
  return (
    <div className="bg-white p-10 blockCss">
      <div className="font-size-20 font-bold ">{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default Block;
