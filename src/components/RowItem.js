const RowItem = (props) => {
  // console.log("whatisprips:", props);
  return (
    <li>
      <div className="row align-center m-tb-5">
        <div>
          {props.Title}({props.Year})
        </div>
        <div className="m-left-10 ">
          {props.type === 'remove' ? (
            <button className="handl btn " onClick={() => props.onRemove && props.onRemove()}>
              Remove
            </button>
          ) : (
            <button className={`handl btn btn-${props.type}`} disabled={!props.type} onClick={() => props.onNominate && props.onNominate()}>
              Nominate
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default RowItem;
